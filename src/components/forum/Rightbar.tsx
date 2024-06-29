import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { db, auth } from '../../utils/firebase';
import { getDocs, collection, doc, updateDoc, arrayUnion, deleteDoc } from 'firebase/firestore';
import { faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Postpop from './Postpop.tsx';
import Answers from './Answers.tsx';

type RightbarProps = {
  search: string;
  setSearch: (search: string) => void;
  darkMode: boolean;
  userFirstName: string;
};

const Rightbar = ({ search, setSearch, darkMode, userFirstName }: RightbarProps) => {
  const postsRef = collection(db, 'posts');
  const [questionData, setQuestionData] = useState<any[]>([]);
  const [post, setPost] = useState<boolean>(false);
  const [commentToggle, setCommentToggle] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string>('');
  const [questionId, setQuestionId] = useState<string | null>(null);
  const [upvotedPosts, setUpvotedPosts] = useState<Set<string>>(new Set());

  const getQuestion = async () => {
    try {
      const data = await getDocs(postsRef);
      const filteredData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setQuestionData(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const addAnswer = async () => {
    try {
      if (!questionId) return;

      const answerDoc = doc(db, 'posts', questionId);
      await updateDoc(answerDoc, {
        replies: arrayUnion({
          ans: answers,
          userFirstName,
          id: Date.now().toString(),
        }),
      });
      setAnswers('');
      getQuestion();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpvote = async (id: string, currentScore: number, postOwner: string) => {
    const currentUser = auth.currentUser;
    if (!currentUser || currentUser.email === postOwner) {
      console.log("Cannot upvote own post.");
      return;
    }

    if (upvotedPosts.has(id)) {
      console.log('User has already upvoted this post.');
      return;
    }

    try {
      const postDoc = doc(db, 'posts', id);
      await updateDoc(postDoc, { score: currentScore + 1 });
      setUpvotedPosts(new Set(upvotedPosts).add(id));
      getQuestion();
    } catch (err) {
      console.error(err);
    }
  };

  const deletePost = async (postId: string) => {
    try {
      const postDoc = doc(db, 'posts', postId);
      await deleteDoc(postDoc);
      setQuestionData(questionData.filter(post => post.id !== postId));
    } catch (err) {
      console.error('Error deleting post:', err);
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);

  const handlePostAdd = (newPost: any) => {
    setQuestionData([newPost, ...questionData]);
  };

  const filteredQuestionData = questionData.filter((data: any) => {
    return data.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={`p-4 rounded-sm ${darkMode ? 'dark bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <Avatar round size="40" className="mr-3 cursor-pointer" name={userFirstName} />
          <input
            onClick={() => setPost(true)}
            placeholder="What do you want to post?"
            className="flex-grow bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-center space-x-8 mt-4">
          <button
            onClick={() => setPost(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200"
          >
            Add
          </button>
          <button
            onClick={() => setPost(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200"
          >
            Post
          </button>
        </div>
      </div>
      {filteredQuestionData.map((data: any, index: number) => (
        <div key={index} className="bg-white dark:bg-gray-900 mt-4 p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <Avatar round size="40" className="mr-3 cursor-pointer" name={data?.userFirstName} />
            <h1 className="font-bold">{data?.userFirstName}</h1>
          </div>
          <h1 className="font-semibold mt-2">{data?.title}</h1>
          <h1 className="mt-1">{data?.content}</h1>
          <div className="flex items-center mt-3">
            <img
              onClick={() => {
                setQuestionId(data?.id);
                setCommentToggle(commentToggle === data?.id ? null : data?.id);
              }}
              className={`w-5 h-5 cursor-pointer ml-3 ${darkMode ? 'filter invert' : ''}`}
              alt="Comment"
              src="https://res.cloudinary.com/ddyejtuqb/image/upload/v1718049298/comment_3_orgkpr.png"
            />
            <span className="ml-2">{data.replies?.length || 0}</span>
            {!auth.currentUser || data.email !== auth.currentUser.email ? (
              <div className="flex items-center ml-3">
                <img
                  onClick={() => handleUpvote(data?.id, data?.score || 0, data.email)}
                  className={`w-5 h-5 cursor-pointer ${darkMode ? 'filter invert' : ''}`}
                  alt="Upvote"
                  src="https://res.cloudinary.com/ddyejtuqb/image/upload/v1718049360/upvote_lq4eww.png"
                />
                <span className="ml-2">{data?.score || 0}</span>
              </div>
            ) : null}
            <div className="relative">
              <img
                onClick={() => deletePost(data.id)}
                className={`w-5 h-7 cursor-pointer ml-4 ${darkMode ? 'filter invert' : ''}`}
                alt="Delete"
                src="https://res.cloudinary.com/ddyejtuqb/image/upload/v1718048639/cross_qwgs7u.png"
              />
            </div>
          </div>
          {commentToggle ===data?.id && (
<div className="mt-3">
<div className="flex items-center">
<Avatar round size="35" className="mr-3 cursor-pointer" name={userFirstName} />
<input
value={answers}
onChange={(e) => setAnswers(e.target.value)}
placeholder="Add Comment Here?"
className="flex-grow bg-gray-100 dark
border border-gray-300 dark
p-2 rounded-full focus
focus
focus
"
/>
<button
onClick={() => {
addAnswer();
setCommentToggle(null);
}}
className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-full hover
transition duration-200"
>
Add
</button>
</div>
<Answers questionId={data.id} />
</div>
)}
</div>
))}
{post && <Postpop setPost={setPost} onPostAdd={handlePostAdd} userFirstName={userFirstName} />}
</div>
);
};

export default Rightbar;

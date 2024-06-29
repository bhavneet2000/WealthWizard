import React, { useState, useRef, useEffect } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase";
import Avatar from "react-avatar";

type PostpopProps = {
  setPost: (post: boolean) => void;
  onPostAdd: (post: any) => void;
  userFirstName: string;
};

const Postpop = ({ setPost, onPostAdd, userFirstName }: PostpopProps) => {
  const postsRef = collection(db, "posts");
  const [post, setPostContent] = useState("");
  const [title, setTitle] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const addPosts = async () => {
    try {
      const docRef = await addDoc(postsRef, {
        title: title,
        content: post,
        email: auth?.currentUser?.email,
        userFirstName
      });
      onPostAdd({ title: title, content: post, email: auth?.currentUser?.email, id: docRef.id, userFirstName });
      setTitle("");
      setPostContent("");
      setPost(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
    autoExpand(e.target);
  };

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const autoExpand = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    if (textareaRef.current) {
      autoExpand(textareaRef.current);
    }
  }, [post]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-75">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg mx-4">
        <div className="p-6">
          <div className="flex items-center">
            <Avatar
              round
              size="40"
              className="mr-3"
              name={userFirstName}
            />
            <h2 className="text-lg font-semibold">{userFirstName}</h2>
          </div>
          <div className="mt-4">
            <input
              type="text"
              value={title}
              onChange={handleTitleInput}
              placeholder="Enter the title of your post"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ color: "#000" }} // Ensure text color is visible
            />
            <textarea
              ref={textareaRef}
              value={post}
              onChange={handleInput}
              placeholder="What's on your mind?"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
              style={{ color: "#000" }}
            />
          </div>
          <div className="mt-4 flex justify-end space-x-3">
            <button onClick={() => setPost(false)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200">
              Cancel
            </button>
            <button onClick={addPosts} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postpop;

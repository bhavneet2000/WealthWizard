import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

type AnswersProps = {
  questionId: string;
};

const Answers = ({ questionId }: AnswersProps) => {
  const [answers, setAnswers] = useState<any[]>([]);

  const getAnswers = async () => {
    try {
      const postDoc = doc(db, "posts", questionId);
      const postSnapshot = await getDoc(postDoc);
      if (postSnapshot.exists()) {
        const postData = postSnapshot.data();
        setAnswers(postData.replies || []);
      } else {
        console.error("No such document!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAnswers();
  }, [questionId]);

  return (
    <div className="mt-2">
      {answers.map((answer: any) => (
        <div
          key={answer.id}
          className="bg-gray-200 dark:bg-gray-700 p-2 rounded mt-2"
        >
          <h4 className="font-semibold">{answer.userFirstName}</h4>
          <p>{answer.ans}</p>
        </div>
      ))}
    </div>
  );
};

export default Answers;

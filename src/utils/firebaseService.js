// firebaseServices.js
import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Function to add a question to Firestore
export const addQuestion = async (userId, question) => {
  try {
    await addDoc(collection(db, "questions"), {
      userId,
      question,
      timestamp: new Date(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Function to get questions for a user from Firestore
export const getQuestionsForUser = async (userId) => {
  const q = query(collection(db, "questions"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  let questions = [];
  querySnapshot.forEach((doc) => {
    questions.push({ id: doc.id, ...doc.data() });
  });
  return questions;
};

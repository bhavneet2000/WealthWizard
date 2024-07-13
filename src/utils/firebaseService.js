import { db } from "./firebase"; // Import Firestore instance
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

// Function to get user chat history
export const getUserChatHistory = async (userId) => {
  const userDocRef = doc(db, "users", userId);
  const userDoc = await getDoc(userDocRef);
  if (userDoc.exists()) {
    return userDoc.data().chatHistory || [];
  } else {
    return [];
  }
};

// Function to save user chat history
export const saveUserChatHistory = async (userId, chatHistory) => {
  const userDocRef = doc(db, "users", userId);
  await setDoc(userDocRef, { chatHistory }, { merge: true });
};

// Function to add a single chat to user chat history
export const addUserChat = async (userId, chat) => {
  const userDocRef = doc(db, "users", userId);
  await updateDoc(userDocRef, {
    chatHistory: arrayUnion(chat),
  });
};

import React, { createContext, useState, useEffect } from "react";
import { runChat } from "../components/config/gemini"; // Adjust the path as needed
import { getDoc, doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../utils/firebase"; // Adjust the path as needed

export const context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [userId, setUserId] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.questions) {
            setQuestions(userData.questions);
          }
        }
      } else {
        setUserId(null);
        setQuestions([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const saveUserQuestion = async (question) => {
    if (userId) {
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const updatedQuestions = [...(userData.questions || []), question];
        await setDoc(
          userDocRef,
          { questions: updatedQuestions },
          { merge: true }
        );
        setQuestions(updatedQuestions); // Update local state
      }
    }
  };

  const onSent = async () => {
    setLoading(true);
    const prompt = input.trim();

    if (!prompt) return;

    setChatHistory((prev) => [...prev, { prompt, response: "loading..." }]);

    try {
      const response = await runChat(prompt);
      const formattedResponse = response.replace(/\*/g, "\n");
      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1].response = formattedResponse;
        return updatedHistory;
      });
      speakText(formattedResponse); // Speak the response
      await saveUserQuestion(prompt); // Save the question after sending
    } catch (error) {
      console.error("Error during conversation:", error);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);

      // Set the language for Hindi text
      if (/[\u0900-\u097F]/.test(text)) {
        utterance.lang = "hi-IN"; // Hindi
      } else {
        utterance.lang = "en-US"; // Default to English
      }

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = (e) => {
        console.error("Speech synthesis error:", e);
        setIsSpeaking(false);
      };
      setIsSpeaking(true);
      speechSynthesis.speak(utterance);
    } else {
      console.error("Speech synthesis not supported");
    }
  };

  const handleStopSpeaking = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel(); // Stop any ongoing speech
      setIsSpeaking(false);
    }
  };

  return (
    <context.Provider
      value={{
        input,
        setInput,
        chatHistory,
        loading,
        isSpeaking,
        speakText,
        handleStopSpeaking,
        onSent,
        questions,
        saveUserQuestion,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default ContextProvider;

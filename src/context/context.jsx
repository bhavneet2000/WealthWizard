import React, { createContext, useState, useEffect } from "react";
import { runChat } from "../components/config/gemini"; // Adjust the path as needed
import { getDoc, doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../utils/firebase"; // Adjust the path as needed
import { decryptData, encryptData } from "../utils/decryptionUtils";

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
        const encryptedQn = await encryptData(question);
        const decryptedData = await decryptData(encryptedQn);
        console.log("Decrypted Data", decryptedData);
        const updatedQuestions = [...(userData.questions || []), encryptedQn];
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

    if (!prompt) {
      setLoading(false);
      return;
    }

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

      // Save the user question only if it's a new prompt
      if (prompt !== input.trim()) {
        await saveUserQuestion(prompt); // Save the question after sending
      }
    } catch (error) {
      console.error("Error during conversation:", error);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      // Remove emojis from text
      const emojiRegex =
        /[\u{1F600}-\u{1F6FF}|\u{1F300}-\u{1F5FF}|\u{1F700}-\u{1F77F}|\u{1F780}-\u{1F7FF}|\u{1F800}-\u{1F8FF}|\u{1F900}-\u{1F9FF}|\u{1FA00}-\u{1FA6F}|\u{1FA70}-\u{1FAFF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}|\u{1F100}-\u{1F1FF}|\u{1F200}-\u{1F2FF}|\u{1F300}-\u{1F5FF}|\u{1F600}-\u{1F64F}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{1F780}-\u{1F7FF}|\u{1F800}-\u{1F8FF}|\u{1F900}-\u{1F9FF}|\u{1FA00}-\u{1FA6F}|\u{1FA70}-\u{1FAFF}|\u{2300}-\u{23FF}|\u{25A0}-\u{25FF}|\u{2700}-\u{27BF}|\u{1F1E0}-\u{1F1FF}|\u{1F300}-\u{1F5FF}|\u{1F600}-\u{1F64F}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{1F780}-\u{1F7FF}|\u{1F800}-\u{1F8FF}|\u{1F900}-\u{1F9FF}|\u{1FA00}-\u{1FA6F}|\u{1FA70}-\u{1FAFF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}|\u{1F100}-\u{1F1FF}|\u{1F200}-\u{1F2FF}|\u{1F300}-\u{1F5FF}|\u{1F600}-\u{1F64F}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{1F780}-\u{1F7FF}|\u{1F800}-\u{1F8FF}|\u{1F900}-\u{1F9FF}|\u{1FA00}-\u{1FA6F}|\u{1FA70}-\u{1FAFF}]/gu;
      const cleanText = text.replace(emojiRegex, "");

      const sentences = cleanText.split(/(?<=\.\s)/); // Split text into sentences for better handling

      const speakSentence = (sentence) => {
        return new Promise((resolve, reject) => {
          const utterance = new SpeechSynthesisUtterance(sentence);

          // Set the language based on content
          if (/[\u0900-\u097F]/.test(sentence)) {
            utterance.lang = "hi-IN"; // Hindi
          } else {
            utterance.lang = "en-US"; // Default to English
          }

          utterance.onend = resolve;
          utterance.onerror = (e) => {
            console.error("Speech synthesis error:", e);
            reject(e);
          };

          speechSynthesis.speak(utterance);
        });
      };

      const speakAllSentences = async () => {
        setIsSpeaking(true);
        try {
          for (const sentence of sentences) {
            await speakSentence(sentence);
          }
        } catch (error) {
          console.error("Error speaking sentence:", error);
        } finally {
          setIsSpeaking(false);
        }
      };

      speakAllSentences();
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

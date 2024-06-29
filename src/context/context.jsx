import { createContext, useState, useEffect } from "react";
import { runChat } from "../components/config/gemini";

export const context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const formatResponse = (response) => {
    let formattedResponse = response.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    formattedResponse = formattedResponse
      .replace(/;/g, "; <br/>")
      .replace(/:/g, ": <br/>")
      .replace(/(\d+)\./g, "<br/>$1.")
      .replace(/\*/g, "<br/>");
    return formattedResponse;
  };

  const handleSpeechInput = () => {
    return new Promise((resolve, reject) => {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        resolve(transcript);
      };

      recognition.onerror = (event) => {
        reject(event.error);
      };

      recognition.start();
    });
  };

  const onSent = async () => {
    setLoading(true);
    let prompt;
    if (input.trim()) {
      prompt = input.trim();
    } else {
      try {
        prompt = await handleSpeechInput();
        setInput(prompt);
      } catch (error) {
        console.error("Speech recognition error:", error);
        setLoading(false);
        return;
      }
    }

    setChatHistory((prev) => [...prev, { prompt, response: "loading..." }]);
    try {
      const response = await runChat(prompt);
      const formattedResponse = formatResponse(response);
      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1].response = formattedResponse;
        return updatedHistory;
      });
    } catch (error) {
      console.error("Error during conversation:", error);
      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1].response =
          "An error occurred while communicating with the model.";
        return updatedHistory;
      });
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const removeEmojis = (text) => {
    return text.replace(
      /([\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}-\u{2B55}\u{231A}-\u{23F3}\u{23F0}\u{231B}\u{23F1}-\u{23F2}\u{23E9}-\u{23EF}\u{23F4}-\u{23F7}\u{23F8}-\u{23FA}\u{2B06}\u{2194}-\u{21AA}\u{2B05}\u{2195}-\u{21B7}\u{2B07}\u{21A9}])/gu,
      ""
    );
  };

  const speakText = (text) => {
    const synthesis = new SpeechSynthesisUtterance(removeEmojis(text));
    synthesis.onend = () => {
      setIsSpeaking(false);
    };
    window.speechSynthesis.speak(synthesis);
    setIsSpeaking(true);
  };

  const handleStopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const contextValue = {
    input,
    setInput,
    onSent,
    chatHistory,
    loading,
    isSpeaking,
    speakText,
    handleStopSpeaking,
  };

  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};
export default ContextProvider;

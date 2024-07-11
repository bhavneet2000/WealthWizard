import React, { useContext, useRef, useEffect } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/context";
import Header from "../Header/header";

const MainBot = () => {
  const {
    onSent,
    input,
    setInput,
    chatHistory,
    loading,
    isSpeaking,
    speakText,
    handleStopSpeaking,
    formatResponse,
    newFormatResponse,
  } = useContext(context);
  const chatEndRef = useRef(null);
  const recognition = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      onSent(input.trim());
      stopRecognition();
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert(
        "Your browser does not support speech recognition. Please use a supported browser."
      );
      return;
    }

    if (!recognition.current) {
      recognition.current = new window.webkitSpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;
      recognition.current.lang = "en-US";

      recognition.current.onresult = (event) => {
        let finalTranscript = "";
        let interimTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + " ";
          } else {
            interimTranscript += event.results[i][0].transcript + " ";
          }
        }

        setInput(finalTranscript.trim() || interimTranscript.trim());

        if (finalTranscript.trim() || interimTranscript.trim()) {
          handleSend();
        }
      };

      recognition.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };
    }

    recognition.current.start();

    setTimeout(() => {
      if (recognition.current && recognition.current.state === "recording") {
        recognition.current.stop();
        console.log("Speech recognition stopped due to inactivity.");
      }
    }, 3000);
  };

  const stopRecognition = () => {
    if (recognition.current) {
      recognition.current.stop();
    }
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  return (
    <div>
      <Header />
      <div className="main">
        <div className="nav">
          <p className="font-bold text-3xl">WizBot</p>
          <img src={assets.user_icon} alt="user icon" />
        </div>

        <div className="main-container">
          <div className="chat-history">
            {chatHistory.map((chat, index) => (
              <div key={index} className="chat-item">
                <div className="chat-prompt">
                  <img src={assets.user_icon} alt="user icon" />
                  <p>{chat.prompt}</p>
                </div>
                <div className="chat-response">
                  <img src={assets.gemini_icon} alt="gemini icon" />
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        loading && index === chatHistory.length - 1
                          ? "loading..."
                          : newFormatResponse(chat.response), // Use newFormatResponse for formatted display
                    }}
                  ></p>
                  <button
                    className="bg-red-700 p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 flex items-center space-x-2"
                    onClick={() => speakText(chat.response)}
                  >
                    🔊
                  </button>
                  {isSpeaking && (
                    <button
                      className="bg-red-700 p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 flex items-center space-x-2"
                      onClick={handleStopSpeaking}
                    >
                      ⏹
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div ref={chatEndRef}></div>
          </div>

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={handleInputChange}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img
                  src={assets.mic_icon}
                  alt=""
                  onClick={handleVoiceInput}
                  className="mic-icon"
                />
                {input && (
                  <img onClick={handleSend} src={assets.send_icon} alt="" />
                )}
              </div>
            </div>
            <p className="bottom-info">
              Wizmo may display inaccurate information, including about people,
              so double-check its responses. Your privacy and Gemini Apps.
            </p>
            {loading && <p className="loading-indicator">Loading...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBot;

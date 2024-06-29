import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/header";

const Retire = () => {
  const navigate = useNavigate();
  const [recognition, setRecognition] = useState(null);
  const [buttonText, setButtonText] = useState("Start Voice Recognition");

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const speechRecognition = new window.webkitSpeechRecognition();
      speechRecognition.continuous = true;
      speechRecognition.interimResults = false;
      speechRecognition.lang = "en-US";

      speechRecognition.onresult = (event) => {
        const transcript = event.results[event.resultIndex][0].transcript
          .trim()
          .toLowerCase();
        console.log("Voice input:", transcript);

        if (transcript === "take me to first module") {
          speechRecognition.stop();
          navigate("/course1");
        } else if (transcript === "take me to second module") {
          speechRecognition.stop();
          navigate("/course2");
        } else if (transcript === "go to course 1") {
          speechRecognition.stop();
          navigate("/course1");
        } else if (transcript === "go to course 2") {
          speechRecognition.stop();
          navigate("/course2");
        } else if (transcript === "open course 1") {
          speechRecognition.stop();
          navigate("/course1");
        } else if (transcript === "open course 2") {
          speechRecognition.stop();
          navigate("/course2");
        } else if (transcript === "show me your first module") {
          speechRecognition.stop();
          navigate("/course1");
        } else if (transcript === "show me your second module") {
          speechRecognition.stop();
          navigate("/course2");
        }
      };

      speechRecognition.onstart = () => {
        setButtonText("Listening...");
      };

      speechRecognition.onend = () => {
        setButtonText("Start Voice Recognition");
      };

      speechRecognition.onerror = (event) => {
        console.error("Speech recognition error", event);
      };

      setRecognition(speechRecognition);
    } else {
      console.warn("Web Speech API is not supported in this browser.");
    }
  }, [navigate]);

  const startListening = () => {
    if (recognition) {
      recognition.start();
    } else {
      alert("Voice recognition is not supported in this browser.");
    }
  };

  const speakPageSummary = () => {
    const summaryText = `
      Welcome to the Courses page of WealthWizard! Here, you can explore the exciting courses we offer.
      Currently, we have two fantastic courses: Understanding Annuity and Health Care Planning.
      Dive into these courses by clicking on their respective links.
      You can also use voice commands to navigate—just say 'take me to first module ' or 'take me to second module'.
    `;

    const speech = new SpeechSynthesisUtterance(summaryText);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Courses
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          INSTRUCTION: We can help you navigate through our courses using your
          voice! We hope that we can help you and make your experience at
          WealthWizard fantastic!
        </p>
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={startListening}
            className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md focus:outline-none hover:bg-blue-600 transition duration-300"
          >
            {buttonText}
          </button>
          <button
            onClick={speakPageSummary}
            className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md focus:outline-none hover:bg-green-600 transition duration-300"
          >
            Explain Page
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/course1"
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-blue-600">
              Understanding Annuity
            </h2>
            <img
              src="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718651383/annuity_hd15rn.webp"
              alt="Annuity"
              className="w-full h-60 object-cover mb-2"
            />
            <p className="text-gray-700 text-sm">
              An annuity is a contract between an individual and an insurance
              company
            </p>
          </Link>
          <Link
            to="/course2"
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-blue-600">
              Health Care Planning
            </h2>
            <img
              src="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718651258/health_g82ixr.jpg"
              alt="Health Care"
              className="w-full h-60 object-cover mb-2"
            />
            <p className="text-gray-700 text-sm">
              Evaluate the need for long-term care insurance to cover expenses
              that Medicare
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Retire;

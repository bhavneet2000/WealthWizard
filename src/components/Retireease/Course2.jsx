import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/header';

const Course2 = () => {
  const navigate = useNavigate();
  const [recognition, setRecognition] = useState(null);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [buttonText, setButtonText] = useState('Start Voice Recognition');

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const speechRecognition = new window.webkitSpeechRecognition();
      speechRecognition.continuous = true;
      speechRecognition.interimResults = false;
      speechRecognition.lang = 'en-US';

      speechRecognition.onresult = (event) => {
        const transcript = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
        console.log('Voice input:', transcript);

        if (transcript === 'go back') {
          speechRecognition.stop();
          navigate('/retirement');
        } else if (transcript === 'go back to courses') {
          speechRecognition.stop();
          navigate('/retirement');
        } else if (transcript === 'open home page') {
          speechRecognition.stop();
          navigate('/retirement');
        } else if (transcript === 'take me back to courses') {
          speechRecognition.stop();
          navigate('/retirement');
        }
      };

      speechRecognition.onstart = () => {
        setButtonText('Listening...');
      };

      speechRecognition.onend = () => {
        setButtonText('Start Voice Recognition');
      };

      speechRecognition.onerror = (event) => {
        console.error('Speech recognition error', event);
      };

      setRecognition(speechRecognition);
    } else {
      console.warn('Web Speech API is not supported in this browser.');
    }
  }, [navigate]);

  const startListening = () => {
    if (recognition) {
      recognition.start();
    } else {
      alert('Voice recognition is not supported in this browser.');
    }
  };

  const speakPageSummary = () => {
    const summaryText = `
      Welcome to the Health Care Planning course! In this course, you will learn about Medicare and Supplement Plans,
      including different parts of Medicare and how Medigap can help cover out-of-pocket costs. You will also learn
      about Long-Term Care Insurance, its key features, and how it can help cover the costs of long-term care services.
    `;

    const speech = new SpeechSynthesisUtterance(summaryText);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
  };

  const toggleTopic = (topic) => {
    if (expandedTopic === topic) {
      setExpandedTopic(null);
    } else {
      setExpandedTopic(topic);
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Health Care Planning</h1>
        <div className="space-y-4">
          <div className="border border-gray-300 rounded-md p-4">
            <h2
              onClick={() => toggleTopic('medicareAndSupplementPlans')}
              className="text-xl font-semibold mb-2 cursor-pointer flex items-center justify-between"
            >
              <span>Medicare and Supplement Plans</span>
              <span className="text-lg">
                {expandedTopic === 'medicareAndSupplementPlans' ? '▲' : '▼'}
              </span>
            </h2>
            {expandedTopic === 'medicareAndSupplementPlans' && (
              <div className="text-gray-700">
                <p>
                  Medicare is a federal health insurance program for people who are 65 or older, as well as some younger people with disabilities or specific health conditions. It consists of different parts, including:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Part A: Hospital Insurance</li>
                  <li>Part B: Medical Insurance</li>
                  <li>Part C: Medicare Advantage Plans</li>
                  <li>Part D: Prescription Drug Coverage</li>
                </ul>
                <p className="mt-2">
                  Medicare Supplement Plans, also known as Medigap, are private insurance plans that help cover out-of-pocket costs not covered by Original Medicare (Part A and Part B), such as copayments, coinsurance, and deductibles.
                </p>
              </div>
            )}
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <h2
              onClick={() => toggleTopic('longTermCareInsurance')}
              className="text-xl font-semibold mb-2 cursor-pointer flex items-center justify-between"
            >
              <span>Long-Term Care Insurance</span>
              <span className="text-lg">
                {expandedTopic === 'longTermCareInsurance' ? '▲' : '▼'}
              </span>
            </h2>
            {expandedTopic === 'longTermCareInsurance' && (
              <div className="text-gray-700">
                <p>
                  Long-Term Care Insurance is a type of insurance that helps cover the costs of long-term care services, such as assisted living, nursing home care, or in-home care. These services are typically not covered by traditional health insurance or Medicare.
                </p>
                <p className="mt-2">
                  Key features of Long-Term Care Insurance include:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Coverage for a variety of long-term care services</li>
                  <li>Choice of daily or monthly benefit amounts</li>
                  <li>Elimination period (waiting period) before benefits begin</li>
                  <li>Option to choose the duration of coverage</li>
                </ul>
                <p className="mt-2">
                  It's important to consider factors such as age, health status, and financial situation when deciding whether to purchase Long-Term Care Insurance and how much coverage to obtain.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
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
      </div>
    </div>
  );
};

export default Course2;

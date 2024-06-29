import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/header';

const Course1 = () => {
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
      Welcome to the Understanding Annuity course! Here, you can learn about different types of annuities, 
      annuity payment structures, payout options, and the benefits and drawbacks of annuities.
      Navigate through the course topics to dive deeper. You can use voice commands to go back to the courses page.
      We hope you find this course informative and engaging!
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
        <h1 className="text-3xl font-bold mb-6">Understanding Annuity</h1>
        <div className="space-y-4">
          <div className="border border-gray-300 rounded-md p-4">
            <h2
              onClick={() => toggleTopic('typesOfAnnuity')}
              className="text-xl font-semibold mb-2 cursor-pointer flex items-center justify-between"
            >
              <span>Types of Annuity</span>
              <span className="text-lg">
                {expandedTopic === 'typesOfAnnuity' ? '▲' : '▼'}
              </span>
            </h2>
            {expandedTopic === 'typesOfAnnuity' && (
              <div className="text-gray-700">
                <p>There are three main types of annuities:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <strong>Fixed Annuities:</strong> These provide a guaranteed fixed rate of return, offering stable and predictable income payments. The insurance company assumes the investment risk.
                  </li>
                  <li>
                    <strong>Variable Annuities:</strong> These allow you to invest in various sub-accounts, similar to mutual funds. The income payments fluctuate based on the performance of the underlying investments. You assume the investment risk.
                  </li>
                  <li>
                    <strong>Indexed Annuities:</strong> These combine features of fixed and variable annuities. The returns are linked to a market index, such as the S&P 500, with a guaranteed minimum return. The insurance company assumes the investment risk.
                  </li>
                </ul>
                <p className="mt-2">
                  Each type of annuity has its own set of features, benefits, and risks. It's essential to understand the differences and choose the one that aligns with your financial goals and risk tolerance.
                </p>
              </div>
            )}
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <h2
              onClick={() => toggleTopic('annuityPaymentStructure')}
              className="text-xl font-semibold mb-2 cursor-pointer flex items-center justify-between"
            >
              <span>Annuity Payment Structure</span>
              <span className="text-lg">
                {expandedTopic === 'annuityPaymentStructure' ? '▲' : '▼'}
              </span>
            </h2>
            {expandedTopic === 'annuityPaymentStructure' && (
              <div className="text-gray-700">
                <p>Annuities can be structured in two main ways based on when the income payments begin:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <strong>Immediate Annuities:</strong> With an immediate annuity, you start receiving income payments right away or within a short period after purchasing the annuity. This is suitable if you need immediate income.
                  </li>
                  <li>
                    <strong>Deferred Annuities:</strong> With a deferred annuity, there is an accumulation phase where your money grows tax-deferred until you choose to begin receiving income payments at a later date. This allows your money to grow over time before you start withdrawing from it.
                  </li>
                </ul>
                <p className="mt-2">
                  The payment structure you choose depends on your current financial situation and future income needs. Immediate annuities provide instant income, while deferred annuities offer the potential for growth and higher future income.
                </p>
              </div>
            )}
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <h2
              onClick={() => toggleTopic('annuityPayoutOptions')}
              className="text-xl font-semibold mb-2 cursor-pointer flex items-center justify-between"
            >
              <span>Annuity Payout Options</span>
              <span className="text-lg">
                {expandedTopic === 'annuityPayoutOptions' ? '▲' : '▼'}
              </span>
            </h2>
            {expandedTopic === 'annuityPayoutOptions' && (
              <div className="text-gray-700">
                <p>Annuities offer several payout options to suit different needs:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <strong>Lifetime Payments:</strong> You receive guaranteed income payments for as long as you live, ensuring a steady stream of income throughout your retirement years.
                  </li>
                  <li>
                    <strong>Period Certain Payments:</strong> You receive income payments for a specific period, such as 10, 15, or 20 years. If you pass away before the end of the period, your beneficiaries receive the remaining payments.
                  </li>
                  <li>
                    <strong>Joint and Survivor Payments:</strong> This option is suitable for couples. Income payments continue as long as either spouse is alive, providing financial security for both individuals.
                  </li>
                  <li>
                    <strong>Lump-Sum Payment:</strong> You receive the entire annuity value in a single payment, giving you full control over your money. However, this option does not provide the benefit of guaranteed lifetime income.
                  </li>
                </ul>
                <p className="mt-2">
                  The payout option you select should align with your long-term financial goals, life expectancy, and desire for guaranteed income. It's crucial to review the terms and conditions of each option before making a decision.
                </p>
              </div>
            )}
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <h2
              onClick={() => toggleTopic('benefitsAndDrawbacks')}
              className="text-xl font-semibold mb-2 cursor-pointer flex items-center justify-between"
            >
              <span>Benefits and Drawbacks of Annuity</span>
              <span className="text-lg">
                {expandedTopic === 'benefitsAndDrawbacks' ? '▲' : '▼'}
              </span>
            </h2>
            {expandedTopic === 'benefitsAndDrawbacks' && (
              <div className="text-gray-700">
                <p>Annuities offer several benefits but also come with some drawbacks:</p>
                <p className="mt-2 font-semibold">Benefits:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>Guaranteed lifetime income, providing financial security in retirement</li>
                  <li>Tax-deferred growth, allowing your money to grow without immediate tax consequences</li>
                  <li>Customizable payout options to suit your specific needs</li>
                  <li>Protection against market volatility and longevity risk</li>
                </ul>
                <p className="mt-2 font-semibold">Drawbacks:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>High fees and expenses, which can eat into your returns</li>
                  <li>Limited liquidity and access to your money, especially in the early years of the contract</li>
                  <li>Lack of flexibility to change the terms of the annuity once it's in place</li>
                  <li>Complex contract terms and conditions that can be difficult to understand</li>
                </ul>
                <p className="mt-2">
                  It's essential to carefully weigh the pros and cons of annuities and consider your unique financial situation before making a purchase. Consulting with a financial professional can help you determine if an annuity is the right choice for you.
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

export default Course1;

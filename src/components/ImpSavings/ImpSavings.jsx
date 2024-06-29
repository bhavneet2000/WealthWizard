import React, { useState } from 'react';
import Header from '../Header/header';

const ImpSavings = () => {
  // State variable to track highlighted sections
  const [highlightedSections, setHighlightedSections] = useState([]);

  // Function to handle highlighting
  const handleHighlight = (index) => {
    // Check if the section is already highlighted
    if (highlightedSections.includes(index)) {
      // If already highlighted, remove it from the list
      setHighlightedSections(highlightedSections.filter((item) => item !== index));
    } else {
      // If not highlighted, add it to the list
      setHighlightedSections([...highlightedSections, index]);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 to-pink-200 min-h-screen">
      <Header />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl text-center font-bold text-purple-800 mb-8">
            Meet Savvy the Saver: Your Magical Piggy Bank Companion!
          </h1>
          <div className="flex justify-center mb-8">
            <img src="https://img.freepik.com/free-psd/dollar-coins-flying-pink-piggy-bank_1150-51400.jpg" alt="Savvy the Saver" className="w-48 h-48 mb-4" />
          </div>
          <p className="text-lg text-purple-700 mb-6">
            Do you know the secret of saving money? Well, let me introduce you to a special friend who can help you understand the magic of saving – Savvy the Saver!
          </p>
          {/* Add highlight button for each section */}
          <p className={`text-lg text-purple-700 mb-6 ${highlightedSections.includes(1) && 'bg-yellow-200'}`}>
            <strong>1. Savvy Keeps You Safe:</strong> Think of Savvy as your trusty shield against unexpected troubles. If you ever need money for something important, like fixing a broken toy or visiting the doctor, Savvy will be there to help you out.{' '}
            <button className="ml-2 bg-yellow-300 text-gray-800 px-3 py-1 rounded-full" onClick={() => handleHighlight(1)}>Highlight</button>
          </p>
          <p className={`text-lg text-purple-700 mb-6 ${highlightedSections.includes(2) && 'bg-yellow-200'}`}>
            <strong>2. Savvy Helps You Reach Your Dreams:</strong> Close your eyes and picture your biggest dreams – maybe it's a new toy, a fun trip, or even saving up for college one day. Whatever it is, Savvy can make it happen! With Savvy by your side, you can turn your dreams into reality.{' '}
            <button className="ml-2 bg-yellow-300 text-gray-800 px-3 py-1 rounded-full" onClick={() => handleHighlight(2)}>Highlight</button>
          </p>
          {/* Add more sections with highlight buttons */}
          <p className="text-lg text-purple-700 mb-6">
            So, how do you unleash the magic of Savvy? It's simple – feed Savvy regularly by adding some of your allowance or birthday money. Watch as your savings grow and let Savvy work its magic to keep you safe, help you reach your dreams, teach you patience, and make you feel proud!
            <button className="ml-2 bg-yellow-300 text-gray-800 px-3 py-1 rounded-full" onClick={() => handleHighlight(2)}>Highlight</button>
          </p>
          <p className="text-lg text-purple-700 mb-6">
            Remember, Savvy is not just a piggy bank – it's your magical companion on the journey to financial wisdom and success. So, start saving with Savvy today and let the magic begin!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImpSavings;

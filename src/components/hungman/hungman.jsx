import { React, useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./hangmandrawing";
import HangmanWord from "./hangmanword";
import Keyboard from "./keyboard";
import Wordlist from "./wordlist";
import Header from "../Header/header";
import { Link } from "react-router-dom";

function getWord() {
  return Wordlist[Math.floor(Math.random() * Wordlist.length)];
}

function Hungman() {
  const randomnumber = Wordlist[Math.floor(Math.random() * Wordlist.length)];

  const [wordToGuess, setWordToGuess] = useState(() => {
    return randomnumber.word;
  });

  const btnrefresh = () => {
    window.location.reload();
  };

  const [Hint, setHint] = useState(randomnumber.hint);

  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
      if (!key.match(/^[a-z]/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-4xl flex flex-row gap-2 m-auto items-center">
        <div className="text-2xl text-center mt-3 w-1/3">
          <HangmanDrawing
            numberOfGuesses={incorrectLetters.length}
          ></HangmanDrawing>
        </div>
        <div className="w-2/3">
          {isWinner && (
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Winner!! - Refresh the page to try again..
              </h2>
              <Link
                to="/games"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Home
              </Link>
            </div>
          )}
          {isLoser && (
            <h2 className="text-2xl font-bold text-red-600">
              You Lost, Nice Try!! - Refresh the page to try again..
            </h2>
          )}
          <HangmanWord
            reveal={isLoser}
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
          ></HangmanWord>
          <div className="self-stretch text-center mb-8">
            <h3 className="mb-2 text-2xl text-gray-700 font-bold">{Hint}</h3>
            {isLoser && (
              <div>
                <button
                  onClick={btnrefresh}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                >
                  Try again
                </button>
                <Link
                  to="/games"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                >
                  Home
                </Link>
              </div>
            )}
          </div>
          <div className="keyboard-container">
            <Keyboard
              activeLetters={guessedLetters.filter((letter) =>
                wordToGuess.includes(letter)
              )}
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}
              disabled={isWinner || isLoser}
            ></Keyboard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hungman;

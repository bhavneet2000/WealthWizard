import React from "react";
import Header from "../Header/header";
import GameSection from "../GameSection";

const Games = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="text-center py-8">
        <h1 className="text-4xl text-blue-600 font-bold">
          AdventureQuest: Explore, Learn, Win!
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mt-8">
        <GameSection
          image="https://i2.wp.com/passionatepennypincher.com/wp-content/uploads/2023/08/fallstacks-06351.jpg"
          title="Penny Planner"
          description="Penny Planner is an engaging and strategic game that challenges players to manage their resources and plan meticulously to achieve their goals."
          link="/play-penny"
        />
        <GameSection
          image="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718435234/hanggame_lvwekl.webp"
          title="Hangman Game"
          description="Dive into the world of finance with the Hangman game. Each incorrect guess brings a stick figure closer to being hanged while correct guesses reveal the letters in the word."
          link="/play-hangman"
        />
        <GameSection
          image="https://wp-asset.groww.in/wp-content/uploads/2022/03/15104849/blog-05-3.png"
          title="Financial Fortune"
          description="Financial Fortune challenges your cognitive abilities by testing how quickly you can identify currencies of different countries."
          link="/play-stroop"
        />
      </div>
    </div>
  );
};

export default Games;

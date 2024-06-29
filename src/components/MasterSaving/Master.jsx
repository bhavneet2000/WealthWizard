import React from 'react';
import Header from '../Header/header';
import { master_image } from '../AriclesImages/images';

const Master = () => {
  return (
    <div className="bg-blue-200 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8 overflow-hidden">
          Let's Learn to Save: A Kid's Guide to Financial Fun!
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        
          <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={master_image} alt="Piggy Bank" className="w-full max-w-xs mx-auto rounded-lg shadow-lg" />
            
           
          </div>
          <div className="md:w-1/2 text-lg text-gray-800 leading-relaxed">
            <p className="mb-4">
              Hey there, young savers! Are you ready to dive into the exciting world of money management? Saving money is like a superpower that can help you reach your dreams and have tons of fun along the way. In this guide, we'll explore simple and creative ways for kids to learn how to save and become financial wizards!
            </p>
            <p className="mb-4">
              <strong>1. Meet Your Money</strong><br />
              Money comes in all shapes and sizes – coins, bills, and even digital dollars! Start by getting to know the different types of money and their values. You can even create your own play money to practice counting and sorting.
            </p>
            <p className="mb-4">
              <strong>2. The Magic of Piggy Banks</strong><br />
              Piggy banks are like treasure chests for your money! Get yourself a cool piggy bank and give it a fun name. Every time you receive money, whether it's from your allowance, birthday, or doing chores, drop some coins or bills into your piggy bank.
            </p>
            <p className="mb-4">
              <strong>3. Setting Savings Goals</strong><br />
              What's something you really want? Maybe it's a new toy, a special outing with friends, or even saving up for a big adventure! Setting savings goals helps you stay focused and motivated. Write down your goals and how much money you need to save to reach them.
            </p>
            <p className="mb-4">
              <strong>4. Make Saving a Habit</strong><br />
              Saving money is all about making it a habit. Set aside a portion of your allowance or any money you receive as soon as you get it. You can even challenge yourself to save a certain amount each week or month – it's like a savings game!
            </p>
            <p className="mb-4">
              <strong>5. Tracking Your Progress</strong><br />
              Keep track of how much money you've saved and watch your savings grow over time. You can create a savings chart or use stickers to mark your progress. Celebrate each milestone you reach – it's a sign that you're doing an awesome job!
            </p>
            <p className="mb-4">
              <strong>6. Avoiding Spending Temptations</strong><br />
              It's easy to get tempted to spend your money on things you don't really need. Before making a purchase, ask yourself if it's something you truly want or if you'd rather save your money for something even cooler later on.
            </p>
            <p className="mb-4">
              <strong>7. Learning from Mistakes</strong><br />
              Sometimes, we might make mistakes or spend our money on things we regret later. That's okay! Use it as a learning experience and think about how you can make better choices next time. Saving is all about making smart decisions with your money.
            </p>
            <p className="mb-4">
              <strong>8. Sharing the Joy of Saving</strong><br />
              Saving money is even more fun when you do it with friends or family! Talk to them about your savings goals and encourage each other to save together. You can even have friendly competitions to see who can reach their goals first.
            </p>
            {/* Additional sections can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Master;

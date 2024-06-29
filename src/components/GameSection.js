import React from "react";

const GameSection = ({ image, title, description, link }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between h-full">
        <div className="aspect-w-16 aspect-h-9">
          <img className="object-cover w-full h-full" src={image} alt={title} />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700 text-base">{description}</p>
          <a
            href={link}
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 text-center w-full"
          >
            Play Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameSection;

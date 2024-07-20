import React from "react";
import FinHeader from "./FinHeader";

const Goodies = () => {
  const items = [
    {
      title: "Sweatshirt",
      description: "Avail this now!",
      image:
        "https://res.cloudinary.com/duu6ej0qx/image/upload/v1718387924/sweatimage_vqw1wr.jpg",
      points: 150,
      gif: "https://res.cloudinary.com/duu6ej0qx/image/upload/v1718276712/coin_a758dr.gif",
    },
    {
      title: "Mug",
      description: "Avail this now!",
      image:
        "https://res.cloudinary.com/duu6ej0qx/image/upload/v1718388296/mug_vnswqy.avif",
      points: 200,
      gif: "https://res.cloudinary.com/duu6ej0qx/image/upload/v1718276712/coin_a758dr.gif",
    },
    {
      title: "Bag",
      description: "Avail this now!",
      image:
        "https://res.cloudinary.com/duu6ej0qx/image/upload/v1718388392/bag_fomymg.jpg",
      points: 300,
      gif: "https://res.cloudinary.com/duu6ej0qx/image/upload/v1718276712/coin_a758dr.gif",
    },
    {
      title: "Laptop stickers",
      description: "Avail this now!",
      image:
        "https://res.cloudinary.com/duu6ej0qx/image/upload/v1718388483/stickers_mekzzu.jpg",
      points: 400,
      gif: "https://res.cloudinary.com/duu6ej0qx/image/upload/v1718276712/coin_a758dr.gif",
    },
    {
      title: "Keychain",
      description: "Avail this now!",
      image:
        "https://res.cloudinary.com/duu6ej0qx/image/upload/v1718388586/key_r5t2if.jpg",
      points: 500,
      gif: "https://res.cloudinary.com/duu6ej0qx/image/upload/v1718276712/coin_a758dr.gif",
    },
    {
      title: "Shoes",
      description: "Avail this now!",
      image:
        "https://res.cloudinary.com/duu6ej0qx/image/upload/v1718276592/cld-sample-5.jpg",
      points: 600,
      gif: "https://res.cloudinary.com/duu6ej0qx/image/upload/v1718276712/coin_a758dr.gif",
    },
  ];

  return (
    <div>
      <FinHeader />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mt-8 mb-6">
          Explore Our Goodies
        </h2>

        {/* Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white z-10 p-4">
                  <div className="flex items-center mb-2">
                    <img src={item.gif} alt="coin" className="w-12 h-12 mr-2" />
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                  </div>
                  <p className="text-sm">{item.description}</p>
                  <p className="text-xs mt-2">{`${item.points} points`}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600 focus:outline-none">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (Optional) */}
        {/* <div className="flex justify-center mt-4">
        <button className="bg-black text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none" onClick={prevSlide}>&#10094;</button>
        <button className="bg-black text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none ml-4" onClick={nextSlide}>&#10095;</button>
      </div> */}
      </div>
    </div>
  );
};

export default Goodies;

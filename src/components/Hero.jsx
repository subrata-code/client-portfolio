import React from "react";
import { profileData } from "../constants/portfolioData";
import demo from "../assets/demo.jpg";

import Stats from "./stats"; // Import the Stats component


const Hero = () => {
  return (
    <div className="hero w-full bg-blue-950 h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-between px-10">
        {/* left */}
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="text-6xl font-bold text-amber-50">
            Engineering Excellence Through Education
          </h1>
          <p className="text-justify text-lg text-gray-300">
            {profileData.summary}
          </p>

          <div className="flex gap-4 mt-4">
            <button className="btn btn-primary shadow-none btn-xl">
              Get in Touch
            </button>
            <button className="btn btn-primary shadow-none btn-soft btn-xl">
              Download CV
            </button>
          </div>


        {/* right */}
        <div className="w-1/2 flex items-center justify-center cursor-pointer">
          <div className="relative w-3/4 h-3/4 rounded-lg overflow-hidden shadow-lg group">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={demo}
              alt="img"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-950/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <div className="text-center text-white px-4">
                <h2 className="text-2xl font-bold mb-2">
                  Dr. Nitai Chandra Adak
                </h2>
                <p className="text-sm text-gray-300">
                  {profileData.currentPosition}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-950 py-8">
        <Stats /> {/* Use the Stats component here */}
      </div>
    </div>
  );
};

export default Hero;
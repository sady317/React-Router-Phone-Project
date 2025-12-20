import React from "react";
import { useLoaderData } from "react-router";

function PhoneDetails() {
  const { data } = useLoaderData();
  const { name, brand, releaseDate, image, mainFeatures } = data;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Main Card */}
      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-6">
        
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="w-72 hover:scale-105 transition duration-300"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {name}
          </h1>
          <p className="text-gray-500 mb-4">
            Brand: <span className="font-medium text-gray-700">{brand}</span>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Release Date: {releaseDate}
          </p>

          {/* Features */}
          <div className="space-y-3">
            <p>
              <span className="font-semibold">Display:</span>{" "}
              {mainFeatures.displaySize}
            </p>
            <p>
              <span className="font-semibold">Chipset:</span>{" "}
              {mainFeatures.chipSet}
            </p>
            <p>
              <span className="font-semibold">Memory:</span>{" "}
              {mainFeatures.memory}
            </p>
            <p>
              <span className="font-semibold">Storage:</span>{" "}
              {mainFeatures.storage}
            </p>
          </div>

          {/* Sensors */}
          <div className="mt-6">
            <h2 className="font-semibold text-lg mb-2">Sensors</h2>
            <div className="flex flex-wrap gap-2">
              {mainFeatures.sensors.map((sensor, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {sensor}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
            Add to Favourite
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhoneDetails;

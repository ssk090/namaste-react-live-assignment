import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(15)
        .fill(null)
        .map((_, index) => (
          <div className="card bg-gray-300 h-64 m-4" key={index}>
            <div className="w-full h-10 bg-gray-400 rounded-lg mb-4"></div>
            <div className="w-full h-10 bg-gray-400 rounded-lg mb-4"></div>
            <div className="w-2/3 h-10 bg-gray-400 rounded-lg mb-4"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

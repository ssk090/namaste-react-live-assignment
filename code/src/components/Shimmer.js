import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index} className="card bg-gray-200 h-64 m-3">
            <div className="w-full h-28 bg-gray-300 rounded-lg mb-4"></div>
            <div className="w-full h-2 bg-gray-300 rounded-lg mb-4"></div>
            <div className="w-2/3 h-2 bg-gray-300 rounded-lg mb-4"></div>
            <div className="w-full h-2 bg-gray-300 rounded-lg mb-4"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

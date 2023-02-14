import React from "react";
import { useParams } from "react-router-dom";

const Shimmer = () => {
  const params = useParams();
  if (params.id) {
    console.log("shimmer for menu");
  } else {
    console.log("shimmer for UI");
  }

  return (
    <div>
      {params.id ? (
        <div className="restaurant-list">
          {Array(2)
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
      ) : (
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
      )}
    </div>
  );
};

export default Shimmer;
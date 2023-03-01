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
        <div data-testid="shimmer" className="flex flex-wrap justify-center">
          {Array(2)
            .fill("")
            .map((e, index) => (
              <div
                key={index}
                className="w-[800px] border border-black p-[10px] rounded-[5px] bg-gray-200 h-96 m-3 mt-9"
              >
                <div className="w-full h-8 bg-gray-300 rounded-lg mb-4"></div>
                <div className="w-2/3 h-64 bg-gray-300 rounded-lg mb-4"></div>
                <div className="w-2/3 h-2 bg-gray-300 rounded-lg mb-4"></div>
                <div className="w-full h-2 bg-gray-300 rounded-lg mb-4"></div>
              </div>
            ))}
        </div>
      ) : (
        <div data-testid="shimmer" className="flex flex-wrap justify-center">
          {Array(15)
            .fill("")
            .map((e, index) => (
              <div
                key={index}
                className="w-[200px] border border-black p-[10px] rounded-[5px] bg-gray-200 h-64 m-3"
              >
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

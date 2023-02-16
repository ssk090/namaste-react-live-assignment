import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText, error } = err;
  console.log(err);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          😔 <br />
          {status} - {statusText}
        </h1>
        <p className="text-gray-600">{error?.message}</p>
      </div>
    </div>
  );
};

export default Error;

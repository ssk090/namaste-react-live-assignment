import React, { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState("2");
  return (
    <div className="border border-green-600 my-2 mx-2">
      <h2 className="text-2xl font-bold">Profile Functional Component</h2>
      <h2 className="text-xl">{props.name}</h2>
      <h2 className="text-xl">Count: {count}</h2>
      <button onClick={() => setCount(1)}>Click</button>
    </div>
  );
};

export default Profile;

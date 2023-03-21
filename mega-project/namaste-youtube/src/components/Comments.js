import React from "react";

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  console.log(name);
  return (
    <div className="flex bg-gray-100 p-2 rounded-lg">
      <img
        src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
        alt="user"
        className="w-9 h-12 pt-3"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;

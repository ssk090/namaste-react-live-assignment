import React from "react";
import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div className="h-[65vh]" style={{ marginBottom: "75px" }}>
      <h1 className="text-4xl font-bold">About us Page</h1>
      <p>this is the namaste react live course 07</p>
      <div className="flex justify-center">
        <ProfileClass />
        {/* <Link to="profile">
        <button className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600">
          View Profile Funcitonal Component
        </button>
      </Link>
      <Outlet /> */}
        {/* <Profile name={"shiv functional"} /> */}
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Profile from "../../Pages/Profile/Profile";
import ProfileData from "../../Pages/Profile/ProfileData";
import "./MainHomeBar.css";
import Home from "../../Pages/Home/Home";
const MainHomeBar = () => {
  return (
    <div className="home-container-1">
      <ProfileData />
      <div className="home-container-2">
        <Home />
        <Profile />
      </div>
    </div>
  );
};

export default MainHomeBar;

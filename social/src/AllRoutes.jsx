import React from "react";
import Top from "./components/Top/Top";
import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MyNetWork from "./Pages/MyNetwork/MyNetWork";
import Auth from "./components/Auth/Auth";
import Login from "./components/Login/Login";
import Profile from "./Pages/Profile/Profile";
import ProfileData from "./Pages/Profile/ProfileData";
import MainHomeBar from "./components/MainHomeBar/MainHomeBar";

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="Top" element={<Top />}/>
        <Route path="Home" element={<Home />}/>
        <Route path="Auth" element={<Auth />}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Profile" element={<Profile/>}/>
        <Route path="ProfileData" element={<ProfileData/>}/>
        <Route path="MainHomeBar" element={<MainHomeBar/>}/>
        <Route path="MyNetwork" element={<MyNetWork/>}/>
      </Routes>
  );
};

export default AllRoutes;

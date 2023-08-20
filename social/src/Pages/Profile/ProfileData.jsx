import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfileData.css"

const ProfileInfo = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await axios.get("http://localhost:3008/api/auth/profiles");
      setProfiles(response.data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  return (
    <div className="profile-container">
    <h2>Profile</h2>
    
      {profiles.map((profile) => (
        <h6 key={profile._id}>
          <p>Name: {profile.Name}</p>
          <p>Sr College: {profile.Srcollege}</p>
          <p>Sr College Marks: {profile.srmarks}</p>
          <p>Jr College: {profile.Jrcollege}</p>
          <p>Jr College Marks: {profile.jrmarks}</p>
          <p>School: {profile.School}</p>
          <p>School Marks: {profile.schoolmarks}</p>
        </h6>
      ))}
    </div>
  );
};

export default ProfileInfo;

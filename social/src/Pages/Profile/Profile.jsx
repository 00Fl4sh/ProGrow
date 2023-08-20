import React, { useState } from "react";
// import axios from "axios";
import "./Profile.css"

const Profile = () => {
  const [Name, setName] = useState("");
  const [Srcollege, setSrCollege] = useState("");
  const [Jrcollege, setJrCollege] = useState("");
  const [School, setSchool] = useState("");
  const [srmarks, setSrCollegeMarks] = useState(0);
  const [jrmarks, setJrCollegeMarks] = useState(0);
  const [schoolmarks, setSchoolMarks] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ProfileData = {
        Name,
        Srcollege,
        Jrcollege,
        School,
        srmarks,
        jrmarks,
        schoolmarks
    };
  

    try {
      const response = await fetch ("http://localhost:3008/api/auth/Profile_create",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ProfileData),
      });
      const json = await response.json();
      console.log(json);

      if (response.status === 200) {
        console.log("Profile created successfully");
      }
    } catch (error) {
      console.error("Failed to create profile:", error);
    }
  };

  return (
    <div className="container">
        <div className="form">
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={Name} onChange={(e) => setName(e.target.value)}  required/>

        <label>Sr College Name:</label>
        <input type="text" value={Srcollege} onChange={(e) => setSrCollege(e.target.value)} />
        <input type="" value={srmarks} placeholder="Sr College Marks" onChange={(e) => setSrCollegeMarks(e.target.value)} />

        <label>Jr College Name:</label>
        <input type="text" value={Jrcollege} onChange={(e) => setJrCollege(e.target.value)} />
        <input type="" value={jrmarks} placeholder="Jr College Marks" onChange={(e) => setJrCollegeMarks(e.target.value)} />

        <label>School Name:</label>
        <input type="text" value={School} onChange={(e) => setSchool(e.target.value)} />
        <input type="" value={schoolmarks} placeholder="School Marks" onChange={(e) => setSchoolMarks(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Profile;

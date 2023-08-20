import React, { Component } from "react";
import "./Home.css";
import MainHomeBar from "../../components/MainHomeBar/MainHomeBar";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "60d0fe4f5311236168a109d4",
          title: "Mr",
          firstName: "Valentin",
          lastName: "Ortega",
          picture: "https://randomuser.me/api/portraits/med/men/3.jpg",
          description:"hello im mr Valtentin from america.Im glab that im created app like this",
        },
        {
          id: "60d0fe4f5311236168a109d5",
          title: "mrs",
          firstName: "Sibylle",
          lastName: "Leibold",
          picture: "https://randomuser.me/api/portraits/med/women/89.jpg",
          description:"hello im mr Valtentin from america.Im glab that im created app like this",

        },
        
        {
          id: "60d0fe4f5311236168a109d7",
          title: "mr",
          firstName: "Leevi",
          lastName: "Savela",
          picture: "https://randomuser.me/api/portraits/med/men/67.jpg",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugit nostrum repellendus minima ad, quidem nemo laudantium iure natus quo, quibusdam dolore inventore cumque reiciendis beatae rerum dolorem? Dolores, quisquam?",

        },
        {
          id: "60d0fe4f5311236168a109d8",
          title: "mrs",
          firstName: "Karoline",
          lastName: "Sviggum",
          picture: "https://randomuser.me/api/portraits/med/women/61.jpg",
          description:"hello im mr Valtentin from america.Im glab that im created app like this",

        },
        {
          id: "60d0fe4f5311236168a109d9",
          title: "ms",
          firstName: "Nuria",
          lastName: "Leon",
          picture: "https://randomuser.me/api/portraits/med/women/93.jpg",
          description:"hello im mr Valtentin from america.Im glab that im created app like this",

        },
        {
          id: "60d0fe4f5311236168a109da",
          title: "mr",
          firstName: "Lance",
          lastName: "Foster",
          picture: "https://randomuser.me/api/portraits/med/men/13.jpg",
          description:"hello im mr Valtentin from america.Im glab that im created app like this",

        },
        {
          id: "60d0fe4f5311236168a109db",
          title: "miss",
          firstName: "Naomi",
          lastName: "Rodrigues",
          picture: "https://randomuser.me/api/portraits/med/women/39.jpg",
          description:"hello im mr Valtentin from america.Im glab that im created app like this",

        },
        {
          id: "60d0fe4f5311236168a109dc",
          title: "mr",
          firstName: "Evan",
          lastName: "Roux",
          picture: "https://randomuser.me/api/portraits/med/men/59.jpg",
          description:"hello im mr Valtentin from america.Im glab that im created app like this",

        },
        {
          id: "60d0fe4f5311236168a109dd",
          title: "mr",
          firstName: "Miguel",
          lastName: "Lima",
          picture: "https://randomuser.me/api/portraits/med/men/31.jpg",
          description:"hello im mr Valtentin from america.Im glab that im created app like this",

        },
      ],
      loading: false,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <>
      <div>
        {/* <MainHomeBar/> */}
      </div>
      <div className="s_nav">
        <h1>helo</h1>
        {/* <h1>helo</h1> */}
        {data.map((profile) => {
          return (
            <div key={profile.id}>
              <div className="box">
                <img src={profile.picture} className="profile-img" alt="profile" />
                <p className="Profile-name">
                  <strong>Name:</strong>  
                  {`${profile.title} ${profile.firstName} ${profile.lastName}`}<br/>
                  {profile.description.slice(0,90)}
                </p>
              </div>
              <br/>              
            </div>
          );
        })}
      </div>
      </>
    );
  }
}

export default Home;

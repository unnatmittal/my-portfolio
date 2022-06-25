import React, { useState, useEffect } from "react";
import "./style.css";
import repo from "../../assets/repo.png";
import follower from "../../assets/follower.png";
import { Social } from "../Footer/Social";

export const About = () => {
  const api = "https://api.github.com/users/unnatmittal";

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");


  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  return (
    <div className="about">
      <div className="git-box">
        <div className="av-box">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="ele">
          <h1>{name}</h1>
          <h2>{username}</h2>
          <div className="repo-box">
            <img src={repo} alt="repo" />
            <h3> Repositories {repos}</h3>
          </div>
          <div className="f-box">
            <img src={follower} alt="follower" />
            <h4>
              Followers {followers}. Following {following}
            </h4>
          </div>
        </div>
        <div className="s-box">
          <Social />
        </div>
      </div>
      <div className="me-box">
        <h1>ABOUT ME</h1>
        <p className="para">
          Hi! I am Unnat Mittal, a passionate programmer and a developer, lives
          in Delhi. I am currently pursuing Instrumentaion and Control
          Engineering from NSUT, Dwarka, New Delhi.
          <br />I am Full Stack Developer with React.js, Redux, Node.js, React
          Native, MongoDB, Firebase as my tech stack. I have worked with Team
          Vrikshandolan as Web Developer.
          <br />
          Also I am a Software Programmer with Database Management, Data
          Structures and Algorithms as my skills.
          <br />
          Working with the clients, my goal is always driven towards providing
          amazing experience with the best level of quality and service to them.
          I love exploring new technologies and solve the riddles which every
          programmer face while doing his job.
        </p>
      </div>
    </div>
  );
};

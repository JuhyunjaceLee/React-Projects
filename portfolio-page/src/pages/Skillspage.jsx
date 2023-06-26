import React from "react";
import commonstyles from "./Common.module.css";
import styles from "./Skillspage.module.css";
import Skill from "../components/Skill";
// import { PieChart } from "react-minimal-pie-chart";

export default function Skillspage() {
  const lists = [
    {
      imgSrc: "image/logo/html5_logo.png",
      name: "HTML5",
    },
    {
      imgSrc: "image/logo/css3_logo.png",
      name: "CSS3",
    },
    {
      imgSrc: "image/logo/javascript_logo.png",
      name: "JAVASCRIPT",
    },
    {
      imgSrc: "image/logo/vuejs_logo.png",
      name: "VUE.JS",
    },
    {
      imgSrc: "image/logo/reactjs_logo.png",
      name: "REACT.JS",
    },
    {
      imgSrc: "image/logo/bootstrap_logo.png",
      name: "BOOTSTRAP",
    },
    {
      imgSrc: "image/logo/git_logo.png",
      name: "GIT",
    },
    {
      imgSrc: "image/logo/github_logo.png",
      name: "GITHUB",
    },
    {
      imgSrc: "image/logo/firebase_logo.png",
      name: "FIREBASE",
    },
    {
      imgSrc: "image/logo/netlify_logo.png",
      name: "NETLIFY",
    },
  ];
  const nextLists = [
    {
      imgSrc: "image/logo/redux_logo.png",
      name: "REDUX",
    },
    {
      imgSrc: "image/logo/mysql_logo.png",
      name: "MYSQL",
    },
  ];
  return (
    <div className={commonstyles.contents}>
      <h1 className={commonstyles.contents_title}>SKILLS</h1>
      <main className={styles.main}>
        {lists.map((list, idx) => (
          <Skill list={list} key={idx} />
        ))}
      </main>
      <p className={styles.next_title}>What`s the NEXT?</p>
      <main className={styles.main}>
        {nextLists.map((list, idx) => (
          <Skill list={list} key={idx} />
        ))}
      </main>
    </div>
  );
}

import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar({
  aboutSection,
  skillSection,
  scrollToSection,
}) {
  const scrollToHome = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  // const scrollToAbout = () => {
  //   window.scroll({
  //     top: 500,
  //     behavior: "smooth",
  //   });
  // };
  // const scrollToProject = () => {
  //   window.scroll({
  //     top: 2170,
  //     behavior: "smooth",
  //   });
  // };
  // const scrollToSkills = () => {
  //   window.scroll({
  //     top: 3550,
  //     behavior: "smooth",
  //   });
  // };
  // const scrollToContact = () => {
  //   window.scroll({
  //     top: 5040,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <div className={styles.navbar}>
      {/* <div className={styles.navbar_wrap} onClick={scrollToHome}> */}
      <div className={styles.navbar_wrap}>
        <img
          className={styles.navbar_logoFaceImg}
          src="image/face_logo.png"
          alt="face_logo"
        />
        <p className={styles.navbar_logoTitle}>JUHYUN LEE</p>
      </div>
      <ul className={styles.navbar_lists}>
        <li onClick={scrollToHome}>HOME</li>
        <li onClick={() => scrollToSection(aboutSection)}>ABOUT</li>
        <li>PROJECTS</li>
        <li onClick={() => scrollToSection(skillSection)}>SKILLS</li>
        <li>CONTACT</li>
        {/* <li onClick={scrollToHome}>HOME</li>
        <li onClick={scrollToAbout}>ABOUT</li>
        <li onClick={scrollToProject}>PROJECTS</li>
        <li onClick={scrollToSkills}>SKILLS</li>
        <li onClick={scrollToContact}>CONTACT</li> */}
      </ul>
    </div>
  );
}

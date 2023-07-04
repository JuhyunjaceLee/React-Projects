import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar({
  scrollToSection,
  aboutSection,
  projectSection,
  skillSection,
  contactSection,
}) {
  const scrollToHome = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_wrap} onClick={scrollToHome}>
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
        <li onClick={() => scrollToSection(projectSection)}>PROJECTS</li>
        <li onClick={() => scrollToSection(skillSection)}>SKILLS</li>
        <li onClick={() => scrollToSection(contactSection)}>CONTACT</li>
      </ul>
    </div>
  );
}

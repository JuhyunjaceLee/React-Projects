import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_wrap} onClick={goToHome}>
        <img
          className={styles.navbar_logoFaceImg}
          src="image/face_logo.png"
          alt="face_logo"
        />
        <p className={styles.navbar_logoTitle}>JUHYUN LEE</p>
      </div>
      <ul className={styles.navbar_lists}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/skills">SKILLS</Link>
        <Link to="/contact">CONTACT</Link>
      </ul>
    </div>
  );
}

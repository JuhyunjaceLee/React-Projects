import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_wrap}>
        <img
          className={styles.navbar_logoFaceImg}
          src="image/face_logo.png"
          alt="face_logo"
        />
        <p className={styles.navbar_logoTitle}>JUHYUN LEE</p>
      </div>
      <ul className={styles.navbar_lists}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </div>
  );
}

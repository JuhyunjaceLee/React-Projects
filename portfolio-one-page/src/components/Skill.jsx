import React from "react";
import styles from "./Skill.module.css";

export default function Skill({ list }) {
  return (
    <div className={styles.skillWrap}>
      <img className={styles.img} src={list.imgSrc} alt="logo"></img>
      <h3 className={styles.title}>{list.name}</h3>
    </div>
  );
}

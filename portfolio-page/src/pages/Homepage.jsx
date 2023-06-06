import React, { useState } from "react";
import styles from "./Homepage.module.css";
import commonstyles from "./Common.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Homepage() {
  const [hoverActive, setHoverActive] = useState(false);
  const handleMouseOver = (e) => {
    setHoverActive(true);
    console.log("mouseOver");
  };
  const handleMouseOut = () => {
    setHoverActive(false);
    console.log("mouseOut");
  };

  return (
    <div className={commonstyles.contents}>
      <h1 className={commonstyles.contents_title}>FRONT-END DEVELOPER</h1>
      <main className={`${styles.home_main} ${styles.mainbox1}`}>
        <div
          className={
            hoverActive
              ? `${styles.home_eachBox}${styles.home_eachBoxActive}`
              : `${styles.home_eachBox}`
          }
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className={styles.home_aboutBox_contents}>
            <p>안녕하세요!</p>
            <p>
              <span className={styles.home_myName}>이주현</span>입니다.😊
            </p>
            <p className={styles.home_frontend}>"Front-End Developer"</p>
          </div>
          <BsFillArrowRightCircleFill />
        </div>
        <div className={styles.home_eachBox}>
          <p>PROJECTS</p>
          <BsFillArrowRightCircleFill />
        </div>
      </main>
      <main className={`${styles.home_main} ${styles.mainbox2}`}>
        <div className={styles.home_eachBox}>
          <p>SKILLS</p>
          <BsFillArrowRightCircleFill />
        </div>
        <div className={styles.home_eachBox}>
          <p>CONTACT</p>
          <BsFillArrowRightCircleFill />
        </div>
      </main>
    </div>
  );
}

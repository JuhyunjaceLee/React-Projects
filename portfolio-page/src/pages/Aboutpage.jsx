import React from "react";
import styles from "./Aboutpage.module.css";
import commonstyles from "./Common.module.css";

export default function Aboutpage() {
  return (
    <div className={commonstyles.contents}>
      <h1 className={commonstyles.contents_title}>ABOUT ME</h1>
      <main className={styles.about_main}>
        <div className={styles.avartar_contents}>
          <img
            className={styles.avartar_img}
            src="image/avartar.jpg"
            alt="avartar"
          />
          <div className={styles.avartar_info_wrap}>
            <h2 className={styles.avartar_info_title}>PERSONAL INFO</h2>
            <div className={styles.avartar_info_contents}>
              <div
                className={`${styles.avartar_info} ${styles.avartar_info_Q}`}
              >
                <p>Birthday</p>
                <p>City</p>
                <p>Phone Number</p>
                <p>Email</p>
              </div>
              <div
                className={`${styles.avartar_info} ${styles.avartar_info_A}`}
              >
                <p>1991.07.12</p>
                <p>Goyang-si, Gyeonggi-do</p>
                <p>+82 010 - 3876 - 3760</p>
                <p>heyjace777@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.education_contents}>
          <h2 className={styles.education_title}>EDUCATION</h2>
          <div className={styles.education_textbox_up}>
            <div className={styles.education_textbox}>
              <h4>프론트엔드웹개발 양성 과정 수료</h4>
              <p>-HTML5, CSS, 자바스크립트, 제이쿼리, 리액트</p>
              <p>-넵플릭스 국비교육기관</p>
              <div className={styles.education_circle_up}></div>
              <div className={styles.education_arrow_down}></div>
            </div>
            <div className={styles.education_textbox}>
              <h4>자바스크립트 & Vue.js</h4>
              <p>-자바스크립트 및 Vue.js 프레임워크 이론 및 실습 교육</p>
              <p>-마포청년나루</p>
              <div className={styles.education_circle_up}></div>
              <div className={styles.education_arrow_down}></div>
            </div>
            <div className={styles.education_timeline}></div>
          </div>
          <div className={styles.education_textbox_down}>
            <div className={styles.education_textbox}>
              <h4>자바스크립트 프로젝트 & 포트폴리오 제작과정</h4>
              <p>
                -클론코딩을 통하여 포트폴리오로 활용할 수 있는 프로젝트 과정
              </p>
              <p>-마포청년나루</p>
              <div className={styles.education_circle_down}></div>
              <div className={styles.education_arrow_up}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

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
        <div className={styles.about_contents}>
          <h2 className={styles.about_contents_title}>EDUCATION</h2>
          <div className={styles.timeline}></div>
          <div className={styles.timeline_arrow}></div>
          <div className={styles.textbox_contents}>
            <div className={styles.textbox_wrap}>
              <div className={`${styles.textbox} ${styles.textbox_up}`}>
                <h3 className={styles.textbox_title}>
                  프론트엔드 웹 개발 양성 과정 수료
                </h3>
                <p>-HTML5, CSS, 자바스크립트, 제이쿼리, 리액트</p>
                <p>-넵플릭스 국비교육기관</p>
                <div className={styles.circle_up}></div>
                <div className={styles.arrow_down}></div>
              </div>
              <p className={styles.date_up}>2022.02 - 2022.03</p>
            </div>
            <div className={styles.textbox_wrap}>
              <p className={styles.down_date}>2022.04 - 2022.05</p>
              <div className={`${styles.textbox} ${styles.textbox_down}`}>
                <h3 className={styles.textbox_title}>
                  자바스크립트 프로젝트 & 포트폴리오 제작과정
                </h3>
                <p>
                  -클론코딩을 통하여 포트폴리오로 활용할 수 있는 프로젝트 과정
                </p>
                <p>-마포청년나루</p>
                <div className={styles.circle_down}></div>
                <div className={styles.arrow_up}></div>
              </div>
            </div>
            <div className={styles.textbox_wrap}>
              <div className={`${styles.textbox} ${styles.textbox_up}`}>
                <h3 className={styles.textbox_title}>자바스크립트 & Vue.js</h3>
                <p>-자바스크립트 및 Vue.js 프레임워크 이론 및 실습 교육</p>
                <p>-마포청년나루</p>
                <div className={styles.circle_up}></div>
                <div className={styles.arrow_down}></div>
              </div>
              <p className={styles.date_up}>2022.05 - 2022.06</p>
            </div>
          </div>
        </div>
        <div className={styles.about_contents}>
          <h2 className={styles.about_contents_title}>EXPERIENCE</h2>
          <div className={styles.timeline}></div>
          <div className={styles.timeline_arrow}></div>
          <div className={styles.textbox_contents}>
            <div className={styles.textbox_wrap}>
              <div className={`${styles.textbox} ${styles.textbox_up}`}>
                <h3 className={styles.textbox_title}>주식회사 신영솔루션</h3>
                <p>-서브PM(스마트공장 산출물 작성)</p>
                <p>-회계</p>
                <div className={styles.circle_up}></div>
                <div className={styles.arrow_down}></div>
              </div>
              <p className={styles.date_up}>2020.10 - 2021.12</p>
            </div>
            <div className={styles.textbox_wrap}>
              <p className={styles.down_date}>2017.10 - 2018.05</p>
              <div className={`${styles.textbox} ${styles.textbox_down}`}>
                <h3 className={styles.textbox_title}>유니클로</h3>
                <p>-고객 응대 및 서비스</p>
                <p>-매장 관리</p>
                <div className={styles.circle_down}></div>
                <div className={styles.arrow_up}></div>
              </div>
            </div>
            <div className={styles.textbox_wrap}>
              <div className={`${styles.textbox} ${styles.textbox_up}`}>
                <h3 className={styles.textbox_title}>법무법인 원진</h3>
                <p>-문서송부 및 관리</p>
                <p>-회계 및 총무 담당</p>
                <div className={styles.circle_up}></div>
                <div className={styles.arrow_down}></div>
              </div>
              <p className={styles.date_up}>2022.02 - 2022.03</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

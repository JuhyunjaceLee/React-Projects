import React, { forwardRef } from "react";
import styles from "./Aboutpage.module.css";
import commonstyles from "./Common.module.css";

const Aboutpage = forwardRef(({ props }, ref) => {
  return (
    <div className={commonstyles.contents} ref={ref}>
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
        <section className={styles.about_section}>
          <h2 className={styles.about_section_title}>EDUCATION</h2>
          <div className={styles.about_contents_wrap}>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>리액트 개념정리</h3>
                <p>2023.04 - 진행중</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>
                DreamCoding 온라인 교육기관
              </h4>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>
                  자바스크립트 마스터리(ES6+)
                </h3>
                <p>2023.02 - 진행중</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>
                DreamCoding 온라인 교육기관
              </h4>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>
                  프론트엔드 필수 브라우저 101
                </h3>
                <p>2022.11 - 2023.01.12</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>
                DreamCoding 온라인 교육기관
              </h4>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>
                  자바스크립트 프로젝트 & 포트폴리오 제작 과정
                </h3>
                <p>2022.06.11 – 2022.08.13 (총 10회)</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>마포청년나루</h4>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>
                  한번에 끝내는 자바스크립트 & VUE.JS
                </h3>
                <p>2022.04.05 – 2022.05.28 (총 16회)</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>마포청년나루</h4>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>
                  프론트엔드 웹개발 양성 과정
                </h3>
                <p>2022.02.03 – 2022.03.29</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>
                넵플러스IT컴퓨터 국비지원학원
              </h4>
            </div>
          </div>
        </section>
        <section className={styles.about_section}>
          <h2 className={styles.about_section_title}>EXPERIENCE</h2>
          <div className={styles.about_contents_wrap}>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>FILTER- CAFE</h3>
                <p>2023.06 - 진행중</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>
                팀프로젝트 / 프론트엔드
              </h4>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>
                  주식회사 신영솔루션
                </h3>
                <p>2020.10 - 2022.01</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>
                주임 / 시스템 사업부 / 회계팀
              </h4>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>
                  워킹홀리데이(호주)
                </h3>
                <p>2018.12 – 2019.08</p>
              </div>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>
                  Fast Retailing(유니클로)
                </h3>
                <p>2017.10 – 2018.05</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>PN / 매장STAFF</h4>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>법무법인 원진</h3>
                <p>2016.05 – 2017.06</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>
                대리 / 경영지원팀
              </h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
});

export default Aboutpage;

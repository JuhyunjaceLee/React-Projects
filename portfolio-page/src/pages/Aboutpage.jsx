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
        <section className={styles.about_section}>
          <h2 className={styles.about_section_title}>EDUCATION</h2>
          <div className={styles.about_contents_wrap}>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>
                  주식회사 신영솔루션
                </h3>
                <p>2020.10 - 2021. 12</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>
                사원 / FE Developer ICT 사업부 / IT팀
              </h4>
              <div className={styles.about_detail_contents}>
                <p>• 회사 자금 담당</p>
                <p>• 사업계획서 작성</p>
                <p>• 분기별 회계 담당</p>
              </div>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3>주식회사 신영솔루션</h3>
                <p>2020.10 - 2021. 12</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>경영지원팀</h4>
              <div className={styles.about_detail_contents}>
                <p>• 회사 자금 담당</p>
                <p>• 사업계획서 작성</p>
                <p>• 분기별 회계 담당</p>
              </div>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3>주식회사 신영솔루션</h3>
                <p>2020.10 - 2021. 12</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>경영지원팀</h4>
              <div className={styles.about_detail_contents}>
                <p>• 회사 자금 담당</p>
                <p>• 사업계획서 작성</p>
                <p>• 분기별 회계 담당</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.about_section}>
          <h2 className={styles.about_section_title}>EXPERIENCE</h2>
          <div className={styles.about_contents_wrap}>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3>주식회사 신영솔루션</h3>
                <p>2020.10 - 2021. 12</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>경영지원팀</h4>
              <div className={styles.about_detail_contents}>
                <p>• 회사 자금 담당</p>
                <p>• 사업계획서 작성</p>
                <p>• 분기별 회계 담당</p>
              </div>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3>주식회사 신영솔루션</h3>
                <p>2020.10 - 2021. 12</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>경영지원팀</h4>
              <div className={styles.about_detail_contents}>
                <p>• 회사 자금 담당</p>
                <p>• 사업계획서 작성</p>
                <p>• 분기별 회계 담당</p>
              </div>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3>주식회사 신영솔루션</h3>
                <p>2020.10 - 2021. 12</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>경영지원팀</h4>
              <div className={styles.about_detail_contents}>
                <p>• 회사 자금 담당</p>
                <p>• 사업계획서 작성</p>
                <p>• 분기별 회계 담당</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

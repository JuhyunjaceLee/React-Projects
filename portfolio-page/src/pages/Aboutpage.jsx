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
                <h3 className={styles.about_detail_title}>리액트 개념정리</h3>
                <p>2023.04 - 진행중</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>
                DreamCoding 온라인 교육기관
              </h4>
              <div className={styles.about_detail_contents}>
                <p>• 리액트에 대한 이해</p>
                <p>• 라이브러리와 프레임워크의 차이</p>
                <p>• JSX 문법</p>
                <p>• 컴포넌트</p>
                <p>• Props</p>
                <p>• useState, useEffect</p>
                <p>• Styled Component</p>
                <p>• 리액트 라우터</p>
                <p>• 리액트 쿼리</p>
              </div>
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
              <div className={styles.about_detail_contents}>
                <p>• 자바스크립트에 대한 이해</p>
                <p>• 변수, 연산자, 제어문</p>
                <p>• 함수, 함수의 인자, 함수 표현식, 콜백함수</p>
                <p>• 객체, 객체 안의 함수, 생성자 함수</p>
                <p>• 배열</p>
                <p>• 비동기</p>
              </div>
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
              <div className={styles.about_detail_contents}>
                <p>• Web APIs 이해와 실습</p>
                <p>• DOM 이해하기</p>
                <p>• 이벤트</p>
                <p>• Event Loop 이해하기</p>
              </div>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>
                  자바스크립트 프로젝트 & 포트폴리오 제작 과정
                </h3>
                <p>2022.06.11 – 2022.08.13 (총 10회)</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>마포청년나루</h4>
              <div className={styles.about_detail_contents}>
                <p>• 프로젝트 목표 설정</p>
                <p>• 디자인 및 퍼블리싱 작업 확인</p>
                <p>• Vue.js 프로젝트 진행 결과물 중간 확인</p>
                <p>• Vue.js 팀별 또는 개인별 완성물 확인 및 발표</p>
              </div>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>
                  한번에 끝내는 자바스크립트 & VUE.JS
                </h3>
                <p>2022.04.05 – 2022.05.28 (총 16회)</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>마포청년나루</h4>
              <div className={styles.about_detail_contents}>
                <p>• 변수와 자료형 용어 정리</p>
                <p>• 조건문과 반목문</p>
                <p>• 스코프를 통한 자바스크립트 유효 범위 이해하기</p>
                <p>• 객체의 다양한 개념 학습하기</p>
                <p>• 표준 내장객체와 BOM 객체 배우기</p>
                <p>• DOM 학습</p>
                <p>• 이벤트에 대해 학습하기</p>
                <p>• ES6 신규 문법 배우기</p>
                <p>• Vue.js 조건문과 반복문, 컴포넌트 작성법</p>
                <p>• Vue 구성요소_computed,watch,클래스와 스타일 바인딩</p>
                <p>• 조건부 랜더링</p>
                <p>• v-if, v-show, v-model</p>
              </div>
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
              <div className={styles.about_detail_contents}>
                <p>• HTML5 & CSS3 익히기</p>
                <p>• 퍼블리싱 작업해보기</p>
                <p>• 자바스크립트와 제이쿼리 실습하기</p>
                <p>• 포트폴리오 제작하기</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.about_section}>
          <h2 className={styles.about_section_title}>EXPERIENCE</h2>
          <div className={styles.about_contents_wrap}>
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
              <div className={styles.about_detail_contents}>
                <p style={{ fontWeight: "900", fontSize: "15px" }}>
                  • 스마트 공장 산출물 작성
                </p>
                <p>• 세금계산서 발행</p>
                <p>• 비용 정산 및 월 결산</p>
                <p>• 원천세, 부가가치세 신고, 납부</p>
              </div>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>
                  워킹홀리데이(호주)
                </h3>
                <p>2018.12 – 2019.08</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>
                Supervisor & Picker / 2019.02 – 2019.06
              </h4>
              <div className={styles.about_detail_contents}>
                <p>• MJC STRAWBERRY FARM – Caboolture, Brisbane</p>
              </div>
              <h4
                className={styles.about_detail_subtitle}
                style={{ marginTop: "20px" }}
              >
                Roll-maker / 2018.12 – 2019.02
              </h4>
              <div className={styles.about_detail_contents}>
                <p>• SUSHI MARU - Petersham, Sydney</p>
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
              <div className={styles.about_detail_contents}>
                <p>• VMD</p>
                <p>• 고객 응대</p>
                <p>• 매장 관리</p>
              </div>
            </div>
            <div className={styles.about_contents}>
              <div className={styles.about_detail}>
                <h3 className={styles.about_detail_title}>법무법인 원진</h3>
                <p>2016.05 – 2017.06</p>
              </div>
              <h4 className={styles.about_detail_subtitle}>
                대리 / 경영지원팀
              </h4>
              <div className={styles.about_detail_contents}>
                <p>• 소장 작성</p>
                <p>• 문서 송부 및 관리</p>
                <p>• 회계 및 총무</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

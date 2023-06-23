import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";
import commonstyles from "./Common.module.css";
import {
  BsFillArrowRightCircleFill,
  BsFillTelephoneFill,
  BsGithub,
} from "react-icons/bs";
import { IoLogoHtml5, IoLogoCss3, IoIosMail } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { RiVuejsFill, RiReactjsFill } from "react-icons/ri";
import { SlNote } from "react-icons/sl";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className={commonstyles.contents}>
      <h1 className={commonstyles.contents_title}>FRONT-END DEVELOPER</h1>
      <div className={styles.address_wrap}>
        <div
          className={styles.addressBox}
          onClick={() => {
            window.open("https://github.com/JuhyunjaceLee", "_blank");
          }}
        >
          <p className={styles.address_title}>GITHUB ADRESS</p>
          <p className={styles.address_click}>CLICK!</p>
        </div>
        <div
          className={styles.addressBox}
          onClick={() =>
            window.open(
              "https://desert-edam-bea.notion.site/Front-end-6777386ece574079a62942436de54cd0?pvs=4",
              "_blank"
            )
          }
        >
          <p className={styles.address_title}>NOTION ADRESS</p>
          <p className={styles.address_click}>CLICK!</p>
        </div>
      </div>
      <main className={`${styles.home_main} ${styles.mainbox1}`}>
        <div
          className={styles.home_eachBox}
          onClick={() => {
            navigate("/about");
          }}
        >
          <div
            className={`${styles.home_box_contents} ${styles.home_aboutBox_contents}`}
          >
            <p>안녕하세요!</p>
            <p>
              <span className={styles.home_myName}>이주현</span>입니다.😊
            </p>
            <p className={styles.home_frontend}>"Front-End Developer"</p>
          </div>
          <div
            className={`${styles.home_eachBox_hoverBox} ${styles.home_abouBox_hoverBox}`}
          >
            <p>ABOUT</p>
          </div>
          <BsFillArrowRightCircleFill />
        </div>
        <div
          className={styles.home_eachBox}
          onClick={() => {
            navigate("/projects");
          }}
        >
          <div
            className={`${styles.home_box_contents} ${styles.home_projectsBox_contents}`}
          >
            <p>PROJECTS</p>
          </div>
          <div
            className={`${styles.home_eachBox_hoverBox} ${styles.home_projectsBox_hoverBox}`}
          >
            <p>Let's See</p>
            <p>My All Projects</p>
          </div>
          <BsFillArrowRightCircleFill />
        </div>
      </main>
      <main className={`${styles.home_main} ${styles.mainbox2}`}>
        <div
          className={styles.home_eachBox}
          onClick={() => {
            navigate("/skills");
          }}
        >
          <div
            className={`${styles.home_box_contents} ${styles.home_skillsBox_contents}`}
          >
            <p>SKILLS</p>
          </div>
          <div
            className={`${styles.home_eachBox_hoverBox} ${styles.home_skillsBox_hoverBox}`}
          >
            <IoLogoHtml5 />
            <IoLogoCss3 />
            <SiJavascript />
            <RiVuejsFill />
            <RiReactjsFill />
          </div>
          <BsFillArrowRightCircleFill />
        </div>
        <div
          className={styles.home_eachBox}
          onClick={() => {
            navigate("/contact");
          }}
        >
          <div
            className={`${styles.home_box_contents} ${styles.home_contactBox_contents}`}
          >
            <p>CONTACT</p>
          </div>
          <div
            className={`${styles.home_eachBox_hoverBox} ${styles.home_contactBox_hoverBox}`}
          >
            <BsFillTelephoneFill />
            <IoIosMail />
            <BsGithub />
            <SlNote />
          </div>
          <BsFillArrowRightCircleFill />
        </div>
      </main>
    </div>
  );
}

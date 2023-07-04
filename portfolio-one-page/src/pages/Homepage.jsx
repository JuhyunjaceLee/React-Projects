import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";
import commonstyles from "./Common.module.css";
import { BsGithub } from "react-icons/bs";
import { SlNote } from "react-icons/sl";

export default function Homepage() {
  return (
    <div className={commonstyles.contents}>
      <h1 className={styles.title}>FRONT-END DEVELOPER</h1>
      <div className={styles.address_wrap}>
        <div
          className={styles.addressBox}
          onClick={() => {
            window.open("https://github.com/JuhyunjaceLee", "_blank");
          }}
        >
          <div className={styles.address_btn_wrap}>
            <p className={styles.address_title}>GITHUB</p>
            <BsGithub className={styles.address_icon} />
          </div>
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
          <div className={styles.address_btn_wrap}>
            <p className={styles.address_title}>NOTION</p>
            <SlNote className={styles.address_icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

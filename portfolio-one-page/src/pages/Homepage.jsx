import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import commonstyles from "./Common.module.css";
import { BsGithub } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import ScrollToTop from "../components/ScrollToTop";

export default function Homepage() {
  const [showBtn, setShowBtn] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const showBtnClick = () => {
      if (window.scrollY > 400) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", showBtnClick);
  }, []);

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
      {showBtn && (
        <div className={styles.scrollToTop_icon} onClick={scrollToTop}>
          <ScrollToTop />
        </div>
      )}
    </div>
  );
}

import React from "react";
import commonstyles from "./Common.module.css";
import styles from "./Contactpage.module.css";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { SlNote } from "react-icons/sl";

export default function Contactpage() {
  return (
    <div className={commonstyles.contents}>
      <h1 className={commonstyles.contents_title}>CONTACT</h1>
      <div className={styles.contact_contents}>
        <div className={styles.contact_box}>
          <BsFillTelephoneFill className={styles.contact_box_icon} />
          <h3>PHONE NUMBER</h3>
          <p>+82 010. 3876. 3760</p>
        </div>
        <div className={styles.contact_box}>
          <IoIosMail className={styles.contact_box_icon} />
          <h3>EMAIL ADRESS</h3>
          <p>heyjace777@gmail.com</p>
        </div>
      </div>
      <div className={styles.contact_contents}>
        <div
          className={styles.contact_box}
          onClick={() =>
            window.open("https://github.com/JuhyunjaceLee", "_blank")
          }
        >
          <BsGithub className={styles.contact_box_icon} />
          <h3>GITHUB ADRESS</h3>
          <p className={styles.contact_box_click}>CLICK!</p>
        </div>
        <div
          className={styles.contact_box}
          onClick={() =>
            window.open(
              "https://desert-edam-bea.notion.site/Front-end-6777386ece574079a62942436de54cd0?pvs=4",
              "_blank"
            )
          }
        >
          <SlNote className={styles.contact_box_icon} />
          <h3>NOTION ADRESS</h3>
          <p className={styles.contact_box_click}>CLICK!</p>
        </div>
      </div>
    </div>
  );
}

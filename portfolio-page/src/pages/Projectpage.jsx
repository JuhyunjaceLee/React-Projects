import React, { useEffect, useState } from "react";
import commonstyles from "./Common.module.css";
import styles from "./Projectpage.module.css";

export default function Projectpage() {
  const buttons = ["JS", "VUE", "REACT"];
  const lists = [
    {
      imgSrc: "image/thumbnail/closet_thumbnail.png",
      name: "What`s In My Closet",
      type: "JS",
      url: "https://chipper-macaron-9219aa.netlify.app/",
    },
    {
      imgSrc: "image/thumbnail/shoppingList_thumbnail.png",
      name: "Shopping List",
      type: "JS",
      url: "https://aquamarine-sopapillas-2cdcaa.netlify.app/",
    },
    {
      imgSrc: "image/thumbnail/ploggingGame_thumbnail.png",
      name: "Plogging Game",
      type: "JS",
      url: "https://luminous-gaufre-2e946f.netlify.app/",
    },
    {
      imgSrc: "image/thumbnail/myBox_thumbnail.png",
      name: "My Box",
      type: "VUE",
      url: "https://stellular-granita-afbdbd.netlify.app/",
    },
    {
      imgSrc: "image/thumbnail/weatherApp_thumbnail.png",
      name: "Weather App",
      type: "REACT",
      url: "https://luminous-gaufre-2e946f.netlify.app/",
    },
    {
      imgSrc: "image/thumbnail/shoppingApp_thumbnail.png",
      name: "Shopping App",
      type: "REACT",
      url: "https://luminous-gaufre-2e946f.netlify.app/",
    },
    {
      imgSrc: "image/thumbnail/portfolio_thumbnail.png",
      name: "Portfolio Page",
      type: "REACT",
    },
  ];
  const [allList, setAllList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const getLists = () => {
    setAllList(lists);
    setFilterList(lists);
  };

  const allListsHandler = () => {
    getLists();
  };

  const filterListsHandler = (e) => {
    const filterBtn = e.target.innerHTML;
    const filter = allList.filter((list) => list.type === filterBtn);
    setFilterList(filter);
  };

  const goToProject = (list) => {
    window.open(`${list.url}`, "_blank");
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <div className={commonstyles.contents}>
      <h1 className={commonstyles.contents_title}>PROJECTS</h1>
      <h2 className={styles.projects_title}>My projects</h2>
      <ul className={styles.projects_btn_wrap}>
        <li className={styles.projects_btn} onClick={allListsHandler}>
          ALL
        </li>
        {buttons.map((btn, idx) => (
          <li
            className={styles.projects_btn}
            key={idx}
            onClick={filterListsHandler}
          >
            {btn}
          </li>
        ))}
      </ul>
      <main className={styles.projects_contents}>
        {filterList.map((list, idx) => (
          <div
            className={styles.projects_list}
            key={idx}
            onClick={() => goToProject(list)}
          >
            <img
              className={styles.projects_list_img}
              src={list.imgSrc}
              alt={list.name}
            />
            <h3>{list.name}</h3>
            <p> 바로가기 CLICK!</p>
          </div>
        ))}
      </main>
    </div>
  );
}

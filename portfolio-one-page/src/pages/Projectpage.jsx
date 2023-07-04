import React, { forwardRef, useEffect, useState } from "react";
import commonstyles from "./Common.module.css";
import styles from "./Projectpage.module.css";

const Projectpage = forwardRef(({ props }, ref) => {
  const buttons = ["ALL", "JS", "VUE", "REACT", "TEAM"];
  const lists = [
    {
      imgSrc: "image/thumbnail/closet_thumbnail.png",
      name: "What`s In My Closet",
      type: "JS",
      url: "https://whats-in-my-closet.netlify.app",
      code: "https://github.com/JuhyunjaceLee/Javascript-Projects/tree/main/what%60sInMyCloset",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/shoppingList_thumbnail.png",
      name: "Shopping List",
      type: "JS",
      url: "https://to-buy-lists.netlify.app",
      code: "https://github.com/JuhyunjaceLee/Javascript-Projects/tree/main/shoppingList",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/ploggingGame_thumbnail.png",
      name: "Plogging Game",
      type: "JS",
      url: "https://save-turtles-game.netlify.app",
      code: "https://github.com/JuhyunjaceLee/Javascript-Projects/tree/main/ploggingGame",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/myBox_thumbnail.png",
      name: "My Box",
      type: "VUE",
      url: "https://stellular-granita-afbdbd.netlify.app/",
      code: "https://github.com/JuhyunjaceLee/mybox/tree/master/mybox_vue",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/weatherApp_thumbnail.png",
      name: "Weather App",
      type: "REACT",
      url: "https://now-temperature.netlify.app",
      code: "https://github.com/JuhyunjaceLee/React-Projects/tree/main/weather-app",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/shoppingApp_thumbnail.png",
      name: "Shopping App",
      type: "REACT",
      url: "https://clothing-store-page.netlify.app",
      code: "https://github.com/JuhyunjaceLee/React-projects-shoppingApp",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/portfolio_thumbnail.png",
      name: "Portfolio Page",
      type: "REACT",
      url: "https://i-am-leejuhyun.netlify.app",
      code: "https://github.com/JuhyunjaceLee/React-Projects/tree/main/portfolio-page",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/filtercafe_thumbnail.png",
      name: "FILTER-CAFE",
      type: "TEAM",
      url: "#",
      code: "https://github.com/JuhyunjaceLee/cafe-for-study",
      state: "ing",
    },
  ];
  const [filterList, setFilterList] = useState([]);

  let [btnActive, setBtnActive] = useState("");

  const getLists = () => {
    setFilterList(lists);
  };

  const filterListsHandler = (e) => {
    const target = e.target;
    const filterBtn = target.innerHTML;
    if (filterBtn === "ALL") {
      getLists();
      setBtnActive(() => target.value);
    } else {
      const filter = lists.filter((list) => list.type === filterBtn);
      setFilterList(filter);
      setBtnActive(() => target.value);
    }
  };

  const goToProject = (list) => {
    window.open(`${list.url}`, "_blank");
  };

  const goToProjectCode = (list) => {
    window.open(`${list.code}`, "_blank");
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <div className={commonstyles.contents} ref={ref}>
      <h1 className={commonstyles.contents_title}>PROJECTS</h1>
      <h2 className={styles.projects_title}>My projects</h2>
      <ul className={styles.projects_btn_wrap}>
        {buttons.map((btn, idx) => (
          <li
            className={"projects_btn" + (idx == btnActive ? " active" : "")}
            key={idx}
            value={idx}
            onClick={filterListsHandler}
          >
            {btn}
          </li>
        ))}
      </ul>
      <main className={styles.projects_contents}>
        {filterList.map((list, idx) => (
          <div key={idx} className={styles.projects_list}>
            <div onClick={() => goToProject(list)}>
              <img
                className={styles.projects_list_img}
                src={list.imgSrc}
                alt={list.name}
              />
              <h3>{list.name}</h3>
              <p className={styles.projects_list_page}>
                {list.state === "ing"
                  ? "진행 중입니다."
                  : "프로젝트 페이지 바로가기"}
              </p>
            </div>

            <h3
              className={styles.projects_list_code}
              onClick={() => goToProjectCode(list)}
            >
              소스코드 보기
            </h3>
          </div>
        ))}
      </main>
    </div>
  );
});

export default Projectpage;

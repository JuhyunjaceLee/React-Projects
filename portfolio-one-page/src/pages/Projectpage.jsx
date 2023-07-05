import React, { forwardRef, useEffect, useState } from "react";
import commonstyles from "./Common.module.css";
import styles from "./Projectpage.module.css";
// import { RiPagesLine } from "react-icons/ri";
import { MdOutlineEditNote } from "react-icons/md";
import { FaCode } from "react-icons/fa";

const Projectpage = forwardRef(({ props }, ref) => {
  const buttons = ["ALL", "JS", "VUE", "REACT", "TEAM"];
  const lists = [
    {
      imgSrc: "image/thumbnail/closet_thumbnail.png",
      name: "What`s In My Closet",
      type: "JS",
      url: "https://whats-in-my-closet.netlify.app",
      code: "https://github.com/JuhyunjaceLee/Javascript-Projects/tree/main/what%60sInMyCloset",
      note: "https://desert-edam-bea.notion.site/What-s-In-My-Closet-74cb78cb3c9b4ab897b89217664fc8bd?pvs=4",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/shoppingList_thumbnail.png",
      name: "Shopping List",
      type: "JS",
      url: "https://to-buy-lists.netlify.app",
      code: "https://github.com/JuhyunjaceLee/Javascript-Projects/tree/main/shoppingList",
      note: "https://desert-edam-bea.notion.site/Shopping-List-498216a296dd4781a04a60c22574613a?pvs=4",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/ploggingGame_thumbnail.png",
      name: "Plogging Game",
      type: "JS",
      url: "https://save-turtles-game.netlify.app",
      code: "https://github.com/JuhyunjaceLee/Javascript-Projects/tree/main/ploggingGame",
      note: "https://desert-edam-bea.notion.site/Plogging-Game-9202f2ac1a8544f5b1d2447490cda5f0?pvs=4",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/myBox_thumbnail.png",
      name: "My Box",
      type: "VUE",
      url: "https://stellular-granita-afbdbd.netlify.app/",
      code: "https://github.com/JuhyunjaceLee/mybox/tree/master/mybox_vue",
      note: "https://desert-edam-bea.notion.site/MyBox-Portfolio-9450e85313254a679a1e0cdfee412e18?pvs=4",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/weatherApp_thumbnail.png",
      name: "Weather App",
      type: "REACT",
      url: "https://now-temperature.netlify.app",
      code: "https://github.com/JuhyunjaceLee/React-Projects/tree/main/weather-app",
      note: "https://desert-edam-bea.notion.site/Weather-App-efa034f6f65046fb8f3040fe5bfa2138?pvs=4",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/shoppingApp_thumbnail.png",
      name: "Shopping App",
      type: "REACT",
      url: "https://clothing-store-page.netlify.app",
      code: "https://github.com/JuhyunjaceLee/React-projects-shoppingApp",
      note: "https://desert-edam-bea.notion.site/Shopping-app-c0bd8fed959542b49487a69c70955296?pvs=4",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/portfolio_ver1_thumbnail.png",
      name: "Portfolio Page(one-page-version)",
      type: "REACT",
      url: "https://i-am-leejuhyun.netlify.app",
      code: "https://github.com/JuhyunjaceLee/React-Projects/tree/main/portfolio-one-page",
      note: "https://desert-edam-bea.notion.site/Portfolio-one-page-e15c9e24a306414c827b53f68059e2e4?pvs=4",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/portfolio_ver2_thumbnail.png",
      name: "Portfolio Page Ver.2",
      type: "REACT",
      url: "https://i-am-leejuhyun-ver2.netlify.app",
      code: "https://github.com/JuhyunjaceLee/React-Projects/tree/main/portfolio-page",
      note: "https://desert-edam-bea.notion.site/Portfolio-page-ver-2-5916f61c79c14f57800283b7d3ecd062?pvs=4",
      state: "done",
    },
    {
      imgSrc: "image/thumbnail/filtercafe_thumbnail.png",
      name: "FILTER-CAFE",
      type: "TEAM",
      url: "#",
      code: "https://github.com/JuhyunjaceLee/cafe-for-study",
      note: "https://desert-edam-bea.notion.site/Team-Project-978cfb880e2349c386f2922a19b920a7?pvs=4",
      state: "ing",
    },
  ];
  const [filterList, setFilterList] = useState([]);

  let [btnActive, setBtnActive] = useState(0);

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
  const goToProjectNote = (list) => {
    window.open(`${list.note}`, "_blank");
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
            className={"projects_btn" + (idx === btnActive ? " active" : "")}
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
              onClick={() => goToProjectNote(list)}
            >
              <MdOutlineEditNote />
              DESCRIPTION
            </h3>
            <h3
              className={styles.projects_list_code}
              onClick={() => goToProjectCode(list)}
            >
              <FaCode />
              소스코드 보기
            </h3>
          </div>
        ))}
      </main>
    </div>
  );
});

export default Projectpage;

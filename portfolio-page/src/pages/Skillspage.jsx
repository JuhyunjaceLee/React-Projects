import React from "react";
import commonstyles from "./Common.module.css";
import styles from "./Skillspage.module.css";
import { PieChart } from "react-minimal-pie-chart";

export default function Skillspage() {
  const defaultLableStyle = {
    fontSize: "10px",
    fill: "white",
  };
  return (
    <div className={commonstyles.contents}>
      <h1 className={commonstyles.contents_title}>SKILLS</h1>
      <div className={styles.chart_contents}>
        <PieChart
          className={styles.chart}
          data={[
            {
              title: "HTML5",
              value: 90,
              percentage: 90,
              color: "rgb(228, 76, 37)",
            },
          ]}
          reveal={90}
          background="#454646"
          lengthAngle={360}
          animate
          animationDuration={3000}
          lineWidth={30}
          rounded
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ ...defaultLableStyle }}
          labelPosition={35}
        />
        <PieChart
          className={styles.chart}
          data={[
            {
              title: "CSS3",
              value: 90,
              percentage: 90,
              color: "rgb(37, 77, 227)",
            },
          ]}
          reveal={90}
          background="#454646"
          lengthAngle={360}
          animate
          animationDuration={3000}
          lineWidth={30}
          rounded
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ ...defaultLableStyle }}
          labelPosition={25}
        />
        <PieChart
          className={styles.chart}
          data={[
            {
              title: "JAVASCRIPT",
              value: 80,
              percentage: 80,
              color: "#ebaa1c",
            },
          ]}
          reveal={80}
          background="#454646"
          lengthAngle={360}
          animate
          animationDuration={2000}
          lineWidth={30}
          rounded
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ ...defaultLableStyle }}
          labelPosition={55}
        />
        <PieChart
          className={styles.chart}
          data={[
            {
              title: "VUE.JS",
              value: 60,
              percentage: 60,
              color: "#3fb27f",
            },
          ]}
          reveal={60}
          background="#454646"
          lengthAngle={360}
          animate
          animationDuration={1000}
          lineWidth={30}
          rounded
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ ...defaultLableStyle }}
          labelPosition={35}
        />
        <PieChart
          className={styles.chart}
          data={[
            {
              title: "REACT",
              value: 60,
              percentage: 60,
              color: "#5ed3f3",
            },
          ]}
          reveal={60}
          background="#454646"
          lengthAngle={360}
          animate
          animationDuration={1000}
          lineWidth={30}
          rounded
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ ...defaultLableStyle }}
          labelPosition={30}
        />
      </div>
    </div>
  );
}

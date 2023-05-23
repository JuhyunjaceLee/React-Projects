import React from "react";
import styles from "./ProductCard.module.css";
import NewBtn from "./NewBtn";
import ChoiceBtn from "./ChoiceBtn";

export default function ProductCard({ list }) {
  return (
    <div className={styles.productCard_contents}>
      <img src={list?.img} alt="list_img" />
      <h4>{list?.title}</h4>
      <p>￦{list?.price}</p>
      <p>{list && list.size.map((size) => `${size} / `)}</p>
      {list?.new ? <NewBtn /> : <></>}
      {list?.choice ? <ChoiceBtn /> : <></>}
    </div>
  );
}

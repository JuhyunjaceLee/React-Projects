import React from "react";
import styles from "./SearchInput.module.css";

import { BsSearch } from "react-icons/bs";

export default function SearchInput() {
  return (
    <div className={styles.search_wrap}>
      <BsSearch />
      <input type="text" placeholder="제품검색" />
    </div>
  );
}

import React from "react";
import styles from "./styles/ToDoFilter.module.css";

const ToDoFilter = ({ filter, setFilter }) => {
  return (
    <div className={styles.filter}>
      <button className={styles.btn} onClick={() => setFilter("all")} disabled={filter === "all"}>전체</button>
      <button className={styles.btn} onClick={() => setFilter("active")} disabled={filter === "active"}>미완료</button>
      <button className={styles.btn} onClick={() => setFilter("completed")} disabled={filter === "completed"}>완료</button>
    </div>
  );
};

export default ToDoFilter; 
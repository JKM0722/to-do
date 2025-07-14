import React from "react";
import styles from "./styles/ToDoFilter.module.css";

// ToDoFilter: 할 일 목록 필터링 버튼 컴포넌트
const ToDoFilter = ({ filter, setFilter }) => {
  return (
    <div className={styles.filter}>
      {/* 전체 보기 버튼 */}
      <button className={styles.btn} onClick={() => setFilter("all")} disabled={filter === "all"}>전체</button>
      {/* 미완료 보기 버튼 */}
      <button className={styles.btn} onClick={() => setFilter("active")} disabled={filter === "active"}>미완료</button>
      {/* 완료 보기 버튼 */}
      <button className={styles.btn} onClick={() => setFilter("completed")} disabled={filter === "completed"}>완료</button>
    </div>
  );
};

export default ToDoFilter; 
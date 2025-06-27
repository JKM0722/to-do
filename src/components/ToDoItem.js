import React from "react";
import styles from "./styles/ToDoItem.module.css";

// ToDoItem: 개별 할 일 항목을 렌더링하는 컴포넌트
const ToDoItem = ({ todo, index, onToggle, onDelete }) => {
  return (
    <li className={styles.item}>
      {/* 인덱스 번호 표시 */}
      <span className={styles.index}>{index}</span>
      {/* 체크박스: 완료 여부 토글 */}
      <input id={todo.id} type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      {/* 할 일 텍스트, 완료 시 스타일 변경 */}
      <label htmlFor={todo.id} className={`${styles.text} ${todo.completed ? styles.completed : ""}`}>{todo.text}</label>
      {/* 삭제 버튼 */}
      <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
};

export default ToDoItem; 
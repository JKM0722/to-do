import React from "react";
import styles from "./styles/ToDoItem.module.css";

const ToDoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={styles.item}>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span className={`${styles.text} ${todo.completed ? styles.completed : ""}`}>{todo.text}</span>
      <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
};

export default ToDoItem; 
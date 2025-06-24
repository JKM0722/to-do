import React from "react";
import ToDoItem from "./ToDoItem";
import styles from "./styles/ToDoList.module.css";

const ToDoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ToDoList; 
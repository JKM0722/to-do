import React from "react";
import ToDoItem from "./ToDoItem";
import styles from "./styles/ToDoList.module.css";

// ToDoList: 할 일 목록을 렌더링하는 컴포넌트
const ToDoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className={styles.list}>
      {/* todos 배열을 순회하며 각 할 일 항목을 ToDoItem 컴포넌트로 렌더링 */}
      {todos.map((todo, index) => (
        <ToDoItem 
          key={todo.id} 
          todo={todo} 
          index={index + 1} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
};

export default ToDoList; 
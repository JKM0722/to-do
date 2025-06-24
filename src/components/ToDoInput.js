import React, { useState } from "react";
import styles from "./styles/ToDoInput.module.css";

const ToDoInput = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button className={styles.addBtn} type="submit">추가</button>
    </form>
  );
};

export default ToDoInput; 
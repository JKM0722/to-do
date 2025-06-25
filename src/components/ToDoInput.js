import React, { useState } from "react";
import styles from "./styles/ToDoInput.module.css";

// ToDoInput: 새로운 할 일을 입력받는 컴포넌트
const ToDoInput = ({ onAdd }) => {
  // 입력값 상태
  const [value, setValue] = useState("");

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 기본 동작 방지
    if (!value.trim()) return; // 빈 값 방지
    onAdd(value); // 상위 컴포넌트로 값 전달
    setValue(""); // 입력창 초기화
  };

  return (
    <div className={styles.inputBox}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* 할 일 입력창 */}
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        {/* 추가 버튼 */}
        <button className={styles.addBtn} type="submit">추가</button>
      </form>
    </div>
  );
};

export default ToDoInput; 
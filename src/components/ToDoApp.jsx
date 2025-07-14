"use client";

import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import ToDoFilter from "./ToDoFilter";
import styles from "./styles/ToDoApp.module.css";
import ThemeToggleButton from "./ThemeToggleButton";

// 로컬스토리지 키 상수 선언
const LOCAL_STORAGE_KEY = "todoItems";

// ToDoApp: 투두리스트 전체 앱 컴포넌트
const ToDoApp = () => {
  // todos: 할 일 목록 상태, filter: 필터 상태
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부하기", completed: false },
    { id: 2, text: "투두리스트 만들기", completed: false }
  ]);
  const [filter, setFilter] = useState("all");

  // 컴포넌트 마운트 시 로컬스토리지에서 할 일 목록 불러오기
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  // todos 상태가 변경될 때마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // setTodos 호출 시 콘솔 로그 출력을 위한 래퍼 함수 (확장성 고려)
  const updateTodos = (newTodos) => {
    // console.log("todos 업데이트:", newTodos);
    setTodos(newTodos);
  };

  // 할 일 추가 핸들러
  const handleAdd = (text) => {
    updateTodos([
      ...todos,
      { id: Date.now(), text, completed: false }, // 고유 id 부여
    ]);
  };

  // 할 일 완료/미완료 토글 핸들러
  const handleToggle = (id) => {
    updateTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 할 일 삭제 핸들러
  const handleDelete = (id) => {
    updateTodos(todos.filter((todo) => todo.id !== id));
  };

  // 필터링된 할 일 목록 계산
  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  // 렌더링
  return (
    <div className={styles.container}>
      {/* 테마 토글 버튼 */}
      <ThemeToggleButton />
      {/* 앱 타이틀 */}
      <h1 className={styles.title}>To-Do List</h1>
      {/* 필터 버튼 */}
      <ToDoFilter filter={filter} setFilter={setFilter} />
      {/* 할 일 목록 */}
      <ToDoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} />
      {/* 할 일 입력창 */}
      <ToDoInput onAdd={handleAdd} />
    </div>
  );
};

export default ToDoApp; 
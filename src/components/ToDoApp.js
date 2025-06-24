"use client";

import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import ToDoFilter from "./ToDoFilter";
import styles from "./styles/ToDoApp.module.css";

const LOCAL_STORAGE_KEY = "todoItems";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // 로컬스토리지에서 불러오기
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  // 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // 할 일 추가
  const handleAdd = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  // 체크박스 토글
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 삭제
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 필터링
  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To-Do List</h1>
      <ToDoInput onAdd={handleAdd} />
      <ToDoFilter filter={filter} setFilter={setFilter} />
      <ToDoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default ToDoApp; 
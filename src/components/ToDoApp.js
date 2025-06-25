"use client";

import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import ToDoFilter from "./ToDoFilter";
import styles from "./styles/ToDoApp.module.css";
import ThemeToggleButton from "./ThemeToggleButton";

const LOCAL_STORAGE_KEY = "todoItems";

const ToDoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부하기", completed: false },
    { id: 2, text: "투두리스트 만들기", completed: false }
  ]);
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

  // setTodos 호출 시 콘솔 로그 출력을 위한 래퍼 함수
  const updateTodos = (newTodos) => {
    console.log("todos 업데이트:", newTodos);
    setTodos(newTodos);
  };

  const handleAdd = (text) => {
    updateTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const handleToggle = (id) => {
    updateTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    updateTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  return (
    <div className={styles.container}>
      <ThemeToggleButton />
      <h1 className={styles.title}>To-Do List</h1>
      <ToDoFilter filter={filter} setFilter={setFilter} />
      <ToDoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} />
      <ToDoInput onAdd={handleAdd} />
    </div>
  );
};

export default ToDoApp; 
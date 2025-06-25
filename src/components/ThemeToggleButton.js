'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import styles from "./styles/ToDoApp.module.css";
import { CiLight, CiDark } from "react-icons/ci";

// ThemeToggleButton: 다크/라이트 테마를 전환하는 버튼 컴포넌트
export default function ThemeToggleButton() {
  // next-themes 훅 사용: 현재 테마와 테마 변경 함수 제공
  const { theme, setTheme } = useTheme()
  // 마운트 여부 상태 (SSR 이슈 방지)
  const [mounted, setMounted] = useState(false)

  // 컴포넌트 마운트 시 mounted true로 설정
  useEffect(() => {
    setMounted(true)
  }, [])

  // 마운트 전에는 아무것도 렌더링하지 않음 (SSR 이슈 방지)
  if (!mounted) {
    return null
  }

  // 렌더링: 현재 테마에 따라 아이콘 변경
  return (
    <button className={styles.btn} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <CiLight /> : <CiDark />}
    </button>
  )
} 
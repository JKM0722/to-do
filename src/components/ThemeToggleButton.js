'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import styles from "./styles/ToDoApp.module.css";
import { CiLight, CiDark } from "react-icons/ci";



export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className={styles.btn} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <CiLight /> : <CiDark />}
    </button>
  )
} 
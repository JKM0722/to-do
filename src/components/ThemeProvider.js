'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

// ThemeProvider: next-themes의 ThemeProvider를 래핑하여 테마 컨텍스트 제공
export function ThemeProvider({ children }) {
  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>
} 
"use client";           // 클라이언트 전용(인터랙션 필요 시)
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

// Header: 상단 네비게이션 헤더 컴포넌트
export default function Header() {
  return (
    // 네비게이션 바와 테마 토글 버튼 포함
    <header className="p-4 border-b fixed top-0 left-1/2 -translate-x-1/2 w-full flex justify-between items-center">
      <div>
        {/* 홈, 소개 페이지로 이동하는 링크 */}
        <Link href="/">홈</Link> | <Link href="/about">소개</Link>
      </div>
      {/* 테마 토글 버튼 */}
      <ThemeToggleButton />
    </header>
  );
}
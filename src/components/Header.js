"use client";           // 클라이언트 전용(인터랙션 필요 시)
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  return (
    <header className="p-4 border-b fixed top-0 left-1/2 -translate-x-1/2 w-full flex justify-between items-center">
      <div>
        <Link href="/">홈</Link> | <Link href="/about">소개</Link>
      </div>
      <ThemeToggleButton />
    </header>
  );
}
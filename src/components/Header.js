"use client";           // 클라이언트 전용(인터랙션 필요 시)
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 border-b fixed top-0 left-1/2 -translate-x-1/2 w-full">
      <Link href="/">홈</Link> | <Link href="/about">소개</Link>
    </header>
  );
}
"use client"

import type React from "react"

import { usePathname } from "next/navigation"

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return <main className={isHomePage ? "main-home" : "main"}>{children}</main>
}

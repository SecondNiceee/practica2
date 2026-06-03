"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "context", label: "Контекст" },
  { id: "principles", label: "Принципы" },
  { id: "scheme", label: "Схема" },
  { id: "visualizations", label: "Фотомонтажи" },
  { id: "before-after", label: "До / После" },
  { id: "scenario", label: "Сценарий" },
  { id: "perception", label: "Проверка" },
]

export function SectionNav() {
  const [active, setActive] = useState<string>("context")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Разделы работы"
      className={`sticky top-0 z-40 border-b border-teal-100 bg-[#f8fafc]/85 backdrop-blur transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex gap-1 overflow-x-auto py-2 no-scrollbar">
          {sections.map((s) => (
            <li key={s.id} className="flex-none">
              <a
                href={`#${s.id}`}
                className={`block whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active === s.id
                    ? "bg-teal-700 text-white"
                    : "text-teal-800/70 hover:bg-teal-100"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

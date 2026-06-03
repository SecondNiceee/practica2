"use client"

import Image from "next/image"
import { useRef, useState, useCallback } from "react"
import { MoveHorizontal } from "lucide-react"

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }

  const onPointerUp = () => {
    draggingRef.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4))
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4))
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-teal-100 shadow-sm select-none touch-none"
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* After (base layer) */}
      <Image
        src="/images/practica5/compare-after.png"
        alt="После: чистая навигационная система"
        fill
        className="object-cover"
        priority
      />
      <span className="absolute bottom-3 right-3 z-20 px-3 py-1 rounded-full bg-teal-700 text-white text-xs font-medium">
        После
      </span>

      {/* Before (clipped layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src="/images/practica5/compare-before.png"
          alt="До: визуальный хаос и разрозненные указатели"
          fill
          className="object-cover"
          priority
        />
        <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-medium">
          До
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 z-30 flex items-center justify-center"
        style={{ left: `calc(${position}% - 1px)` }}
      >
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(15,118,110,0.4)]" />
        <button
          type="button"
          aria-label="Перетащите, чтобы сравнить до и после"
          role="slider"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onKeyDown={onKeyDown}
          className="relative flex h-11 w-11 cursor-ew-resize items-center justify-center rounded-full bg-white text-teal-700 shadow-md ring-1 ring-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

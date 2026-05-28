"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function EcoBanner() {
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div 
      className="relative w-full overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Banner Container */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] bg-[#0a0a0a] overflow-hidden">
        
        {/* Animated Background Gradient */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Primary gradient orb */}
          <div 
            className={`absolute -left-20 -top-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-3xl transition-transform duration-1000 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            style={{
              background: "radial-gradient(circle, rgba(34,197,94,0.4) 0%, rgba(16,185,129,0.2) 40%, transparent 70%)",
            }}
          />
          
          {/* Secondary gradient orb */}
          <div 
            className={`absolute right-0 bottom-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-3xl transition-transform duration-1000 ${
              isHovered ? "scale-110 translate-x-5" : "scale-100"
            }`}
            style={{
              background: "radial-gradient(circle, rgba(20,184,166,0.35) 0%, rgba(56,189,248,0.15) 50%, transparent 70%)",
            }}
          />

          {/* Accent line */}
          <div 
            className={`absolute top-1/2 left-0 right-0 h-px transition-opacity duration-700 ${
              isHovered ? "opacity-30" : "opacity-15"
            }`}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.5), transparent)",
            }}
          />
        </div>

        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/practica2/banner-main.png"
            alt="ЭкоГород баннер"
            fill
            className={`object-cover transition-all duration-700 ${
              isHovered ? "scale-105 opacity-25" : "scale-100 opacity-20"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10 lg:p-14">
          
          {/* Top Section */}
          <div className="flex items-start justify-between">
            {/* Tags */}
            <div className="flex flex-col gap-2">
              <span 
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-500 ${
                  mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                }`}
                style={{ 
                  background: "rgba(34,197,94,0.15)",
                  color: "#4ade80",
                  border: "1px solid rgba(34,197,94,0.3)"
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Экологическая акция
              </span>
              <span 
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-500 delay-100 ${
                  mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                }`}
                style={{ 
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
              >
                Раздельный сбор отходов
              </span>
            </div>

            {/* Year Badge */}
            <span 
              className={`text-sm font-mono text-white/40 transition-all duration-500 delay-200 ${
                mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              2026
            </span>
          </div>

          {/* Center - Main Title */}
          <div className="flex-1 flex flex-col items-center justify-center -mt-4 md:-mt-8">
            <h2 
              className={`text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold tracking-tighter text-white leading-none text-center transition-all duration-700 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                textShadow: isHovered 
                  ? "0 0 80px rgba(34,197,94,0.5), 0 0 120px rgba(34,197,94,0.3)" 
                  : "none",
              }}
            >
              ЭКОГОРОД
            </h2>
            
            {/* Tagline */}
            <p 
              className={`mt-2 md:mt-4 text-lg md:text-2xl lg:text-3xl font-light text-white/70 tracking-wide text-center transition-all duration-700 delay-150 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Чистый город начинается с тебя
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left - CTA Button */}
            <button 
              className={`group flex items-center gap-3 px-6 py-3 rounded-full font-medium text-sm transition-all duration-500 delay-300 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                background: isHovered 
                  ? "linear-gradient(135deg, #22c55e, #14b8a6)" 
                  : "rgba(34,197,94,0.9)",
                color: "#fff",
              }}
            >
              <span>Присоединиться</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Center - Stats */}
            <div 
              className={`flex items-center gap-6 md:gap-10 transition-all duration-500 delay-400 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-white">10K+</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">Участников</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-white">50+</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">Районов</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-green-400">100%</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">Эко</span>
              </div>
            </div>

            {/* Right - Scroll indicator */}
            <div 
              className={`hidden md:flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest transition-all duration-500 delay-500 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span>Узнать больше</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
            <circle cx="80" cy="20" r="2" fill="#22c55e" />
            <circle cx="90" cy="35" r="1.5" fill="#14b8a6" />
            <circle cx="70" cy="30" r="1" fill="#38bdf8" />
          </svg>
        </div>

        {/* Corner Accent */}
        <div 
          className={`absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-50"
          }`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path 
              d="M0 100 L0 60 Q0 0 60 0 L100 0" 
              fill="none" 
              stroke="rgba(34,197,94,0.3)" 
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

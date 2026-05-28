"use client"

import { useState, useEffect } from "react"

export function EcoBannerMinimal() {
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div 
      className="relative w-full overflow-hidden rounded-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Container - Warm Beige Theme */}
      <div className="relative bg-[#f5f0e8] overflow-hidden">
        
        {/* Top Navigation Bar */}
        <div className="relative z-20 flex items-center justify-between px-6 md:px-10 py-4 border-b border-black/5">
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-black/60">
            <span className="hover:text-black transition-colors cursor-pointer">Раздельный сбор</span>
            <span className="hover:text-black transition-colors cursor-pointer">Озеленение</span>
            <span className="hover:text-black transition-colors cursor-pointer">Волонтёрство</span>
          </div>
          <button 
            className="px-4 py-2 bg-black text-white text-xs uppercase tracking-wide rounded-full hover:bg-black/80 transition-colors"
          >
            Участвовать
          </button>
        </div>

        {/* Giant Typography */}
        <div className="relative py-4 md:py-8 overflow-hidden">
          <h2 
            className={`text-[12vw] md:text-[15vw] font-bold tracking-tighter text-black leading-[0.85] px-6 md:px-10 transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            ЭКОГОРОД
          </h2>
        </div>

        {/* Content Section */}
        <div className="relative px-6 md:px-10 pb-8 md:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            
            {/* Left - Tagline */}
            <div 
              className={`transition-all duration-700 delay-200 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-2xl md:text-4xl lg:text-5xl font-light italic text-black/80 leading-tight">
                Лучше всего подается
                <br />
                <span className="text-green-600">каждый день</span>
              </p>
            </div>

            {/* Right - Visual Element */}
            <div 
              className={`relative flex justify-end transition-all duration-700 delay-300 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* Eco Circle Element */}
              <div 
                className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden transition-transform duration-700 ${
                  isHovered ? "scale-105 rotate-3" : "scale-100 rotate-0"
                }`}
              >
                {/* Gradient Background */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, #22c55e 0%, #14b8a6 50%, #0d9488 100%)",
                  }}
                />
                
                {/* Recycle Symbol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg 
                    className={`w-24 h-24 md:w-32 md:h-32 text-white/90 transition-transform duration-500 ${
                      isHovered ? "rotate-180 scale-110" : "rotate-0 scale-100"
                    }`}
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>

                {/* Shine Effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="relative px-6 md:px-10 py-6 bg-black text-white">
          <div 
            className={`flex flex-wrap items-center justify-between gap-6 transition-all duration-700 delay-400 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/70">Активная акция</span>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="block text-xl md:text-2xl font-bold">10,000+</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">Участников</span>
              </div>
              <div className="text-center">
                <span className="block text-xl md:text-2xl font-bold text-green-400">50 т</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">Переработано</span>
              </div>
              <div className="text-center">
                <span className="block text-xl md:text-2xl font-bold">500+</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">Деревьев</span>
              </div>
            </div>

            <a 
              href="#" 
              className="group flex items-center gap-2 text-sm hover:text-green-400 transition-colors"
            >
              <span>Присоединиться</span>
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

export function StreetBanner() {
  return (
    <div className="w-full">
      {/* Main Banner - Street Billboard Style */}
      <div 
        className="relative w-full overflow-hidden rounded-lg shadow-2xl"
        style={{ aspectRatio: "3/1" }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Sun/Circle */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl" />
          
          {/* Leaf patterns */}
          <svg className="absolute top-4 left-4 w-24 h-24 text-white/10" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 5C30 5 15 25 15 50c0 25 15 45 35 45 20 0 35-20 35-45 0-25-15-45-35-45zm0 80c-15 0-25-15-25-35s10-35 25-35 25 15 25 35-10 35-25 35z"/>
          </svg>
          
          {/* Abstract leaves/nature shapes */}
          <div className="absolute bottom-0 left-0 w-full h-32">
            <svg className="w-full h-full" viewBox="0 0 1200 150" preserveAspectRatio="none">
              <path d="M0,150 L0,100 Q150,50 300,80 T600,60 T900,90 T1200,70 L1200,150 Z" fill="rgba(255,255,255,0.1)"/>
              <path d="M0,150 L0,120 Q200,80 400,100 T800,85 T1200,110 L1200,150 Z" fill="rgba(255,255,255,0.08)"/>
            </svg>
          </div>
          
          {/* Trees silhouette */}
          <div className="absolute bottom-0 left-10 flex items-end gap-2">
            <div className="w-8 h-20 bg-emerald-800/40 rounded-t-full" />
            <div className="w-6 h-16 bg-emerald-800/30 rounded-t-full" />
            <div className="w-10 h-24 bg-emerald-800/50 rounded-t-full" />
          </div>
          
          <div className="absolute bottom-0 right-10 flex items-end gap-2">
            <div className="w-10 h-28 bg-emerald-800/40 rounded-t-full" />
            <div className="w-7 h-18 bg-emerald-800/35 rounded-t-full" />
            <div className="w-8 h-22 bg-emerald-800/45 rounded-t-full" />
          </div>
          
          {/* Birds */}
          <svg className="absolute top-8 right-1/4 w-20 h-10 text-white/40" viewBox="0 0 100 40">
            <path d="M10,20 Q15,10 20,20 M20,20 Q25,10 30,20" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M40,15 Q45,5 50,15 M50,15 Q55,5 60,15" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M70,25 Q75,15 80,25 M80,25 Q85,15 90,25" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-16">
          {/* Left: Recycle Symbol */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* Recycle symbol made of leaves */}
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                {/* Three arrows forming recycle symbol */}
                <g fill="white">
                  {/* Arrow 1 - Top */}
                  <path d="M50,10 L65,35 L55,35 L55,45 L45,45 L45,35 L35,35 Z" className="drop-shadow-md">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="0 50 50" dur="0s"/>
                  </path>
                  {/* Arrow 2 - Bottom Right */}
                  <path d="M75,75 L50,75 L55,65 L45,65 L50,50 L65,65 L55,65 Z" transform="rotate(120 50 50)" className="drop-shadow-md"/>
                  {/* Arrow 3 - Bottom Left */}
                  <path d="M75,75 L50,75 L55,65 L45,65 L50,50 L65,65 L55,65 Z" transform="rotate(240 50 50)" className="drop-shadow-md"/>
                </g>
                {/* Leaf decorations */}
                <ellipse cx="50" cy="25" rx="8" ry="12" fill="#86efac" opacity="0.8"/>
                <ellipse cx="70" cy="65" rx="8" ry="12" fill="#86efac" opacity="0.8" transform="rotate(120 70 65)"/>
                <ellipse cx="30" cy="65" rx="8" ry="12" fill="#86efac" opacity="0.8" transform="rotate(-120 30 65)"/>
              </svg>
            </div>
          </div>
          
          {/* Center: Main Text */}
          <div className="flex-1 text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-lg" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}>
              ЭКОГОРОД
            </h1>
            <div className="mt-2 md:mt-4">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-300 drop-shadow-md" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.3)" }}>
                СОХРАНИ ПЛАНЕТУ!
              </p>
            </div>
            <p className="mt-2 md:mt-3 text-sm md:text-lg lg:text-xl text-white/90 font-medium italic">
              Чистый город начинается с тебя
            </p>
          </div>
          
          {/* Right: City Silhouette with Nature */}
          <div className="flex-shrink-0 hidden md:block">
            <svg viewBox="0 0 120 100" className="w-32 h-24 lg:w-40 lg:h-32">
              {/* Buildings */}
              <rect x="10" y="50" width="15" height="50" fill="rgba(255,255,255,0.3)" rx="2"/>
              <rect x="30" y="35" width="20" height="65" fill="rgba(255,255,255,0.4)" rx="2"/>
              <rect x="55" y="45" width="18" height="55" fill="rgba(255,255,255,0.35)" rx="2"/>
              <rect x="78" y="55" width="15" height="45" fill="rgba(255,255,255,0.3)" rx="2"/>
              <rect x="98" y="40" width="17" height="60" fill="rgba(255,255,255,0.4)" rx="2"/>
              
              {/* Windows */}
              <rect x="14" y="55" width="3" height="4" fill="rgba(255,255,200,0.6)"/>
              <rect x="14" y="62" width="3" height="4" fill="rgba(255,255,200,0.6)"/>
              <rect x="35" y="40" width="4" height="5" fill="rgba(255,255,200,0.6)"/>
              <rect x="42" y="40" width="4" height="5" fill="rgba(255,255,200,0.6)"/>
              <rect x="35" y="50" width="4" height="5" fill="rgba(255,255,200,0.6)"/>
              <rect x="42" y="50" width="4" height="5" fill="rgba(255,255,200,0.6)"/>
              
              {/* Trees between buildings */}
              <ellipse cx="25" cy="85" rx="8" ry="15" fill="#22c55e"/>
              <rect x="23" y="90" width="4" height="10" fill="#854d0e"/>
              <ellipse cx="73" cy="88" rx="6" ry="12" fill="#16a34a"/>
              <rect x="71" y="92" width="4" height="8" fill="#854d0e"/>
              <ellipse cx="95" cy="85" rx="7" ry="14" fill="#22c55e"/>
              <rect x="93" y="90" width="4" height="10" fill="#854d0e"/>
            </svg>
          </div>
        </div>
        
        {/* Bottom stripe with info */}
        <div className="absolute bottom-0 left-0 right-0 bg-emerald-900/80 py-2 px-4 md:px-8">
          <div className="flex items-center justify-center gap-4 md:gap-8 text-white/90 text-xs md:text-sm">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Раздельный сбор
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Озеленение
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Переработка
            </span>
          </div>
        </div>
      </div>

      {/* Banner Frame - simulating billboard mounting */}
      <div className="mt-4 flex justify-center">
        <div className="w-4 h-8 bg-gray-400 rounded-b-sm" />
        <div className="w-32 h-1 bg-gray-400 mt-7" />
        <div className="w-4 h-8 bg-gray-400 rounded-b-sm" />
      </div>
    </div>
  )
}

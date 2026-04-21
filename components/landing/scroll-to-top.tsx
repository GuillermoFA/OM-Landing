"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (scrollY / height) * 100
      
      setProgress(scrolled)
      setVisible(scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    const start = window.scrollY
    const duration = 1000 // duration in ms
    const startTime = performance.now()

    // Easing function: easeInOutQuart
    const easeInOutQuart = (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeInOutQuart(progress)

      window.scrollTo(0, start * (1 - easedProgress))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  // Calculate circle properties
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-white dark:bg-zinc-900 
        shadow-2xl shadow-black/20
        flex items-center justify-center
        transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
        hover:scale-110 active:scale-95
        group
        ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-50 pointer-events-none"}
      `}
    >
      {/* Progress Ring */}
      <svg className="absolute -rotate-90 w-full h-full p-1" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-zinc-200 dark:text-zinc-800"
        />
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-150 ease-out"
        />
      </svg>
      
      <ArrowUp className="h-6 w-6 text-primary group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "18+", label: "Años de experiencia", highlight: true },
  { value: "100+", label: "Proyectos completados", highlight: false },
  { value: "50+", label: "Clientes satisfechos", highlight: true },
  { value: "24/7", label: "Soporte continuo", highlight: false },
]

const services = [
  "Estructura y Montaje",
  "Electricidad Industrial",
  "Transporte",
  "Mantención Mecánica",
  "Aseo Industrial",
  "HDPE",
  "Soldadura",
]

const carouselImages = [
  "/images/first-page/image-80.png",
  "/images/first-page/om-services.jpeg",
  "/images/first-page/movil.jpg",
]

function AnimatedCounter({ value, delay = 0 }: { value: string; delay?: number }) {
  const [displayValue, setDisplayValue] = useState("0")
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          setTimeout(() => {
            const numericPart = value.replace(/\D/g, "")
            const suffix = value.replace(/\d/g, "")
            
            if (numericPart) {
              const target = parseInt(numericPart)
              const duration = 1500
              const steps = 30
              const increment = target / steps
              let current = 0
              
              const timer = setInterval(() => {
                current += increment
                if (current >= target) {
                  setDisplayValue(value)
                  clearInterval(timer)
                } else {
                  setDisplayValue(Math.floor(current) + suffix)
                }
              }, duration / steps)
            } else {
              setDisplayValue(value)
            }
          }, delay)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, delay, hasAnimated])

  return <span ref={ref}>{displayValue}</span>
}

export function Hero() {
  const [bgIndex, setBgIndex] = useState(0)

  // Carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="min-h-screen pt-16 lg:pt-[72px] flex flex-col bg-background">
      <div className="flex-1 flex flex-col lg:flex-row w-full relative">
        
        {/* Left Side: 60% width - Carousel + Title */}
        <div className="relative w-full lg:w-[60%] flex items-center justify-center p-8 lg:p-16 min-h-[50vh] lg:min-h-full overflow-hidden">
          {/* Animated Background Carousel limited to left half */}
          <div className="absolute inset-0 z-0 bg-zinc-900 overflow-hidden">
            {carouselImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Hero Background ${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  index === bgIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
                }`}
              />
            ))}
          </div>
          {/* Overlay for Left Side */}
          <div className="absolute inset-0 z-10 bg-black/60" />
          
          {/* Title Content */}
          <div className="relative z-20 space-y-6 max-w-2xl w-full text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-bold leading-tight text-white drop-shadow-md">
              Ingeniería de{" "}
              <span className="text-primary brightness-125">alto rendimiento</span>{" "}
              para minería
            </h1>
            <p className="text-lg lg:text-xl text-zinc-200 mt-6 leading-relaxed max-w-lg">
              Soluciones integrales que impulsan la productividad y seguridad de tus operaciones mineras en el norte de Chile.
            </p>
          </div>
        </div>

        {/* Right Side: 40% width - Background inherited, Content aligned */}
        <div className="w-full lg:w-[40%] bg-background flex flex-col justify-center px-6 py-12 lg:p-12 relative flex-shrink-0">
          
          <div className="max-w-xl w-full mx-auto space-y-10">
            
            {/* Lideres Badge with Pulsing Dot */}
            <div className="inline-flex items-center gap-3 bg-secondary backdrop-blur-sm rounded-full px-5 py-2.5 shadow-sm border border-border/50 transition-all cursor-default w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80 duration-1000"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-foreground tracking-wide">
                Líderes en ingeniería minera desde 2006
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button
                asChild
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 text-base shadow-lg shadow-primary/20"
              >
                <Link href="#servicios">
                  Explorar Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex-1 rounded-full h-14 text-base border-border hover:bg-secondary text-foreground transition-colors shadow-sm"
              >
                <Link href="#nosotros" className="flex items-center justify-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <Play className="h-3 w-3 text-primary ml-0.5" />
                  </span>
                  Conocer más
                </Link>
              </Button>
            </div>

            {/* Stats Cards slightly redesigned for Right-Side */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mt-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default border ${
                    stat.highlight
                      ? "bg-gradient-to-br from-primary to-red-900 text-white shadow-primary/30 border-primary/20"
                      : "bg-card text-foreground shadow-sm border-border hover:border-primary/30"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className={`text-4xl lg:text-5xl font-extrabold ${stat.highlight ? "text-white" : "text-primary"}`}>
                    <AnimatedCounter value={stat.value} delay={index * 200} />
                  </p>
                  <p className={`text-sm mt-2 font-medium ${stat.highlight ? "text-white/90" : "text-muted-foreground"}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Services Marquee across the bottom */}
      <div className="w-full py-4 bg-secondary/30 border-y border-border">
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {[...services, ...services].map((service, index) => (
              <div key={index} className="flex items-center shrink-0">
                <span className="w-2 h-2 bg-primary rounded-full mx-6 shadow-sm" />
                <span className="text-slate-600 font-medium whitespace-nowrap text-sm sm:text-base tracking-wide">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

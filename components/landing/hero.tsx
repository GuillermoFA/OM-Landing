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
    <section id="inicio" className="min-h-screen pt-16 lg:pt-[72px] relative flex flex-col bg-background overflow-x-hidden">
      
      {/* Background Split */}
      <div className="absolute inset-0 top-[64px] lg:top-[72px] z-0 flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-[60%] h-[55vh] lg:h-full overflow-hidden bg-zinc-900 border-b-2 lg:border-b-0 border-primary">
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
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="hidden lg:block w-[40%] h-full bg-background" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex-1 flex flex-col lg:flex-row w-full items-stretch">
        
        {/* Left Side: Title Container */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center py-12 sm:py-16 lg:py-12 lg:pr-16 min-h-[55vh] lg:min-h-full mt-4 lg:mt-0">
          <div className="space-y-6 max-w-2xl w-full text-left">
            <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-white drop-shadow-md break-words max-w-full">
              Ingeniería de{" "}
              <span className="text-primary brightness-125">alto rendimiento</span>{" "}
              para minería
            </h1>
            <p className="text-lg lg:text-xl text-zinc-200 mt-6 leading-relaxed max-w-lg">
              Soluciones integrales que impulsan la productividad y seguridad de tus operaciones mineras en el norte de Chile.
            </p>
          </div>
        </div>

        {/* Right Side: Cards and Stats */}
        <div className="w-full lg:w-[40%] bg-background lg:bg-transparent flex flex-col justify-center py-12 lg:py-12 lg:pl-10">
          <div className="max-w-xl w-full mx-auto lg:mx-0 space-y-10">
            
            {/* Lideres Badge with Pulsing Dot */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-secondary backdrop-blur-sm rounded-2xl sm:rounded-full px-4 py-2.5 shadow-sm border border-border/50 transition-all cursor-default w-fit max-w-full">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80 duration-1000"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-foreground tracking-wide whitespace-normal text-left max-w-full flex-1 line-clamp-2 md:line-clamp-none">
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
                className="flex-1 rounded-full h-14 text-base border-border hover:bg-secondary hover:text-black text-foreground transition-colors shadow-sm bg-background"
              >
                <Link href="#nosotros" className="flex items-center justify-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <Play className="h-3 w-3 text-primary ml-0.5" />
                  </span>
                  Conocer más
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 sm:gap-6 w-full mt-6 border-t border-border/50 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-start transition-all duration-300 hover:-translate-y-1 cursor-default group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-3xl lg:text-4xl font-extrabold text-primary group-hover:drop-shadow-sm transition-all">
                    <AnimatedCounter value={stat.value} delay={index * 200} />
                  </p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Services Marquee across the bottom */}
      <div className="w-full py-4 bg-zinc-950 relative z-20 shadow-2xl border-t border-zinc-800">
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {[...services, ...services].map((service, index) => (
              <div key={index} className="flex items-center shrink-0">
                <span className="w-2 h-2 bg-primary rounded-full mx-6 shadow-glow" />
                <span className="text-zinc-200 font-medium whitespace-nowrap text-base lg:text-sm tracking-wide">
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

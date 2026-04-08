"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Play, ChevronDown } from "lucide-react"
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
  return (
    <section id="inicio" className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
              <span className="text-sm text-muted-foreground">Líderes en ingeniería minera desde 2006</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Ingeniería de{" "}
              <span className="text-primary">alto rendimiento</span>{" "}
              para minería
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Soluciones integrales que impulsan la productividad y seguridad de tus operaciones mineras en el norte de Chile.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base"
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
                className="rounded-full px-8 h-14 text-base border-border hover:bg-secondary"
              >
                <Link href="#nosotros" className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Play className="h-4 w-4 text-primary ml-0.5" />
                  </span>
                  Conocer más
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    stat.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground shadow-sm border border-border"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
                    stat.highlight ? "text-primary-foreground" : "text-primary"
                  }`}>
                    <AnimatedCounter value={stat.value} delay={index * 200} />
                  </p>
                  <p className={`text-xs sm:text-sm mt-1 ${
                    stat.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Marquee */}
        <div className="py-8 border-t border-border">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Scroll</span>
            <ChevronDown className="h-4 w-4 text-primary animate-bounce" />
          </div>
          
          <div className="overflow-hidden">
            <div className="flex animate-marquee">
              {[...services, ...services].map((service, index) => (
                <div key={index} className="flex items-center shrink-0">
                  <span className="w-2 h-2 bg-primary rounded-full mx-4" />
                  <span className="text-muted-foreground whitespace-nowrap text-sm sm:text-base">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

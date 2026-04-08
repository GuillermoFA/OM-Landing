"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Leaf, Lightbulb, Users, Scale, Heart } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Calidad",
    description: "Soluciones de alta calidad y confiabilidad, cumpliendo con los más altos estándares de la industria.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidad",
    description: "Soluciones que minimicen el impacto ambiental y promuevan el desarrollo sostenible.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Búsqueda constante de tecnologías y enfoques que potencien la eficiencia energética.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo estrecho con clientes, socios y comunidades para desarrollar soluciones conjuntas.",
  },
  {
    icon: Scale,
    title: "Ética",
    description: "Operamos con integridad, transparencia y responsabilidad en todas nuestras acciones.",
  },
  {
    icon: Heart,
    title: "Inclusión",
    description: "Igualdad de oportunidades y un entorno donde todos puedan desarrollarse plenamente.",
  },
]

export function Values() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-rotate values
  useEffect(() => {
    if (!isVisible) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section
      id="valores"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Nuestros Valores</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Principios que{" "}
            <span className="text-primary">guían nuestro trabajo</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Values Grid - Interactive Icons */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {values.map((value, index) => {
                const Icon = value.icon
                const isActive = index === activeIndex
                const row = Math.floor(index / 3)
                const col = index % 3
                // Create staggered layout
                const offsetX = row === 1 ? "translate-x-8" : ""
                
                return (
                  <button
                    key={value.title}
                    onClick={() => setActiveIndex(index)}
                    className={`aspect-square rounded-2xl flex items-center justify-center transition-all duration-500 ${offsetX} ${
                      isActive
                        ? "bg-primary text-primary-foreground scale-110 shadow-xl shadow-primary/20"
                        : "bg-secondary text-primary hover:bg-secondary/80 hover:scale-105"
                    }`}
                    aria-label={value.title}
                  >
                    <Icon className="h-8 w-8 lg:h-10 lg:w-10" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Value Details */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  {(() => {
                    const Icon = values[activeIndex].icon
                    return <Icon className="h-7 w-7 text-primary" />
                  })()}
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Valor {String(activeIndex + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">{values[activeIndex].title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                {values[activeIndex].description}
              </p>
              
              {/* Dots Navigation */}
              <div className="flex items-center gap-2 mt-6">
                {values.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Ver valor ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Law 21.015 Badge */}
            <div className="mt-6 bg-white overflow-hidden border border-primary/20 rounded-xl shadow-md p-1 group">
              <div className="relative w-full h-32 md:h-40 bg-zinc-50 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/2274d21af7b92425e84d39bab2ae21b9-768x508.jpg" 
                  alt="Ley de Inclusión Laboral 21.015" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center mt-3 mb-2">
                <p className="text-sm font-medium text-foreground">
                  Empresa acogida a la <span className="text-primary font-bold">Ley N.º 21.015</span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Promovemos la inclusión laboral
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

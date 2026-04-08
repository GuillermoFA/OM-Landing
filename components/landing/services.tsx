"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Wrench, Circle, Sparkles, Flame, Zap, Truck, Anchor } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    number: "01",
    icon: Wrench,
    title: "Estructura y Montaje",
    description: "Fabricación e instalación de estructuras metálicas para proyectos mineros de alta complejidad.",
  },
  {
    number: "02",
    icon: Circle,
    title: "HDPE",
    description: "Instalación y mantención de tuberías de polietileno de alta densidad para sistemas de conducción.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Aseo Industrial",
    description: "Servicios de limpieza industrial especializada para plantas y equipos mineros.",
  },
  {
    number: "04",
    icon: Flame,
    title: "Soldadura",
    description: "Soldadura especializada con certificaciones para estructuras críticas y equipos de alta presión.",
  },
  {
    number: "05",
    icon: Zap,
    title: "Electricidad Industrial",
    description: "Instalaciones y mantención de sistemas eléctricos industriales para operaciones mineras.",
  },
  {
    number: "06",
    icon: Truck,
    title: "Transporte",
    description: "Logística y transporte de personal y equipos para operaciones en terreno.",
  },
  {
    number: "07",
    icon: Anchor,
    title: "Maniobras de Izaje de Carga",
    description: "Operaciones seguras y especializadas para el levantamiento y movimiento de cargas pesadas.",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-secondary/50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Servicios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Soluciones integrales{" "}
              <span className="text-primary">para la minería</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Ofrecemos servicios especializados con los más altos estándares de calidad y seguridad para satisfacer las necesidades de la industria minera.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  index === 0 ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                }`}>
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="text-5xl font-bold text-border/50">{service.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

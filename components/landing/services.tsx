"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Wrench, Circle, Sparkles, Flame, Zap, Truck, Anchor } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

const services = [
  {
    number: "01",
    icon: Wrench,
    title: "Estructura y Montaje",
    description: "Fabricación e instalación de estructuras metálicas para proyectos mineros de alta complejidad.",
    image: "/images/services/structure_montage.png"
  },
  {
    number: "02",
    icon: Circle,
    title: "HDPE",
    description: "Instalación y mantención de tuberías de polietileno de alta densidad para sistemas de conducción.",
    image: "/images/services/Hdpe.png"
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Aseo Industrial",
    description: "Servicios de limpieza industrial especializada para plantas y equipos mineros.",
    image: "/images/services/industrial_clear.png"
  },
  {
    number: "04",
    icon: Flame,
    title: "Soldadura",
    description: "Soldadura especializada con certificaciones para estructuras críticas y equipos de alta presión.",
    image: "/images/services/soldadura.png"
  },
  {
    number: "05",
    icon: Zap,
    title: "Electricidad Industrial",
    description: "Instalaciones y mantención de sistemas eléctricos industriales para operaciones mineras.",
    image: "/images/services/industrial_electricity.png"
  },
  {
    number: "06",
    icon: Truck,
    title: "Transporte",
    description: "Logística y transporte de personal y equipos para operaciones en terreno.",
    image: "/images/services/transport.png"
  },
  {
    number: "07",
    icon: Anchor,
    title: "Maniobras de Izaje de Carga",
    description: "Operaciones seguras y especializadas para el levantamiento y movimiento de cargas pesadas.",
    image: "/images/services/mechanical_industrial.png"
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
        <div className="grid md:grid-cols-2 gap-5 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-row items-stretch gap-4 sm:gap-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Texto y detalles a la izquierda */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      index === 0 ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}>
                      <service.icon className="h-5 w-5" />
                    </div>
                    <span className="text-4xl font-bold text-border/50">{service.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">{service.title}</h3>
                </div>
                <p className="text-base lg:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              {/* Imagen a la derecha con Modal */}
              <div className="w-28 h-28 sm:w-40 lg:w-48 shrink-0 flex items-center justify-center rounded-xl bg-primary/5 p-3 border border-primary/10 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full h-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-contain drop-shadow-lg" 
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl lg:max-w-4xl bg-transparent border-none shadow-none p-0 flex justify-center items-center [&>button]:bg-white [&>button]:text-black [&>button]:rounded-full [&>button]:p-2 [&>button]:opacity-70 hover:[&>button]:opacity-100">
                    <DialogTitle className="sr-only">Visualización de {service.title}</DialogTitle>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="max-w-full max-h-[85vh] object-contain drop-shadow-2xl bg-white/5 rounded-3xl p-4 backdrop-blur-sm" 
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

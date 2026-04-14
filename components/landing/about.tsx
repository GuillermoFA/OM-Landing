"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Eye, ArrowUpRight } from "lucide-react"

export function About() {
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

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-primary" />
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nuestra Historia</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Desde <span className="text-primary">2006</span> al servicio de la minería
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              Fundada por dos hermanos apasionados por el sector minero, <strong className="text-foreground font-semibold">OM LTDA</strong> se ha consolidado como líder en el mercado de <strong className="text-foreground font-semibold">ingeniería y servicios a la minería</strong> gracias a nuestra dedicación a la calidad, seguridad y compromiso con la excelencia.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Hemos superado desafíos y obtenido contratos con importantes empresas mineras en la región de Antofagasta, demostrando nuestra capacidad técnica en <strong className="text-foreground font-semibold">obras civiles</strong>, montaje estructural y mantenimiento industrial para enfrentar los retos únicos de la industria minera.
            </p>

            {/* Responsabilidad Card */}
            <div
              className={`bg-card rounded-2xl p-6 shadow-sm border border-border transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Responsabilidad Empresarial</h3>
                  <p className="text-sm text-muted-foreground">
                    Operaciones socialmente responsables, respetuosas con el medio ambiente y éticamente sólidas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Mission & Vision */}
          <div className="space-y-6">
            {/* Misión */}
            <div
              className={`bg-primary text-primary-foreground rounded-2xl p-6 lg:p-8 transition-all duration-500 delay-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/40 cursor-default ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Misión</h3>
              </div>
              <p className="text-base text-primary-foreground/90 leading-relaxed">
                Brindar servicios de alta calidad y valor agregado a la industria minera, a través de soluciones innovadoras y un enfoque integral. Satisfaciendo las necesidades de nuestros clientes, priorizando la seguridad, eficiencia y respeto por el medio ambiente.
              </p>
            </div>

            {/* Visión */}
            <div
              className={`bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border transition-all duration-500 delay-500 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 cursor-default ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Visión</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ser líderes en servicios integrales para la industria minera, reconocidos por nuestra calidad, excelencia, confiabilidad y compromiso con la seguridad, promoviendo la reducción de emisiones y el desarrollo sostenible.
              </p>
              {/* Decorative circle */}
              <div className="flex justify-end mt-4">
                <div className="w-10 h-10 rounded-full border-2 border-border" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

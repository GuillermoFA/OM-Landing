"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, ShieldCheck } from "lucide-react"

const companies = [
  {
    name: "FCAB",
    fullName: "Ferrocarril de Antofagasta a Bolivia",
    logo: "/images/company/fcab.png",
  },
  {
    name: "Novandino",
    fullName: "Novandino",
    logo: "/images/company/novandino.png",
  },
]

export function Companies() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="empresas"
      ref={sectionRef}
      className="py-16 lg:py-20 bg-background relative overflow-hidden border-y border-border/40"
    >
      {/* Subtle Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-primary" />
            <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              Respaldan Nuestra Trayectoria
            </span>
            <div className="w-10 h-px bg-primary" />
          </div>

          {/* Main Title */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed sm:leading-snug text-foreground max-w-3xl mx-auto mb-10">
            En <span className="text-primary">OM LTDA.</span> apoyamos operaciones industriales y mineras con{" "}
            <span className="text-primary">servicios seguros, oportunos y de alta calidad</span>.
          </h2>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto my-8">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className={`group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 flex items-center justify-center min-h-[130px] sm:min-h-[150px] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <img
                  src={company.logo}
                  alt={`Logo de ${company.fullName}`}
                  className="max-h-16 sm:max-h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-sm"
                />
              </div>
            ))}
          </div>

          {/* Subtitle / Footer Message */}
          <div
            className={`mt-10 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-foreground font-semibold text-sm sm:text-base transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <ShieldCheck className="w-5 h-5 shrink-0 text-primary" />
            <span>
              <span className="text-primary font-bold">Experiencia, seguridad y compromiso</span> en cada operación
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

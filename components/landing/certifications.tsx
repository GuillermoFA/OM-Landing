"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, ExternalLink } from "lucide-react"

const certifications = [
  {
    image: "/images/sicep.png",
    badge: "VERIFICADO",
    title: "Certificado SICEP",
    description: "Sistema de Certificación de Competencias",
  },
  {
    image: "/images/antofagasta_industrial.jpg",
    badge: "VERIFICADO",
    title: "Asociación de Industriales de Antofagasta",
    description: "Miembro activo desde 2006",
  },
]

export function Certifications() {
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
      id="certificados"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-secondary/50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Certificaciones</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Respaldo que{" "}
            <span className="text-primary">genera confianza</span>
          </h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {/* Certifications Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {certifications.map((cert, index) => {
              const Icon = (cert as any).icon
              return (
                <div
                  key={cert.title}
                  className={`bg-card rounded-2xl p-6 shadow-sm border border-border transition-all duration-700 hover:shadow-lg ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className={`shrink-0 flex items-center justify-center overflow-hidden mx-auto sm:mx-0 ${cert.image ? 'w-full sm:w-40 h-28 sm:h-28 bg-white rounded-xl border-2 border-primary/20 p-2' : 'w-14 h-14 bg-primary rounded-xl'}`}>
                      {cert.image ? (
                        <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                      ) : (
                        Icon && <Icon className="h-7 w-7 text-primary-foreground" />
                      )}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">{cert.badge}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                      <p className="text-base lg:text-sm text-muted-foreground mt-1">{cert.description}</p>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="hidden sm:flex justify-end mt-2">
                    <div className="w-16 h-16 bg-primary/5 rounded-full -mr-4 -mb-4" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Sustainability Block - Redesigned */}
          <div 
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Visual Preview Left */}
            <div className="w-full lg:w-[45%] flex justify-center">
              <a 
                href="https://docs.google.com/presentation/d/1xAoCPLRZV-F8upiTdixWs-uUcOUINyle/edit?slide=id.p1#slide=id.p1"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full group cursor-pointer block"
              >
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl group-hover:bg-primary/30 transition-all opacity-50" />
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border transform transition-all duration-700 group-hover:-translate-y-2 group-hover:rotate-1 bg-white">
                  <img 
                    src="/images/report.png" 
                    alt="Reporte de Sostenibilidad Oyarzun Michea" 
                    className="w-full h-auto block"
                  />
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Hover indicator */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500">
                      <ExternalLink className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Content Card Right */}
            <div className="w-full lg:w-[55%]">
              <div className="bg-card rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-border relative overflow-hidden h-full flex flex-col justify-center">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16" />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-8 text-center sm:text-left">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                      <img 
                        src="/images/renovable-logo.PNG" 
                        alt="OM Sostenible" 
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-1">Sustentabilidad</h3>
                      <p className="text-primary font-semibold text-lg tracking-wide uppercase">Compromiso con el futuro</p>
                    </div>
                  </div>

                  <div className="space-y-6 mb-10 text-center sm:text-left">
                    <h4 className="text-xl lg:text-2xl font-bold text-foreground leading-tight">
                      Visualice nuestro impacto y visión estratégica
                    </h4>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto sm:mx-0">
                      En Oyarzun Michea Ltda, integramos la responsabilidad ambiental y social en el corazón de nuestras operaciones mineras. 
                      Descubra cómo estamos liderando el cambio hacia una industria más consciente y eficiente.
                    </p>
                  </div>

                  <div className="flex justify-center sm:justify-start">
                    <a 
                      href="https://docs.google.com/presentation/d/1xAoCPLRZV-F8upiTdixWs-uUcOUINyle/edit?slide=id.p1#slide=id.p1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary/95 transition-all hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] hover:-translate-y-1 active:scale-95 overflow-hidden"
                    >
                      <span className="relative z-10">Ver Reporte Detallado</span>
                      <ExternalLink className="h-6 w-6 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

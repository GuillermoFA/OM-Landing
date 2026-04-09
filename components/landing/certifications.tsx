"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Building2, CheckCircle, Sun, Recycle, Leaf, ExternalLink } from "lucide-react"

const GoogleDriveIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 87.3 78" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M29.07 0L0 50.53L29.07 101.07H87.21L58.14 50.53L29.07 0Z" fill="#1ea362"/>
    <path d="M29.07 0L58.14 0L87.21 50.53L58.14 50.53L29.07 0Z" fill="#4688f4"/>
    <path d="M87.21 50.53L58.14 101.07H0L29.07 50.53H87.21Z" fill="#ffba00"/>
  </svg>
)

const certifications = [
  {
    image: "/images/sicep.png",
    badge: "VERIFICADO",
    title: "Certificado SICEP",
    description: "Sistema de Certificación de Competencias",
  },
  {
    icon: Building2,
    badge: "VERIFICADO",
    title: "Asociación de Industriales de Antofagasta",
    description: "Miembro activo desde 2006",
  },
]

const sustainabilityStats = [
  {
    icon: Sun,
    value: "100%",
    label: "Energía renovable",
    title: "Energía Solar",
    description: "Paneles solares en nuestras instalaciones",
  },
  {
    icon: Recycle,
    value: "85%",
    label: "Residuos reciclados",
    title: "Reciclaje",
    description: "Programa integral de gestión de residuos",
  },
  {
    icon: Leaf,
    value: "0",
    label: "Huella de carbono",
    title: "Punto Energía Limpia",
    description: "Certificación de uso de energías renovables",
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Certifications Cards */}
          <div className="space-y-4">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div
                  key={cert.title}
                  className={`bg-card rounded-2xl p-6 shadow-sm border border-border transition-all duration-700 hover:shadow-lg ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className={`shrink-0 flex items-center justify-center overflow-hidden mx-auto sm:mx-0 ${cert.image ? 'w-full sm:w-40 h-28 sm:h-28 bg-white rounded-xl border-2 border-primary/20 p-2' : 'w-14 h-14 bg-primary rounded-xl'}`}>
                      {cert.image ? (
                        <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                      ) : (
                        cert.icon && <cert.icon className="h-7 w-7 text-primary-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">{cert.badge}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                      <p className="text-base lg:text-sm text-muted-foreground mt-1">{cert.description}</p>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="flex justify-end mt-2">
                    <div className="w-16 h-16 bg-primary/5 rounded-full -mr-4 -mb-4" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Sustainability Card */}
          <div
            className={`bg-card rounded-2xl p-6 shadow-sm border border-border transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <img src="/images/renovable-logo.PNG" alt="Logo de OM ltda" className="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">Sustentabilidad</h3>
                <span className="text-sm text-muted-foreground font-medium">Compromiso Ambiental</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sustainabilityStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.title}
                    className={`bg-secondary/50 rounded-xl p-4 transition-all duration-500 hover:bg-secondary ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <p className="text-3xl lg:text-4xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-base lg:text-sm font-semibold text-foreground">{stat.title}</p>
                      <p className="text-base lg:text-xs text-muted-foreground mt-1">{stat.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* External Google Drive Link */}
            <div className="mt-8 pt-6 border-t border-border flex justify-center">
              <a 
                href="https://docs.google.com/presentation/d/1kH1cz2iqgprbvPujb6ueeyiWjIh-Cmuj/edit?usp=sharing&ouid=103395888347565057644&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full overflow-hidden rounded-xl bg-primary/5 border border-primary/20 p-4 transition-all hover:bg-primary/10 hover:border-primary/40 flex flex-col sm:flex-row items-center sm:items-center gap-4 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-16 h-16 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform p-3 sm:p-2 border border-border">
                  <GoogleDriveIcon className="w-full h-full" />
                </div>
                <div className="text-center sm:text-left flex-1 min-w-0">
                  <h4 className="font-bold text-base lg:text-lg text-foreground flex items-center justify-center sm:justify-start gap-2 break-words">
                    Reporte Sostenibilidad Oyarzun
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </h4>
                  <p className="text-base lg:text-sm text-muted-foreground mt-1">Haz clic para ver el reporte en Google Drive</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

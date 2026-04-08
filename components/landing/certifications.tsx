"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Building2, CheckCircle, Sun, Recycle, Leaf, FileText, Download } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const certifications = [
  {
    image: "/images/sicep.jpg",
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
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 flex items-center justify-center overflow-hidden ${cert.image ? 'w-24 h-20 bg-white rounded-xl border-2 border-primary/20 p-2' : 'w-14 h-14 bg-primary rounded-xl'}`}>
                      {cert.image ? (
                        <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                      ) : (
                        cert.icon && <cert.icon className="h-7 w-7 text-primary-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{cert.badge}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
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
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Compromiso Ambiental</span>
                <h3 className="text-xl font-bold text-foreground">Sustentabilidad</h3>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
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
                    <Icon className="h-6 w-6 text-primary mb-2" />
                    <p className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-sm font-medium text-foreground">{stat.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* PPTX/PDF Modal Card for Sustainability Report */}
            <div className="mt-8 pt-6 border-t border-border flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group relative w-full overflow-hidden rounded-xl bg-primary/5 border border-primary/20 p-4 transition-all hover:bg-primary/10 hover:border-primary/40 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-bold text-foreground">Reporte Sostenibilidad Oyarzun</h4>
                      <p className="text-xs text-muted-foreground mt-1">Haz clic para ver y descargar el reporte</p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] md:max-w-[600px] bg-background">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-primary" />
                      Reporte de Sostenibilidad Oyarzun
                    </DialogTitle>
                    <DialogDescription>
                      Documento estratégico sobre nuestras prácticas y compromisos ambientales.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="aspect-video bg-secondary/50 rounded-lg flex flex-col items-center justify-center p-6 border-2 border-dashed border-border text-center relative overflow-hidden">
                      {/* Generando un fondo semi-transparente como si fuera una portada */}
                      <div className="absolute inset-0 bg-primary/5"></div>
                      <FileText className="w-16 h-16 text-primary mb-4 relative z-10" />
                      <h3 className="text-xl font-bold relative z-10">Reporte Final</h3>
                      <p className="text-sm text-muted-foreground mt-2 max-w-sm relative z-10">
                        Descubre en detalle todas las políticas que estamos adoptando para reducir la huella de carbono y potenciar la energía limpia.
                      </p>
                    </div>
                    <div className="flex justify-end gap-3">
                      <a 
                        href="/Reporte SostenibilidadOyarzun final.pptx" 
                        download
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Descargar Reporte
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

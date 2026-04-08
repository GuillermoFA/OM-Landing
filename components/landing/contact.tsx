"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Chabunco 10017, Antofagasta",
    href: "https://maps.google.com/?q=Chabunco+10017+Antofagasta+Chile",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+56 55 2949303",
    href: "tel:+56552949303",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "Gerencia@omingenieria.cl",
    href: "mailto:Gerencia@omingenieria.cl",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+56 9 4281 5213",
    href: "https://wa.me/56942815213",
  },
]

export function Contact() {
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
      id="contacto"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-primary-foreground/50" />
              <span className="text-primary-foreground/80 font-medium text-sm uppercase tracking-wider">Contacto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Hablemos de{" "}
              <span className="text-primary-foreground/80">tu proyecto</span>
            </h2>
            <p className="text-primary-foreground/80 mt-4 max-w-md leading-relaxed">
              Estamos listos para ayudarte con tus necesidades en ingeniería y servicios mineros. Un especialista te atenderá a la brevedad.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-xl p-4 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-primary-foreground/50 group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <p className="text-xs text-primary-foreground/60">{info.label}</p>
                    <p className="text-sm font-medium text-primary-foreground mt-1">{info.value}</p>
                  </a>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <Button
              asChild
              variant="outline"
              className="mt-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full px-6"
            >
              <a href="https://wa.me/56942815213" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Escríbenos por WhatsApp
                <Send className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Right Content - Map */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-2xl">
              {/* Map Header */}
              <a
                href="https://maps.google.com/?q=Chabunco+10017+Antofagasta+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-card hover:bg-secondary transition-colors text-foreground"
              >
                <span className="text-sm">Abrir en Maps</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              
              {/* Map Embed */}
              <div className="relative aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.189894671395!2d-70.40454092467537!3d-23.636889562862984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a2b59e1ff7d30f%3A0x2e8c0c1b4d1f0c0a!2sChabunco%2010017%2C%20Antofagasta%2C%20Chile!5e0!3m2!1ses!2scl!4v1704067200000!5m2!1ses!2scl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación OM Ltda"
                  className="absolute inset-0"
                />
              </div>
              
              {/* Map Footer */}
              <div className="p-4 bg-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">OM Ltda</p>
                    <p className="text-sm text-muted-foreground">Chabunco 10017, Antofagasta</p>
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

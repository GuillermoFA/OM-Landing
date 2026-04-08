"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Plus, Minus, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Qué tipos de instalaciones industriales pueden beneficiarse de los servicios?",
    answer: "Los servicios de limpieza industrial son útiles para una amplia gama de instalaciones, como fábricas, almacenes, plantas de producción, instalaciones de procesamiento y más.",
  },
  {
    question: "¿Cómo garantizan la seguridad durante las operaciones?",
    answer: "Priorizamos la seguridad implementando evaluaciones de riesgos exhaustivas, utilizando equipos de protección personal adecuados y siguiendo procedimientos operativos seguros en todo momento.",
  },
  {
    question: "¿Cuáles son las aplicaciones del HDPE en minería?",
    answer: "Los productos de HDPE se utilizan en una variedad de aplicaciones, como tanques de almacenamiento, tuberías, revestimientos químicos, contenedores y más, debido a su resistencia química y durabilidad.",
  },
  {
    question: "¿Qué certificaciones respaldan sus servicios?",
    answer: "Contamos con certificación SICEP (Sistema de Certificación de Competencias) y somos miembros activos de la Asociación de Industriales de Antofagasta desde 2006.",
  },
  {
    question: "¿Cuál es su área de cobertura?",
    answer: "Cubrimos principalmente la región de Antofagasta y sus alrededores, donde se concentra la mayor actividad minera del país. Podemos desplazar equipos a faenas remotas según las necesidades específicas de cada proyecto.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(4)
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
      id="faq"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Preguntas{" "}
              <span className="text-primary">Frecuentes</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md">
              Respuestas a las consultas más comunes sobre nuestros servicios de ingeniería para minería.
            </p>

            {/* Help Card */}
            <div className="mt-8 bg-card rounded-2xl p-6 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">¿Más preguntas?</h3>
                  <p className="text-sm text-muted-foreground mb-3">Estamos para ayudarte</p>
                  <Link
                    href="#contacto"
                    className="text-primary font-medium text-sm hover:underline"
                  >
                    Contáctanos directamente
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Accordion */}
          <div
            className={`space-y-3 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-primary bg-card shadow-lg"
                      : "border-border bg-card/50 hover:bg-card"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-medium ${isOpen ? "text-primary" : "text-muted-foreground"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`font-medium ${isOpen ? "text-foreground" : "text-muted-foreground"}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-48" : "max-h-0"
                    }`}
                  >
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed pl-14">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

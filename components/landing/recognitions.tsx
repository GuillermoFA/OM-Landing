"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Award, Star } from "lucide-react"

const recognitions = [
  {
    image: "/images/recognizme/Imagen4.jpg",
    title: "Reconocimiento a la Excelencia y Seguridad",
    year: "Fortalecimiento de Gestión en Sostenibilidad"
  }
]

export function Recognitions() {
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
      id="reconocimientos"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Orgullo y Trayectoria</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Nuestros <span className="text-primary">Reconocimientos</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            La calidad de nuestro servicio es validada por los líderes de la industria.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {recognitions.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {/* Image side */}
              <div className="w-full lg:w-[55%] relative">
                <div className="relative group">
                  {/* Decorative Frame */}
                  <div className="absolute -inset-4 border border-primary/20 rounded-[2.5rem] pointer-events-none group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Main Image */}
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-border bg-white transform transition-all duration-700 group-hover:-translate-y-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-primary/20">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-primary uppercase tracking-tighter">Distinción</span>
                        <span className="block text-lg font-bold text-foreground leading-none">{item.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className="w-full lg:w-[45%] space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm">
                    <Star className="h-4 w-4 fill-current" />
                    <span>CALIDAD GARANTIZADA</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-6">
                  <div className="flex flex-col gap-2 p-6 bg-primary/5 rounded-3xl border border-primary/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="h-6 w-6 text-primary" />
                      <span className="font-bold text-foreground">Excelencia Operacional</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Nuestro equipo es capacitado constantemente para mantener estos niveles de desempeño corporativo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Valores", href: "#valores" },
  { name: "Certificados", href: "#certificados" },
  { name: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = navLinks.map(link => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border py-2 lg:py-1 transition-all duration-300"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 lg:h-16">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 lg:w-16 lg:h-16 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/images/LOGO HIGH DEFINITION.png" 
                alt="OM LTDA Logo" 
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
              />
              <img 
                src="/images/renovable-logo.PNG" 
                alt="OM Renovable Logo" 
                className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-sm lg:text-lg text-foreground">OM LTDA</p>
              <p className="text-xs text-muted-foreground">Ingeniería y Servicios</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "")
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Contact and CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://www.instagram.com/om_ltda/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-primary/10 rounded-full p-2 text-muted-foreground hover:text-primary transition-colors"
              title="Síguenos en Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <Link href="#contacto">
                Contáctanos
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 bg-card rounded-xl p-4 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-4 rounded-lg text-base md:text-lg font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 text-base">
              <Link href="#contacto" onClick={() => setIsOpen(false)}>
                Contáctanos
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

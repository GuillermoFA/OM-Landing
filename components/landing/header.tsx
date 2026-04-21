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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Custom Smooth Scroll Function
  const smoothScrollTo = (targetId: string) => {
    const target = document.getElementById(targetId)
    if (!target) return

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80 // Adjust for header
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = 1200
    let startTimestamp: number | null = null

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      
      // Easing: easeInOutQuint
      const easedProgress = progress < 0.5 
        ? 16 * progress * progress * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 5) / 2

      window.scrollTo(0, startPosition + distance * easedProgress)
      
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const id = href.replace("#", "")
      smoothScrollTo(id)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Background change logic
      setIsScrolled(currentScrollY > 50)
      
      // Visibility logic (Smart Header)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false) // Scrolling down
      } else {
        setIsVisible(true) // Scrolling up
      }
      setLastScrollY(currentScrollY)
      
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

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border py-2 shadow-sm" 
          : "bg-transparent border-b border-white/10 py-4 lg:py-3"
      } ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 lg:h-16">
          {/* Logo */}
          <Link 
            href="#inicio" 
            onClick={(e) => handleLinkClick(e, "#inicio")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 lg:w-16 lg:h-16 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img 
                src="images/logo_OM-removebg-preview.png" 
                alt="OM LTDA Logo" 
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 ${!isScrolled ? "brightness-0 invert" : ""}`}
              />
            </div>
            <div className="hidden sm:block">
              <p className={`font-bold text-sm lg:text-lg transition-colors ${isScrolled ? "text-foreground" : "text-white drop-shadow-md"}`}>OM LTDA</p>
              <p className={`text-xs transition-colors ${isScrolled ? "text-muted-foreground" : "text-zinc-300 drop-shadow-sm"}`}>Ingeniería y Servicios</p>
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
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-primary font-semibold"
                      : isScrolled
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-zinc-200 hover:text-white drop-shadow-sm"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isScrolled ? "bg-primary" : "bg-primary shadow-[0_0_8px_rgba(234,88,12,0.8)]"}`} />
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
              className={`bg-transparent hover:bg-primary/10 rounded-full p-2 transition-colors ${
                isScrolled ? "text-muted-foreground hover:text-primary" : "text-zinc-200 hover:text-white"
              }`}
              title="Síguenos en Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-lg shadow-primary/20">
              <Link href="#contacto" onClick={(e) => handleLinkClick(e, "#contacto")}>
                Contáctanos
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
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
          <nav className="flex flex-col gap-1 bg-card rounded-xl p-4 shadow-lg border border-border/50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
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
              <Link href="#contacto" onClick={(e) => handleLinkClick(e, "#contacto")}>
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

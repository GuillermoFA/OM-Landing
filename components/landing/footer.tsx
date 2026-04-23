"use client"

import Link from "next/link"
import { Instagram, Mail, MessageCircle, ArrowUpRight, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Valores", href: "#valores" },
  { name: "Certificados", href: "#certificados" },
  { name: "Contacto", href: "#contacto" },
]

const services = [
  "Estructura y Montaje",
  "Obras Civiles",
  "HDPE",
  "Aseo Industrial",
  "Soldadura",
  "Electricidad Industrial",
  "Transporte",
  "Maniobras de Izaje",
]

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/om_ltda/", label: "Instagram" },
  { icon: Mail, href: "mailto:Gerencia@omingenieria.cl", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/56942815213", label: "WhatsApp" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="#inicio" className="flex items-center gap-3 mb-4">
                <img src="/images/LOGO HIGH DEFINITION.png" alt="Logo de OM ltda" className="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
                <div>
                  <p className="font-bold text-foreground">OM LTDA</p>
                  <p className="text-xs text-muted-foreground">Ingeniería y Servicios</p>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                Expertos en ingeniería y servicios a la minería en Antofagasta. Soluciones integrales en obras civiles, montaje y mantenimiento industrial desde 2006.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Navegación</h3>
              <ul className="space-y-3">
                {navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Servicios</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="#servicios"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Contacto</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Chabunco 10017</p>
                <p>Antofagasta, Chile</p>
                <p className="pt-2">+56 55 2949303</p>
                <p>Gerencia@omingenieria.cl</p>
              </div>
              <Button
                asChild
                className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm"
              >
                <a href="mailto:Gerencia@omingenieria.cl">
                  Solicitar cotización
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} <span className="font-medium text-foreground">OM Ingeniería</span>. Todos los derechos reservados.
          </p>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            Elaborado por Guillermo Fuentes 
            <a 
              href="https://cl.linkedin.com/in/guillermofuentesavila" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary text-blue-600 transition-colors hover:-translate-y-0.5 transform duration-300"
              title="LinkedIn Desarrollador"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

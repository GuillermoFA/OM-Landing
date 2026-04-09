import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Services } from "@/components/landing/services"
import { Values } from "@/components/landing/values"
import { Certifications } from "@/components/landing/certifications"
import { FAQ } from "@/components/landing/faq"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full flex flex-col">
      {/* Datos Estructurados JSON-LD SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EngineeringBusiness",
            "name": "OM LTDA",
            "image": "https://omingenieria.cl/images/logo_OM-removebg-preview.png",
            "description": "Expertos en soluciones integrales de ingeniería para la industria minera desde 2006 en Antofagasta, Chile.",
            "url": "https://omingenieria.cl",
            "telephone": "+56552949303",
            "email": "Gerencia@omingenieria.cl",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Chabunco 10017",
              "addressLocality": "Antofagasta",
              "addressRegion": "Antofagasta",
              "addressCountry": "CL"
            },
            "sameAs": [
              "https://www.instagram.com/om_ltda/",
              "https://cl.linkedin.com/in/guillermofuentesavila"
            ]
          })
        }}
      />
      <Header />
      <Hero />
      <About />
      <Services />
      <Values />
      <Certifications />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

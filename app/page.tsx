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
    <main className="min-h-screen">
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

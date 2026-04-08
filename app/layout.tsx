import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OM LTDA - Ingeniería y Servicios Mineros en Antofagasta",
  description: "OM LTDA: Expertos en soluciones integrales de ingeniería para la industria minera desde 2006. Estructura y montaje, HDPE, aseo industrial, soldadura técnica y mantenimiento.",
  keywords: [
    "OM LTDA", "Ingeniería Antofagasta", "Servicios mineros Chile", "Montaje estructural", 
    "HDPE minería", "Aseo industrial Antofagasta", "Soldadura especializada",
    "Mantenimiento minero", "Electricidad industrial", "Prevención de riesgos mineros"
  ],
  authors: [{ name: "Guillermo Fuentes" }, { name: "OM LTDA" }],
  creator: "OM LTDA",
  publisher: "OM LTDA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://oyarzunmichea.cl", // Sustituye por el dominio oficial real
  },
  openGraph: {
    title: "OM LTDA - Ingeniería de alto rendimiento para minería",
    description: "Soluciones integrales que impulsan la productividad y seguridad de tus operaciones mineras en el norte de Chile.",
    url: "https://oyarzunmichea.cl", // Sustituye por el dominio real
    siteName: "OM Ingeniería y Servicios",
    images: [
      {
        url: "/images/first-page/image-80.png",
        width: 1200,
        height: 630,
        alt: "Equipo y vehículos de OM LTDA prestando servicios mineros",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OM LTDA - Ingeniería y Servicios Especializados",
    description: "Soluciones integrales que impulsan la productividad y seguridad en la gran minería.",
    images: ["/images/first-page/image-80.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/images/logo_OM-removebg-preview.png",
        type: "image/png",
      }
    ],
    apple: "/images/logo_OM-removebg-preview.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

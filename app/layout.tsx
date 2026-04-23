import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { ScrollToTop } from '@/components/landing/scroll-to-top'
import { WhatsAppButton } from '@/components/landing/whatsapp-button'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://oyarzunmichea.cl"),
  title: "OM LTDA | Ingeniería y Servicios a la Minería",
  description: "OM LTDA: Expertos en ingeniería y servicios integrales para la minería desde 2006. Soluciones en estructura y montaje, trabajos civiles, HDPE, aseo industrial, soldadura, electricidad industrial, transporte y maniobras de izaje.",
  keywords: [
    "OM LTDA", "OM", "Ingeniería", "ingeniería y servicios", "servicios a la minería", "Ingeniería Antofagasta", 
    "Servicios mineros Chile", "trabajos civiles", "obras civiles", "estructura y montaje", "Montaje estructural", 
    "HDPE", "HDPE minería", "aseo industrial", "Aseo industrial Antofagasta", "soldadura", "Soldadura especializada",
    "Mantenimiento minero", "electricidad industrial", "transporte", "maniobras de izaje de carga", "Prevención de riesgos mineros"
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
    canonical: "https://oyarzunmichea.cl",
  },
  openGraph: {
    title: "OM LTDA - Ingeniería de alto rendimiento para minería",
    description: "Soluciones integrales que impulsan la productividad y seguridad de tus operaciones mineras en el norte de Chile.",
    url: "https://oyarzunmichea.cl",
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
    <html lang="es" className="overflow-x-hidden max-w-[100vw]">
      <body className="font-sans antialiased overflow-x-hidden max-w-[100vw]">
        {children}
        <WhatsAppButton />
        <ScrollToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
      </body>
    </html>
  )
}

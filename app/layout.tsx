import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'OM - Servicios e Ingenieria',
  description: 'OM LTDA: Soluciones mineras e ingeniería en Antofagasta. Limpieza y mantenimiento industrial de calidad... ¡Descubre más y contáctanos!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logo_OM-removebg-preview.png',
        type: 'image/png',
      }
    ],
    apple: '/images/logo_OM-removebg-preview.png',
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

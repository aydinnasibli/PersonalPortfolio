import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Aydin Nasibli — Full Stack Web Developer',
  description:
    'Full-stack web developer building unhurried, considered software — from schema to cursor.',
  openGraph: {
    title: 'Aydin Nasibli — Full Stack Web Developer',
    description:
      'Full-stack web developer building unhurried, considered software — from schema to cursor.',
    url: 'https://aydinnasibli.com',
    siteName: 'Aydin Nasibli',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aydin Nasibli — Full Stack Web Developer',
    description:
      'Full-stack web developer building unhurried, considered software — from schema to cursor.',
    creator: '@aydinnasibli',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}

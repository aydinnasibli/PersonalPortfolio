import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import { SITE_URL } from '@/lib/data'
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

const TITLE = 'Aydin Nasibli — Full Stack Web Developer'
const DESCRIPTION =
  'Full-stack web developer building unhurried, considered software — from schema to cursor. Selected work across education platforms, AI tooling and editorial interfaces.'

export const metadata: Metadata = {
  // Required for og:image and other metadata URLs to resolve absolutely.
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s — Aydin Nasibli',
  },
  description: DESCRIPTION,
  applicationName: 'Aydin Nasibli',
  authors: [{ name: 'Aydin Nasibli', url: SITE_URL }],
  creator: 'Aydin Nasibli',
  keywords: [
    'full stack developer',
    'Next.js developer',
    'React developer',
    'TypeScript',
    'web developer Istanbul',
    'Aydin Nasibli',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Aydin Nasibli',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@aydinnasibli',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f1ec' },
    { media: '(prefers-color-scheme: dark)', color: '#f4f1ec' },
  ],
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      // The inline script below strips `no-js` before React hydrates, so the
      // server and client class lists deliberately differ on this element.
      suppressHydrationWarning
      className={`no-js ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        {/* Runs before first paint, so scripted visitors never see the
            unrevealed state — while visitors without JS keep the content. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

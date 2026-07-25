import CanvasBg from '@/components/ui/CanvasBg'
import ClientInit from '@/components/ui/ClientInit'
import Cursor from '@/components/ui/Cursor'
import ScrollDirector from '@/components/ui/ScrollDirector'
import TopMeta from '@/components/ui/TopMeta'
import Hero from '@/components/hero/Hero'
import IntroSection from '@/components/intro/IntroSection'
import ProjectShowcase from '@/components/projects/ProjectShowcase'
import TechStack from '@/components/tech/TechStack'
import ProcessStrip from '@/components/process/ProcessStrip'
import Footer from '@/components/footer/Footer'
import { EMAIL, PROJECTS, SITE_URL } from '@/lib/data'

/** Person + portfolio graph, so search engines can attribute the work. */
function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aydin Nasibli',
    url: SITE_URL,
    email: `mailto:${EMAIL}`,
    jobTitle: 'Full Stack Web Developer',
    address: { '@type': 'PostalAddress', addressLocality: 'Istanbul', addressCountry: 'TR' },
    knowsAbout: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB'],
    sameAs: ['https://github.com/aydinnasibli', 'https://www.linkedin.com/in/aydinnasibli'],
    subjectOf: PROJECTS.map((p) => ({
      '@type': 'CreativeWork',
      name: p.title,
      description: p.subtitle,
      url: p.live,
      dateCreated: p.year,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <a className="skip-link" href="#work">
        Skip to work
      </a>

      <CanvasBg />
      <Cursor />
      <ScrollDirector />
      <ClientInit />
      <TopMeta />

      <main id="top">
        <Hero />
        <IntroSection />
        <ProjectShowcase />
        <TechStack />
        <ProcessStrip />
      </main>

      <Footer />
    </>
  )
}

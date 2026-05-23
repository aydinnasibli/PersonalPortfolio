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

export default function Home() {
  return (
    <>
      <CanvasBg />
      <Cursor />
      <ScrollDirector />
      <ClientInit />
      <TopMeta />

      <main>
        <Hero />
        <IntroSection />
        <ProjectShowcase />
        <TechStack />
        <ProcessStrip />
        <Footer />
      </main>
    </>
  )
}

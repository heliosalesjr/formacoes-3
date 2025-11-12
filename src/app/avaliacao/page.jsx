import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import AvaliacaoContentSection from "@/components/AvaliacaoContentSection"

export default function Modulo4() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Avaliação"
                subtitle="Ferramentas Avaliativas que podem ajudar o desenvolvimento de projetos"
                />
        
        <AvaliacaoContentSection />
      </main>
      <Footer />
    </div>
  )
}


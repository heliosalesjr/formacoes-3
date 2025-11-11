import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import MonitoramentoContentSection from "@/components/MonitoramentoContentSection"

export default function Monitoramento() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Monitoramento"
                subtitle="Acompanhando a execução das atividades e analisando o quanto os objetivos vêm sendo atingidos."
                />
       
        <MonitoramentoContentSection />
      </main>
      <Footer />
    </div>
  )
}


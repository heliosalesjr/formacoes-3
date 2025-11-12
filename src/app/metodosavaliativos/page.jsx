import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import MAContentSection from "@/components/MAContentSection"

export default function Smart() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Métodos Avaliativos"
                subtitle="Tipos de avaliação presentes na rotina escolar e suas formas de aplicação em sala de aula."
                />
        <MAContentSection />
      </main>
      <Footer />
    </div>
  )
}


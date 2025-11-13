

import FadeInWhenVisible from "./FadeInWhenVisible"
import EncerramentoIntro from "./content/EncerramentoIntro"
import EncerramentoNesseModuloEu from "./content/EncerramentoNesseModuloEu"
import EncerramentoQuiz from "./content/EncerramentoQuiz"

export default function EncerramentoContentSection() {
    return (
      <section id="content" className="w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8 mb-16">

            
             
            
            <FadeInWhenVisible>
                <EncerramentoIntro />
            </FadeInWhenVisible>
          
            <FadeInWhenVisible>
              <EncerramentoNesseModuloEu />
            </FadeInWhenVisible>
     
            <FadeInWhenVisible>
              <EncerramentoQuiz />
            </FadeInWhenVisible>
            
          </div>
        </div>
      </section>
    )
  }
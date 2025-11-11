"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'

const PageApresentacao1 = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('apresentacao-1');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="apresentacao-1" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-8">
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
              Apresentação do Módulo
            </h2>
          </div>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Nos Módulos 1 e 2 desta trilha formativa, mergulhamos na essência do programa <strong>"Aprendendo a Lidar com Dinheiro" da <span className="whitespace-nowrap">BEĨ Educação</span></strong>, compreendendo sua metodologia <strong>baseada em Projetos e as ferramentas essenciais para o planejamento de aulas</strong>. Agora, no Módulo 3, daremos um passo fundamental: como garantir que todo esse planejamento e esforço se traduza em aprendizagem efetiva para nossos estudantes.
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            <strong>Neste módulo</strong>, o foco recai sobre a <strong>avaliação da aprendizagem como parte essencial do processo educativo</strong>. Serão exploradas estratégias que permitam acompanhar o progresso dos alunos, identificar avanços e desafios, e utilizar os resultados da avaliação para reorientar as práticas pedagógicas. <strong>A proposta é compreender a avaliação não apenas como um instrumento de mensuração</strong>, mas como uma ferramenta de transformação, capaz de promover reflexões, engajamento e o <strong>desenvolvimento integral dos estudantes no contexto da Educação Financeira</strong>.
          </p>
        </div>
        
        {/* Imagem - 1/3 da largura */}
        <div className="flex items-center justify-center h-full">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-96">
            <Image
              src="/4_e_5_books.png"
              alt="Imagem ilustrativa"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Blocos informativos bonitos */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Bloco 1 - Informação sobre o curso */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900">Sobre o Curso</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Desenvolvido pela equipe pedagógica da <span className="font-semibold whitespace-nowrap">BEĨ Educação</span>, em parceria com a equipe de tecnologia da <span className="font-semibold">SME - Secretaria de Educação do Rio de Janeiro</span>, o curso é oferecido no formato <span className="font-semibold text-blue-800">autoinstrucional</span> — ou seja, sem a presença de tutores para interação ou esclarecimento de dúvidas dos participantes.
            </p>
          </div>
        </div>

        {/* Bloco 2 - Mensagem inspiradora */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-200/30 rounded-full -ml-16 -mb-16 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-900">Nossa Missão</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Mais do que planejar e avaliar, este é o momento de transformar o conhecimento em ação e fazer da Educação Financeira um caminho para a autonomia e o futuro dos nossos estudantes.
            </p>
          </div>
        </div>
      </div>

      {/* Seção do Vídeo */}
      <div className="space-y-6 items-center">
        <h3 className="text-3xl font-bold text-slate-700 justify-center text-center py-8">
          Vídeo de Apresentação
        </h3>
        
        <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/42BVLPl0xw8"
            title="Resumo Módulo 1"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default PageApresentacao1
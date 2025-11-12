"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react';
import Image from 'next/image';

const PageApresentacao2 = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ao-final');
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
    <div
      ref={ref}
      id="ao-final"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100"
    >
      <div className="grid gap-8 md:grid-cols-3 items-start">
        {/* Imagem - 1/3 da largura, altura reduzida */}
        <div className="relative w-full h-64 md:h-full md:min-h-[400px] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/check.jpg"
            alt="Imagem ilustrativa"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-5">
          {/* Título principal */}
          <div className="flex items-center gap-3">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Ao final deste módulo, você será capaz de:
            </h2>
          </div>

          {/* Lista de objetivos */}
          <ul className="space-y-3 text-slate-700 text-base leading-relaxed list-none">
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Compreender o conceito e a importância do monitoramento pedagógico na Aprendizagem Baseada em Projetos.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Identificar e aplicar diferentes métodos e tipos de avaliação (diagnóstica, formativa e somativa) no contexto da educação financeira.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Utilizar registros e ferramentas digitais, como o Padlet, para um monitoramento e avaliação eficazes dos projetos.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Elaborar e aplicar rubricas de avaliação para promover clareza e autonomia no processo avaliativo.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Reconhecer o erro como uma oportunidade de aprendizagem e utilizá-lo para aprimorar o processo avaliativo.</span>
            </li>
          </ul>

          {/* Divisor sutil */}
          <div className="border-t border-slate-200 pt-4"></div>

          {/* Subtítulo */}
          <h3 className="text-2xl font-bold text-slate-700 flex items-center gap-3">
            
            Monitorar e Avaliar
          </h3>

          {/* Grid de 3 cards compactos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-blue-800 text-sm mb-2">Monitoramento</h4>
              <p className="text-slate-700 text-sm leading-snug">
                Compreender a importância de monitorar as atividades e projetos para fazer ajustes necessários
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-green-800 text-sm mb-2">Métodos Avaliativos</h4>
              <p className="text-slate-700 text-sm leading-snug">
                Refletir sobre diferentes práticas avaliativas cotidianas
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-purple-800 text-sm mb-2">Avaliação na ABP</h4>
              <p className="text-slate-700 text-sm leading-snug">
                Conhecer ferramentas avaliativas como a Rubrica
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageApresentacao2;
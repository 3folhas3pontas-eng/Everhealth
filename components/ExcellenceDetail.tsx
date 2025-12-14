
import React from 'react';

const ExcellenceDetail: React.FC = () => {
  return (
    <section className="w-full py-10 md:py-20 overflow-hidden">
      {/* Container ajustado para alinhar com o resto do site (max-w-[960px]) */}
      <div className="flex flex-col w-full px-4 md:px-0 max-w-[960px] mx-auto">
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              A Excelência em Cada Detalhe
            </h1>
            <p className="mt-4 text-slate-600 dark:text-white/90 text-lg leading-relaxed">
              Descubra a combinação perfeita de arte e engenharia, onde cada corte é uma prova de qualidade superior.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-start relative">
            {/* Coluna de Texto */}
            <div className="flex flex-col gap-12 order-2 md:order-1">
              {/* Feature 1 */}
              <div className="flex items-start gap-5 group">
                <span className="material-symbols-outlined text-4xl text-primary shrink-0 transition-transform duration-300 group-hover:scale-110">diamond</span>
                <div>
                  <h3 className="text-primary text-xl font-bold">Fio Incomparável</h3>
                  <p className="text-slate-600 dark:text-white/80 mt-2 text-base leading-relaxed">
                    Uma lâmina afiada com precisão para cortes perfeitos e sem esforço, mantendo a integridade de cada ingrediente.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-5 group">
                <span className="material-symbols-outlined text-4xl text-primary shrink-0 transition-transform duration-300 group-hover:scale-110">balance</span>
                <div>
                  <h3 className="text-primary text-xl font-bold">Equilíbrio Perfeito</h3>
                  <p className="text-slate-600 dark:text-white/80 mt-2 text-base leading-relaxed">
                    Design ergonômico que garante controle e conforto absoluto, tornando-se uma extensão natural da sua mão.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-5 group">
                <span className="material-symbols-outlined text-4xl text-primary shrink-0 transition-transform duration-300 group-hover:scale-110">layers</span>
                <div>
                  <h3 className="text-primary text-xl font-bold">Materiais Premium</h3>
                  <p className="text-slate-600 dark:text-white/80 mt-2 text-base leading-relaxed">
                    Forjada com Aço de Carbono e madeiras nobres para um desempenho superior e beleza atemporal.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-5 group">
                <span className="material-symbols-outlined text-4xl text-primary shrink-0 transition-transform duration-300 group-hover:scale-110">shield</span>
                <div>
                  <h3 className="text-primary text-xl font-bold">Durabilidade Superior</h3>
                  <p className="text-slate-600 dark:text-white/80 mt-2 text-base leading-relaxed">
                    Artesanato que garante longa durabilidade e beleza, um legado para sua cozinha.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna da Imagem */}
            {/* Sticky apenas em telas médias ou maiores (md:sticky) para evitar quebra de layout no mobile */}
            <div className="order-1 md:order-2 md:sticky md:top-32 flex items-center justify-center mb-8 md:mb-0">
              <div className="w-full relative flex items-center justify-center h-[300px] md:h-[50vh]">
                <img 
                  alt="Faca do chef premium flutuando com iluminação dramática" 
                  className="max-w-full max-h-full object-contain transform-gpu drop-shadow-[0_20px_50px_rgba(119,56,255,0.25)] filter contrast-125 rounded-2xl" 
                  src="https://i.imgur.com/9bDQosV.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceDetail;

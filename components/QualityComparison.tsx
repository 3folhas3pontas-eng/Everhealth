
import React from 'react';
import { useRouter } from './RouterContext';

const QualityComparison: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="flex flex-col justify-center py-10 md:py-20">
      <div className="layout-content-container flex flex-col max-w-6xl w-full mx-auto px-4 md:px-8">
        {/* SectionHeader */}
        <div className="w-full flex justify-center pb-8 md:pb-12">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight text-center">
            A Diferença Está no Corte
          </h2>
        </div>
        
        {/* Comparison Section */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 w-full items-center">
          {/* Divider Line for Desktop */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-slate-200/20 dark:bg-white/10 hidden lg:block"></div>
          
          {/* Left Panel: Frustration */}
          <div className="flex flex-col items-center px-0 lg:px-8 xl:px-16">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-300 dark:bg-slate-800 shadow-lg group">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105" 
                role="img"
                aria-label="Uma pessoa tentando, sem sucesso, cortar um tomate com uma faca cega, amassando o alimento."
                style={{ 
                  backgroundImage: 'url("https://i.imgur.com/HI4a6Bj.gif")',
                  filter: 'grayscale(80%) contrast(1.1)' 
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-white text-2xl md:text-3xl font-bold tracking-tight">
                Saia da Frustração
              </h3>
            </div>
          </div>
          
          {/* Right Panel: Precision */}
          <div className="flex flex-col items-center px-0 lg:px-8 xl:px-16">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-300 dark:bg-slate-800 shadow-lg group">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105" 
                role="img"
                aria-label="Uma faca premium Everhealth cortando fatias finas e perfeitas de um tomate com facilidade e precisão."
                style={{ backgroundImage: 'url("https://i.imgur.com/RwCRC4E.gif")' }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/20"></div>
              <h3 className="absolute bottom-6 right-6 text-white text-2xl md:text-3xl font-bold tracking-tight text-right">
                Experimente a Verdadeira Precisão
              </h3>
            </div>
          </div>
        </div>
        
        {/* SingleButton CTA */}
        <div className="flex pt-12 md:pt-16 justify-center">
          <button 
            onClick={() => navigate('/comprar')}
            className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-[#25D366] text-white text-base font-bold leading-normal tracking-wide hover:bg-[#20b858] transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(37,211,102,0.5)]"
          >
            <span className="truncate uppercase">Quero Pagar na Entrega</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QualityComparison;

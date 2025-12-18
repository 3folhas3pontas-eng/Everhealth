
import React from 'react';
import { useRouter } from './RouterContext';

const Hero: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div 
          className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-6 text-center" 
          role="img"
          aria-label="Um conjunto de facas premium Everhealth arranjado em uma superfície escura e texturizada" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url("https://i.imgur.com/E4T1QAb_d.webp?maxwidth=760&fidelity=grand")'
          }}
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl font-display drop-shadow-2xl">
              Everhealth™
            </h1>
            <h2 className="text-white text-lg font-medium leading-relaxed @[480px]:text-xl font-display max-w-xl opacity-90">
              Facas Ultra Afiadas para Quem Não Aguenta Mais Sofrer na Cozinha
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4 w-full max-w-md">
            {/* Aviso de Urgência no Hero */}
            <div className="w-full bg-[#b22222] text-white rounded-lg py-3 px-4 text-center font-bold text-sm md:text-base tracking-wide animate-soft-pulse border border-white/20 shadow-xl">
              ⚠️ RESTAM APENAS 4 UNIDADES NO CENTRO DE DISTRIBUIÇÃO
            </div>

            <button 
              onClick={() => navigate('/comprar')}
              className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 md:h-16 px-8 bg-[#25D366] hover:bg-[#20b858] transition-all text-white text-lg font-black leading-normal tracking-widest shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95"
            >
              <span className="truncate uppercase">Quero Pagar na Entrega</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

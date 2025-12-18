
import React from 'react';
import { useRouter } from './RouterContext';

const Hero: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div 
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4" 
          role="img"
          aria-label="Um conjunto de facas premium Everhealth arranjado em uma superfície escura e texturizada" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("https://i.imgur.com/E4T1QAb_d.webp?maxwidth=760&fidelity=grand")'
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl font-display">
              Everhealth™
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base font-display max-w-lg">
              Facas Ultra Afiadas para Quem Não Aguenta Mais Sofrer na Cozinha
            </h2>
          </div>
          <button 
            onClick={() => navigate('/comprar')}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#25D366] hover:bg-[#20b858] transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base shadow-lg hover:shadow-[#25D366]/50"
          >
            <span className="truncate uppercase">Quero Pagar na Entrega</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

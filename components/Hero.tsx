
import React from 'react';
import { useRouter } from './RouterContext';

const Hero: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div 
          className="flex min-h-[620px] md:min-h-[700px] flex-col gap-8 bg-cover bg-center bg-no-repeat @[480px]:rounded-3xl items-center justify-center p-6 text-center relative overflow-hidden shadow-2xl" 
          role="img"
          aria-label="Um conjunto de facas premium Everhealth em ambiente de luxo" 
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.95) 100%), url("https://i.imgur.com/E4T1QAb_d.webp?maxwidth=760&fidelity=grand")'
          }}
        >
          {/* Luz de fundo sutil para dar profundidade */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-primary/10 blur-[120px] pointer-events-none rounded-full"></div>

          <div className="flex flex-col gap-6 max-w-2xl px-2 relative z-10">
            <div className="flex items-center justify-center gap-3">
               <span className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary"></span>
               <span className="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.4em] drop-shadow-sm">kit profissional</span>
               <span className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary"></span>
            </div>
            
            <h1 className="text-white text-[32px] md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter font-display drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              <span className="block text-white/90 mb-1">O Poder de</span> 
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Corte Profissional</span> 
              <span className="block mt-1">que faltava no seu Churrasco</span>
            </h1>
            
            <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full"></div>

            <h2 className="text-white/80 text-lg md:text-2xl font-bold leading-relaxed font-display max-w-lg mx-auto italic drop-shadow-md px-4">
              Lâminas que atravessam carne, osso e congelados como se fossem manteiga.
            </h2>
          </div>

          <div className="flex flex-col items-center gap-6 w-full max-w-md mt-4 relative z-10">
            {/* Aviso de Urgência Refinado */}
            <div className="w-full bg-[#b22222] text-white rounded-2xl py-4 px-6 text-center shadow-[0_10px_30px_-10px_rgba(178,34,34,0.6)] border border-white/10">
               <div className="flex items-center justify-center gap-2 mb-1">
                 <span className="material-symbols-outlined text-sm animate-pulse">warning</span>
                 <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Últimas Unidades</span>
               </div>
               <p className="font-black text-sm md:text-base leading-tight uppercase">Restam apenas 4 unidades no centro de distribuição</p>
            </div>

            <button 
              onClick={() => navigate('/comprar')}
              className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-18 md:h-24 px-8 bg-[#25D366] hover:bg-[#20b858] transition-all text-white shadow-[0_25px_50px_-12px_rgba(37,211,102,0.6)] active:scale-95 border-b-4 border-green-800"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-45 -translate-x-full animate-[shimmer_2s_infinite]"></div>
              <div className="flex flex-col items-center leading-none">
                <span className="text-xl md:text-3xl font-black uppercase tracking-widest">QUERO PAGAR NA ENTREGA</span>
                <span className="text-[10px] md:text-xs font-black opacity-80 uppercase tracking-tighter mt-2">Clique para garantir o seu kit hoje</span>
              </div>
            </button>
            
            <div className="flex items-center justify-center gap-6 text-white/50 text-[10px] font-black uppercase tracking-[0.2em] pt-2">
               <span className="flex items-center gap-2 border-r border-white/10 pr-6 last:border-0"><span className="material-symbols-outlined text-[16px] text-[#25D366]">verified</span> 100% Seguro</span>
               <span className="flex items-center gap-2 border-r border-white/10 pr-6 last:border-0"><span className="material-symbols-outlined text-[16px] text-[#25D366]">local_shipping</span> Frete Grátis</span>
               <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-[#25D366]">stars</span> Premium</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-45deg); }
          100% { transform: translateX(250%) skewX(-45deg); }
        }
      `}</style>
    </div>
  );
};

export default Hero;

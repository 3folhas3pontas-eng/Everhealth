
import React from 'react';
import { useRouter } from './RouterContext';

const PrecisionInspiration: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full py-10 @container">
      <div className="@[480px]:p-4">
        <div 
          className="relative flex min-h-[calc(100vh-8rem)] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-2xl items-center justify-center p-4 text-center overflow-hidden" 
          data-alt="Dark wood texture with a dramatic spotlight, creating a premium and mysterious atmosphere." 
          style={{
            backgroundImage: 'linear-gradient(rgba(19, 17, 24, 0.7) 0%, rgba(19, 17, 24, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOrH1LRDWvfi0LWVJRqUni1Qy9m7nUIdEWybuEO2n-6NmAFeDRFsH-rqzKE_FvdlSsm9NMEdXoKPZfib4NvD-jqCCAJYvshnLEBkQ2tHGNEgsYB0TYfMV_r-vUSb92t9s-soL_GvKgqt41hVy1z2GElTxYjfLvyq2qAeX3GJTNqKcmVNnrNXyUlopXlawqgjulm-L0JLWazoNDCpSk643hIPlHx-ghmEBQ-_m8CRdsBydlKpETZORqn11QRaZbSDpSVFJ-oaGxgpAq")'
          }}
        >
          {/* Knife Image Layer */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img 
              alt="A hyper-realistic, metallic chef's knife is perfectly aligned vertically with a premium, marbled block of steak" 
              className="max-h-[60vh] md:max-h-[75vh] w-auto object-contain drop-shadow-2xl" 
              src="https://i.imgur.com/0exZbvZ.jpeg"
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col items-center justify-end gap-6 p-4 md:p-8 w-full h-full min-h-[500px]">
             {/* Spacer to push content to the bottom/middle area over the image */}
             <div className="flex-1"></div>

            <div className="flex flex-col gap-3 text-center text-white w-full max-w-2xl mt-auto drop-shadow-lg">
              <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl text-white">
                O Corte Profissional que Faltava na Sua Cozinha
              </h1>
              <h2 className="text-base font-medium leading-relaxed text-white/90 md:text-xl">
                Forjada para um corte impecável. Sinta o controle absoluto em cada movimento.
              </h2>
            </div>
            
            <button 
              onClick={() => navigate('/comprar')}
              className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-[#25D366] hover:bg-[#20b858] transition-all text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:shadow-[#25D366]/25 hover:scale-105"
            >
              <span className="truncate">QUERO PAGAR NA ENTREGA</span>
            </button>

            <div className="mt-8 flex flex-col items-center gap-2 text-white/50">
              <span className="text-xs font-medium uppercase tracking-widest">Role para explorar</span>
              <span className="material-symbols-outlined animate-bounce">
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecisionInspiration;

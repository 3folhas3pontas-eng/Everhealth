
import React, { useState } from 'react';
import { useRouter } from './RouterContext';

const WhyChooseUs: React.FC = () => {
  const { navigate } = useRouter();

  const customerImages = [
    "https://i.imgur.com/zDFKzcm.jpeg",
    "https://i.imgur.com/L9hTrly.png",
    "https://i.imgur.com/I9LKAhg.png",
    "https://i.imgur.com/hLNs0WB.png"
  ];

  const videoTestimonials = [
    { 
      id: 1, 
      url: "https://files.catbox.moe/qeo0xh.mp4", 
      poster: "https://i.imgur.com/zDFKzcm.jpeg",
      label: "Unboxing do Kit" 
    },
    { 
      id: 2, 
      url: "https://files.catbox.moe/i81amu.mp4", 
      poster: "https://i.imgur.com/L9hTrly.png",
      label: "Teste de Corte" 
    },
    { 
      id: 3, 
      url: "https://files.catbox.moe/kc2m6o.mp4", 
      poster: "https://i.imgur.com/I9LKAhg.png",
      label: "Detalhes do Cabo" 
    },
    { 
      id: 4, 
      url: "https://files.catbox.moe/n3pr82.mp4", 
      poster: "https://i.imgur.com/hLNs0WB.png",
      label: "Opinião Sincera" 
    }
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative py-16 md:py-24 bg-[#110e1b] overflow-hidden">
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Zoom cliente" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
          <button className="absolute top-4 right-4 text-white p-2 bg-white/10 rounded-full hover:bg-white/20">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
      )}

      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
        
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            O que nossos clientes estão recebendo em casa
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium">
            Confira os pedidos entregues essa semana:
          </p>
        </div>

        {/* Galeria de Vídeos com scroll otimizado para celular */}
        <div className="w-full relative mb-12">
            <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory hide-scrollbar justify-start md:justify-center px-4 md:px-0 touch-pan-x" style={{ WebkitOverflowScrolling: 'touch' }}>
                {videoTestimonials.map((video) => (
                    <div 
                        key={video.id} 
                        className="snap-center shrink-0 w-[260px] md:w-[280px] aspect-[9/16] rounded-2xl overflow-hidden relative group border border-white/10 bg-black shadow-2xl"
                    >
                        <video 
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            controls
                            playsInline
                            poster={video.poster}
                            preload="metadata"
                        >
                            <source src={video.url} type="video/mp4" />
                        </video>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-10">
                            <p className="text-white text-sm font-bold shadow-black drop-shadow-md flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm text-[#25D366]">play_circle</span>
                              {video.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Galeria de Fotos Reais */}
        <div className="w-full max-w-4xl border-t border-white/5 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {customerImages.map((src, index) => (
              <div 
                key={index} 
                className="relative aspect-square cursor-zoom-in rounded-xl overflow-hidden bg-white/5 border border-white/5 group hover:border-white/20 transition-all"
                onClick={() => setSelectedImage(src)}
              >
                <img 
                  src={src} 
                  alt={`Foto cliente ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Badges de Confiança */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12">
          <div className="flex flex-col items-center text-center gap-1 p-4">
            <span className="material-symbols-outlined text-3xl text-gray-500">group</span>
            <p className="text-sm text-gray-500 font-medium">5.000+ Clientes</p>
          </div>
          <div className="flex flex-col items-center text-center gap-1 p-4">
            <span className="material-symbols-outlined text-3xl text-gray-500">verified</span>
            <p className="text-sm text-gray-500 font-medium">Garantia Total</p>
          </div>
          <div className="flex flex-col items-center text-center gap-1 p-4">
            <span className="material-symbols-outlined text-3xl text-gray-500">local_shipping</span>
            <p className="text-sm text-gray-500 font-medium">Entrega Segura</p>
          </div>
        </div>

        <div className="mt-10 w-full flex justify-center">
          <button 
            onClick={() => navigate('/comprar')}
            className="flex min-w-[240px] items-center justify-center rounded-lg h-14 px-8 bg-[#25D366] text-white text-lg font-bold tracking-wide hover:bg-[#20b858] transition-all shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-105"
          >
            QUERO PAGAR NA ENTREGA
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

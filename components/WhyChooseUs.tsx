
import React, { useState } from 'react';
import { useRouter } from './RouterContext';

const WhyChooseUs: React.FC = () => {
  const { navigate } = useRouter();

  // Imagens reais do cliente (usadas na galeria inferior e como posters dos vídeos)
  const customerImages = [
    "https://i.imgur.com/zDFKzcm.jpeg",
    "https://i.imgur.com/L9hTrly.png",
    "https://i.imgur.com/I9LKAhg.png",
    "https://i.imgur.com/hLNs0WB.png"
  ];

  // Configuração dos Vídeos com os links fornecidos
  const videoTestimonials = [
    { 
      id: 1, 
      url: "https://files.catbox.moe/qeo0xh.mp4", 
      poster: "https://i.imgur.com/zDFKzcm.jpeg", // Capa 1
      label: "Unboxing do Kit" 
    },
    { 
      id: 2, 
      url: "https://files.catbox.moe/i81amu.mp4", 
      poster: "https://i.imgur.com/L9hTrly.png", // Capa 2
      label: "Teste de Corte" 
    },
    { 
      id: 3, 
      url: "https://files.catbox.moe/kc2m6o.mp4", 
      poster: "https://i.imgur.com/I9LKAhg.png", // Capa 3
      label: "Detalhes do Cabo" 
    },
    { 
      id: 4, 
      url: "https://files.catbox.moe/n3pr82.mp4", 
      poster: "https://i.imgur.com/hLNs0WB.png", // Capa 4
      label: "Opinião Sincera" 
    }
  ];

  // Estado para visualização de imagem (lightbox simples)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative py-16 md:py-24 bg-[#110e1b] overflow-hidden">
      {/* Lightbox para ampliar imagem */}
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
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Direto da Casa de Quem Comprou
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium">
            Confira os pedidos entregues essa semana:
          </p>
        </div>

        {/* --- Carrossel de Vídeos (Estilo Stories/Reels) --- */}
        <div className="w-full relative">
            {/* Scroll Container */}
            <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory hide-scrollbar justify-start md:justify-center px-4 md:px-0">
                {videoTestimonials.map((video) => (
                    <div 
                        key={video.id} 
                        className="snap-center shrink-0 w-[260px] md:w-[280px] aspect-[9/16] rounded-2xl overflow-hidden relative group border border-white/10 bg-black shadow-2xl"
                    >
                        {/* Video Player */}
                        <video 
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            controls
                            playsInline
                            poster={video.poster}
                            preload="metadata"
                        >
                            <source src={video.url} type="video/mp4" />
                            Seu navegador não suporta vídeos.
                        </video>

                        {/* Label discreta no fundo */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-10">
                            <p className="text-white text-sm font-bold shadow-black drop-shadow-md flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm text-[#25D366]">play_circle</span>
                              {video.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Indicador visual de scroll mobile (só aparece em telas pequenas) */}
            <div className="flex md:hidden justify-center gap-1 -mt-4 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
            </div>
        </div>

        {/* --- Depoimento Texto --- */}
        <div className="flex flex-col items-center text-center mt-6 mb-12 max-w-2xl px-4">
          <div className="flex gap-1 mb-3 text-[#25D366]">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>
          <p className="text-lg md:text-xl text-white/80 italic leading-relaxed font-light">
            "Material chegou conforme está no site. Gostei muito, agora vou testar. Veio bem embalado."
          </p>
        </div>

        {/* --- Galeria de Fotos Estáticas --- */}
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

        {/* --- Trust Badges (Simplificados) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-16">
          <div className="flex flex-col items-center text-center gap-2 p-4">
            <span className="material-symbols-outlined text-3xl text-gray-500">group</span>
            <p className="text-sm text-gray-500 font-medium">5.000+ Clientes</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2 p-4">
            <span className="material-symbols-outlined text-3xl text-gray-500">verified</span>
            <p className="text-sm text-gray-500 font-medium">Garantia Total</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2 p-4">
            <span className="material-symbols-outlined text-3xl text-gray-500">local_shipping</span>
            <p className="text-sm text-gray-500 font-medium">Entrega Segura</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 w-full flex justify-center">
          <button 
            onClick={() => navigate('/comprar')}
            className="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-8 bg-[#25D366] text-white text-lg font-bold tracking-wide hover:bg-[#20b858] transition-all shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-105 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)]"
          >
            QUERO O MEU AGORA
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

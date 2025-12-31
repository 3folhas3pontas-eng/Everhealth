
import React, { useState, useEffect } from 'react';
import { useRouter } from './RouterContext';

const PRODUCT_CONFIG: Record<number, { url: string; braipUrl: string; price: string; installment: string; oldPrice: string; discount: string }> = {
  1: { 
    url: "https://entrega.logzz.com.br/pay/mem6702nw/1-kit-com-6-facas-oferta", 
    braipUrl: "https://pay.braip.co/checkout/plao46o6/che5wqov?pl=plao46o6&ck=che5wqov&af=afig51gd81&currency=BRL",
    price: "119,90", 
    installment: "12,80",
    oldPrice: "199,90",
    discount: "40% OFF"
  },
  2: { 
    url: "https://entrega.logzz.com.br/pay/mem6702nw/2-kits-de-facas-promocao", 
    braipUrl: "https://ev.braip.com/checkout/pla1lrqn/che5wqov?pl=pla1lrqn&ck=che5wqov&af=afig51gd81&currency=BRL",
    price: "174,99", 
    installment: "18,67",
    oldPrice: "299,90",
    discount: "42% OFF"
  },
  3: { 
    url: "https://entrega.logzz.com.br/pay/mem6702nw/3-kits-de-facas-promocao", 
    braipUrl: "https://ev.braip.com/checkout/pladdovq/che5wqov?pl=pladdovq&ck=che5wqov&af=afig51gd81&currency=BRL",
    price: "249,99", 
    installment: "26,68",
    oldPrice: "449,90",
    discount: "44% OFF"
  },
  4: { 
    url: "https://entrega.logzz.com.br/pay/mem6702nw/4-kits-de-facas-profissional-super-oferta", 
    braipUrl: "https://ev.braip.com/checkout/plae6g16/che5wqov?pl=plae6g16&ck=che5wqov&af=afig51gd81&currency=BRL",
    price: "389,90", 
    installment: "41,61",
    oldPrice: "699,90",
    discount: "44% OFF"
  },
  5: { 
    url: "https://entrega.logzz.com.br/pay/mem6702nw/5-kits-de-facas-profissional-oferta-especial", 
    braipUrl: "https://ev.braip.com/checkout/plaq40ol/che5wqov?pl=plaq40ol&ck=che5wqov&af=afig51gd81&currency=BRL",
    price: "429,90", 
    installment: "45,88",
    oldPrice: "799,90",
    discount: "46% OFF"
  }
};

const PurchasePage: React.FC = () => {
  const { navigate } = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isCarrierEnabled, setIsCarrierEnabled] = useState(false);

  const WHATSAPP_NUMBER = "5511976285899"; 
  const MSG_SUPPORT_GENERAL = encodeURIComponent("Olá! Gostaria de tirar dúvidas sobre o Kit de Facas Everhealth™.");

  const videoTestimonials = [
    { id: 1, url: "https://files.catbox.moe/qeo0xh.mp4", poster: "https://i.imgur.com/zDFKzcm.jpeg", label: "O kit é bruto!" },
    { id: 2, url: "https://files.catbox.moe/i81amu.mp4", poster: "https://i.imgur.com/L9hTrly.png", label: "Corta muito pelo preço." },
    { id: 3, url: "https://files.catbox.moe/kc2m6o.mp4", poster: "https://i.imgur.com/I9LKAhg.png", label: "Pegada firme!" },
    { id: 4, url: "https://files.catbox.moe/n3pr82.mp4", poster: "https://i.imgur.com/hLNs0WB.png", label: "Chegou rápido." }
  ];

  const customerImages = [
    "https://i.imgur.com/zDFKzcm.jpeg",
    "https://i.imgur.com/L9hTrly.png",
    "https://i.imgur.com/I9LKAhg.png",
    "https://i.imgur.com/hLNs0WB.png"
  ];

  const images = [
    "https://i.imgur.com/SLK2BMz.jpeg",
    "https://i.imgur.com/Y7IPKsw.jpeg",
    "https://i.imgur.com/GX61mLE.jpeg",
    "https://i.imgur.com/uILkYmZ.jpeg",
    "https://i.imgur.com/ZklWY3a.jpeg",
    "https://i.imgur.com/SaVd4Rl.jpeg",
    "https://i.imgur.com/ywbtAas.jpeg"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const currentProduct = PRODUCT_CONFIG[quantity];
  const isBestSeller = quantity === 2;

  const increment = () => setQuantity(q => Math.min(q + 1, 5));
  const decrement = () => setQuantity(q => Math.max(q - 1, 1));

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleBuyClick = () => {
    const checkoutUrl = isCarrierEnabled ? currentProduct.braipUrl : currentProduct.url;
    window.open(checkoutUrl, '_blank');
  };

  const toggleCarrierDelivery = () => {
    const newValue = !isCarrierEnabled;
    setIsCarrierEnabled(newValue);
    
    if (newValue) {
      setTimeout(() => {
        setIsHelpModalOpen(false);
        const buyButton = document.getElementById('main-buy-button');
        if (buyButton) {
          buyButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4500); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-background-light dark:bg-[#0b0813] font-display antialiased min-h-screen text-slate-900 dark:text-white pb-10">
      <div className="sticky top-0 z-[100] w-full bg-yellow-400 py-2.5 px-4 shadow-xl overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-45 -translate-x-full animate-[shimmer_2.5s_infinite]"></div>
        <p className="text-black inline-block font-black text-[10px] md:text-sm uppercase tracking-tighter">
          🔥 QUEIMA TOTAL SÓ HOJE — ÚLTIMAS UNIDADES NO ESTOQUE!
        </p>
      </div>

      {isHelpModalOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-[400px] bg-[#1a1625] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-yellow-400 text-3xl">help</span>
                <h3 className="text-white text-xl font-black">Precisa de Ajuda?</h3>
              </div>
              <button onClick={() => setIsHelpModalOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="p-6 flex flex-col gap-6">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MSG_SUPPORT_GENERAL}`}
                target="_blank"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl font-black text-lg shadow-lg shadow-[#25D366]/20 transition-transform active:scale-95"
              >
                <span className="material-symbols-outlined">chat</span>
                Falar no WhatsApp
              </a>

              <div className="bg-[#241d2f] rounded-3xl p-6 border border-white/5 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-red-500">location_off</span>
                  </div>
                  <h4 className="text-white font-black text-lg">CEP indisponível?</h4>
                </div>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  Ative nossa Entrega via Transportadora para liberar o envio imediato.
                </p>
                <div className="flex flex-col items-center gap-2">
                  <button 
                    onClick={toggleCarrierDelivery}
                    className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-lg transition-all active:scale-95 ${
                      isCarrierEnabled 
                      ? 'bg-green-500/20 text-green-500 border border-green-500/30' 
                      : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    <span className="material-symbols-outlined">{isCarrierEnabled ? 'check_circle' : 'local_shipping'}</span>
                    {isCarrierEnabled ? 'Transportadora Ativada' : 'Ativar Entrega via Transportadora'}
                  </button>
                  {isCarrierEnabled && (
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                      Clique no botão acima para desativar
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Foto real ampliada do Kit Everhealth Profissional" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
          <button className="absolute top-4 right-4 text-white p-2 bg-white/10 rounded-full"><span className="material-symbols-outlined text-2xl">close</span></button>
        </div>
      )}

      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="w-full flex justify-start px-4 pt-6 md:px-8 z-20">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>Voltar
            </button>
          </div>

          <main className="flex-1">
            <div className="w-full mx-auto max-w-6xl px-4 py-6 md:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
                <div className="flex flex-col gap-6">
                  <div className="relative w-full aspect-square bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group mx-auto max-w-[500px]">
                    <div key={activeIndex} className="w-full h-full bg-center bg-cover animate-fade-in" style={{ backgroundImage: `url("${images[activeIndex]}")` }}></div>
                    
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 size-10 md:size-12 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 hover:bg-black/60 transition-all active:scale-90 z-20 md:opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 size-10 md:size-12 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 hover:bg-black/60 transition-all active:scale-90 z-20 md:opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>

                  <div className="w-full flex flex-col gap-4 max-w-[500px] mx-auto">
                    <div className="w-full overflow-x-auto hide-scrollbar pb-2">
                      <div className="flex gap-3 px-1">
                        {images.map((img, index) => (
                          <button key={index} onClick={() => setActiveIndex(index)} className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all ${activeIndex === index ? 'ring-2 ring-primary scale-105' : 'opacity-60'}`}>
                            <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url("${img}")` }}></div>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-6">
                      <button onClick={prevImage} className="flex items-center gap-2 text-white/60 hover:text-white font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors">
                        <span className="material-symbols-outlined text-sm">west</span> Anterior
                      </button>
                      <div className="flex gap-1.5">
                        {images.map((_, idx) => (
                          <div key={idx} className={`h-1.5 rounded-full transition-all ${activeIndex === idx ? 'w-6 bg-primary' : 'w-1.5 bg-white/20'}`}></div>
                        ))}
                      </div>
                      <button onClick={nextImage} className="flex items-center gap-2 text-white/60 hover:text-white font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors">
                        Próximo <span className="material-symbols-outlined text-sm">east</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 w-full max-w-[500px] mx-auto lg:max-w-none">
                  <div className={`relative transition-all rounded-[2rem] p-5 md:p-8 ${isBestSeller ? 'border-2 border-green-500/50 bg-green-500/5' : 'border border-white/10 bg-white/5 shadow-xl'}`}>
                    {isBestSeller && <div className="absolute -top-4 left-6 bg-green-600 text-white font-black text-[10px] px-3 py-1 rounded-full animate-bounce">MAIS VENDIDO</div>}

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase">
                        <span className="material-symbols-outlined text-sm">verified</span>PRODUTO ORIGINAL EVERHEALTH™
                      </div>
                      <h1 className="text-white text-2xl md:text-4xl font-black leading-tight tracking-tight">Kit de Facas Profissional EverHealth™</h1>
                      <p className="text-gray-400 text-sm md:text-base">Fio de navalha para quem não aceita menos que a perfeição.</p>
                    </div>

                    <div className="bg-[#b22222] text-white rounded-xl py-3 px-4 text-center font-black text-[11px] md:text-sm tracking-wide animate-soft-pulse mt-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">warning</span>
                        <span>RESTAM APENAS 4 UNIDADES COM FRETE GRÁTIS</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col border-b border-white/10 py-5 md:py-6 relative">
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-500 text-base md:text-lg line-through">R$ {currentProduct.oldPrice}</span>
                        <div className="bg-green-500/20 text-green-500 text-[10px] font-black px-1.5 py-0.5 rounded">{currentProduct.discount}</div>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-col">
                          <span className="text-white text-4xl md:text-5xl font-black tracking-tighter">R$ {currentProduct.price}</span>
                          <span className="text-green-500 text-base md:text-lg font-bold">ou 12x de R$ {currentProduct.installment}</span>
                        </div>
                        <div className="bg-yellow-400 text-black px-2 py-0.5 rounded-full font-black text-[8px] md:text-[9px] uppercase animate-pulse shadow-lg rotate-3 shrink-0 self-center">
                          🔥 Queima Total Só Hoje
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 py-4">
                      <p className="text-white text-sm font-bold">Quantidade:</p>
                      <div className="flex items-center justify-between bg-black/30 p-2 rounded-2xl border border-white/10 w-full md:w-fit md:min-w-[200px]">
                         <button onClick={decrement} className="size-10 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all">-</button>
                         <span className="text-white font-black text-lg md:text-xl px-4">{quantity} Kit{quantity > 1 ? 's' : ''}</span>
                         <button onClick={increment} className="size-10 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all">+</button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                      <button 
                        id="main-buy-button"
                        onClick={handleBuyClick} 
                        className="group relative w-full h-20 md:h-24 flex items-center justify-center rounded-2xl bg-[#25D366] hover:bg-[#20b858] transition-all shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] active:scale-[0.98] border-b-4 border-green-800"
                      >
                        {isCarrierEnabled && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] md:text-[9px] font-black px-3 py-1 rounded-full shadow-lg border border-green-500 z-10 whitespace-nowrap animate-bounce flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px] text-green-500">local_shipping</span>
                            ENTREGA VIA TRANSPORTADORA ATIVADA
                          </div>
                        )}
                        <div className="flex flex-col items-center px-4 text-center">
                           <span className="text-white text-lg md:text-2xl font-black uppercase leading-none mb-1">
                             {isCarrierEnabled ? 'Adquirir o meu agora' : 'QUERO PAGAR NA ENTREGA'}
                           </span>
                           <span className="text-white/90 text-[9px] md:text-xs font-bold uppercase tracking-tighter opacity-80">
                             {isCarrierEnabled ? 'FINALIZAR COMPRA VIA TRANSPORTADORA' : 'PAGUE SOMENTE AO RECEBER O PRODUTO'}
                           </span>
                        </div>
                      </button>
                      
                      <div className="flex flex-col gap-2 w-full">
                        <a 
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MSG_SUPPORT_GENERAL}`} 
                          target="_blank" 
                          className="flex h-12 items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-colors text-sm"
                        >
                          <span className="material-symbols-outlined text-lg text-[#25D366]">chat</span>Falar com Suporte
                        </a>
                        
                        <button 
                          onClick={() => setIsHelpModalOpen(true)}
                          className="flex items-center justify-center gap-1.5 text-white/40 hover:text-white text-[11px] md:text-sm font-medium transition-colors py-2"
                        >
                          <span className="material-symbols-outlined text-[16px] md:text-[18px]">help</span>
                          Dúvidas na finalização? Clique aqui
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-white text-xl font-black uppercase text-center mb-10 tracking-widest">O que os Brutos estão falando</h3>
                
                <div className="flex overflow-x-auto gap-4 pb-10 hide-scrollbar snap-x touch-pan-x">
                  {videoTestimonials.map((video) => (
                    <div key={video.id} className="snap-center shrink-0 w-[240px] md:w-[260px] aspect-[9/16] rounded-3xl overflow-hidden relative group border border-white/10 bg-black shadow-lg">
                       <video className="w-full h-full object-cover" controls playsInline poster={video.poster}><source src={video.url} type="video/mp4" /></video>
                       <div className="absolute bottom-4 left-4 text-white font-black text-sm drop-shadow-lg">{video.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <div className="grid grid-cols-2 gap-4 h-fit">
                    {customerImages.map((src, idx) => (
                      <div key={idx} onClick={() => setSelectedImage(src)} className="aspect-square rounded-2xl overflow-hidden cursor-zoom-in border border-white/10 shadow-lg hover:border-primary/50 transition-all bg-white/5">
                        <img src={src} alt={`Comentário de Cliente - Kit de Facas Profissional Everhealth ${idx + 1}`} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#161022] p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col gap-8">
                    <div className="flex justify-between items-center border-b border-white/10 pb-6">
                      <h4 className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter">COMENTÁRIOS</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 font-black text-xl md:text-2xl">4.8</span>
                        <div className="flex text-yellow-500">
                          <span className="material-symbols-outlined text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-10">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-white font-bold block text-base md:text-lg">Rafael P. – Santo André/SP</span>
                            <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Há 1 dia</span>
                          </div>
                        </div>
                        <div className="flex text-yellow-500">
                          {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-xs md:text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                        </div>
                        <p className="text-white/80 italic text-sm leading-relaxed">
                          “Foi a primeira vez que comprei pagando só na entrega. Confesso que fiquei com receio, mas chegou certinho e as facas são muito boas.”
                        </p>
                        <div className="bg-[#1a3a2a] text-[#25D366] text-[9px] font-black px-3 py-1 rounded w-fit uppercase tracking-tighter mt-1 border border-[#25D366]/20">
                          COMPRA VERIFICADA
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-white font-bold block text-base md:text-lg">Juliana R. – Contagem/MG</span>
                            <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Há 3 dias</span>
                          </div>
                        </div>
                        <div className="flex text-yellow-500">
                          {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-xs md:text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                        </div>
                        <p className="text-white/80 italic text-sm leading-relaxed">
                          “As facas cortam muito bem, gostei bastante. Só achei a caixa simples, mas o produto em si é excelente. Recomendo.”
                        </p>
                        <div className="bg-[#1a3a2a] text-[#25D366] text-[9px] font-black px-3 py-1 rounded w-fit uppercase tracking-tighter mt-1 border border-[#25D366]/20">
                          COMPRA VERIFICADA
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-white font-bold block text-base md:text-lg">Márcio T. – Duque de Caxias/RJ</span>
                            <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Há 5 dias</span>
                          </div>
                        </div>
                        <div className="flex text-yellow-500">
                          {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-xs md:text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                        </div>
                        <p className="text-white/80 italic text-sm leading-relaxed">
                          “Produto exatamente como no site. Já usei várias vezes e continuam afiadas. Compra tranquila, sem dor de cabeça.”
                        </p>
                        <div className="bg-[#1a3a2a] text-[#25D366] text-[9px] font-black px-3 py-1 rounded w-fit uppercase tracking-tighter mt-1 border border-[#25D366]/20">
                          COMPRA VERIFICADA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;

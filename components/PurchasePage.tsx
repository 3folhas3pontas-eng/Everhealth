
import React, { useState, useEffect } from 'react';
import { useRouter } from './RouterContext';

// Configuração dos Kits (Preços e Links)
const PRODUCT_CONFIG: Record<number, { url: string; braipUrl: string; price: string; installment: string }> = {
  1: { 
    url: "https://entrega.logzz.com.br/pay/mem6702nw/1-kit-com-6-facas-oferta", 
    braipUrl: "https://pay.braip.co/checkout/plao46o6/che5wqov?pl=plao46o6&ck=che5wqov&af=afig51gd81&currency=BRL",
    price: "119,90", 
    installment: "12,80" 
  },
  2: { 
    url: "https://entrega.logzz.com.br/pay/mem6702nw/2-kits-de-facas-promocao", 
    braipUrl: "https://ev.braip.com/checkout/pla1lrqn/che5wqov?pl=pla1lrqn&ck=che5wqov&af=afig51gd81&currency=BRL",
    price: "174,99", 
    installment: "18,67" 
  },
  3: { 
    url: "https://entrega.logzz.com.br/pay/mem6702nw/3-kits-de-facas-promocao", 
    braipUrl: "https://ev.braip.com/checkout/pladdovq/che5wqov?pl=pladdovq&ck=che5wqov&af=afig51gd81&currency=BRL",
    price: "249,99", 
    installment: "26,68" 
  },
  4: { 
    url: "https://entrega.logzz.com.br/pay/mem6702nw/4-kits-de-facas-profissional-super-oferta", 
    braipUrl: "https://ev.braip.com/checkout/plae6g16/che5wqov?pl=plae6g16&ck=che5wqov&af=afig51gd81&currency=BRL",
    price: "389,90", 
    installment: "41,61" 
  },
  5: { 
    url: "https://entrega.logzz.com.br/pay/mem6702nw/5-kits-de-facas-profissional-oferta-especial", 
    braipUrl: "https://ev.braip.com/checkout/plaq40ol/che5wqov?pl=plaq40ol&ck=che5wqov&af=afig51gd81&currency=BRL",
    price: "429,90", 
    installment: "45,88" 
  }
};

const PurchasePage: React.FC = () => {
  const { navigate } = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  
  const WHATSAPP_NUMBER = "5511976285899"; 
  const MSG_SUPPORT_ISSUE = encodeURIComponent("Olá! Estou tendo dificuldades para finalizar minha compra do Kit Everhealth™ e preciso de ajuda.");
  const MSG_SUPPORT_GENERAL = encodeURIComponent("Olá! Gostaria de tirar dúvidas sobre o Kit de Facas Everhealth™.");

  const [isBraipActive, setIsBraipActive] = useState(false); 
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Vídeos de Prova Social
  const videoTestimonials = [
    { id: 1, url: "https://files.catbox.moe/qeo0xh.mp4", poster: "https://i.imgur.com/zDFKzcm.jpeg", label: "Unboxing" },
    { id: 2, url: "https://files.catbox.moe/i81amu.mp4", poster: "https://i.imgur.com/L9hTrly.png", label: "Corte Preciso" },
    { id: 3, url: "https://files.catbox.moe/kc2m6o.mp4", poster: "https://i.imgur.com/I9LKAhg.png", label: "Detalhes" },
    { id: 4, url: "https://files.catbox.moe/n3pr82.mp4", poster: "https://i.imgur.com/hLNs0WB.png", label: "Uso Real" }
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
  const [isHovering, setIsHovering] = useState(false);

  const currentProduct = PRODUCT_CONFIG[quantity];
  const isBestSeller = quantity === 2;

  const increment = () => setQuantity(q => Math.min(q + 1, 5));
  const decrement = () => setQuantity(q => Math.max(q - 1, 1));

  const handleBuyClick = () => {
    const targetUrl = isBraipActive ? currentProduct.braipUrl : currentProduct.url;
    window.open(targetUrl, '_blank');
  };

  const activateAlternativeDelivery = () => {
    setIsBraipActive(true);
    alert("Método de entrega via Transportadora ativado com sucesso!");
    setIsHelpModalOpen(false); 
  };

  useEffect(() => {
    if (isHovering) return; 
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3500); 
    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  return (
    <div className="bg-background-light dark:bg-[#0b0813] font-display antialiased min-h-screen">
      {/* Lightbox para ampliar imagem */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Zoom cliente" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
          <button className="absolute top-4 right-4 text-white p-2 bg-white/10 rounded-full hover:bg-white/20">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
      )}

      {/* MODAL DE AJUDA */}
      {isHelpModalOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-[#1f1b28] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-500">help</span>
                Precisa de Ajuda?
              </h3>
              <button onClick={() => setIsHelpModalOpen(false)} className="text-gray-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-black/5">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="overflow-y-auto p-6 flex flex-col gap-6">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MSG_SUPPORT_ISSUE}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg hover:shadow-green-900/30 hover:-translate-y-0.5">
                <span className="material-symbols-outlined">chat</span>
                Falar no WhatsApp
              </a>
              <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-5 border border-slate-100 dark:border-white/5 shadow-inner">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 shrink-0">
                    <span className="material-symbols-outlined">location_off</span>
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-base leading-tight">CEP indisponível?</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-gray-300 mb-5 leading-relaxed">Ative nossa Entrega via Transportadora para liberar o envio imediato.</p>
                <button onClick={activateAlternativeDelivery} className="w-full py-3 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm hover:-translate-y-0.5">
                  <span className="material-symbols-outlined text-lg">local_shipping</span>
                  Ativar Entrega via Transportadora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Header Mobile Otimizado */}
          <div className="w-full flex justify-start px-4 pt-6 md:px-8 z-20">
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Voltar
            </button>
          </div>

          <main className="flex-1">
            <div className="w-full mx-auto max-w-6xl px-4 py-6 md:py-12">
              {/* Grid principal de compra: Galeria e Box de Compra */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12 lg:mb-20">
                
                {/* --- Coluna: Galeria Principal --- */}
                <div className="flex flex-col gap-6">
                  <div 
                    className="flex flex-col gap-6"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div className="relative w-full aspect-square bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                      <div 
                        key={activeIndex} 
                        className="w-full h-full bg-center bg-cover bg-no-repeat animate-fade-in" 
                        style={{ backgroundImage: `url("${images[activeIndex]}")` }}
                      ></div>
                      
                      <button onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="material-symbols-outlined text-2xl">chevron_left</span>
                      </button>
                      <button onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="material-symbols-outlined text-2xl">chevron_right</span>
                      </button>
                    </div>

                    {/* Miniaturas Restauradas */}
                    <div className="w-full overflow-x-auto hide-scrollbar pb-2">
                      <div className="flex gap-3 min-w-min px-1">
                        {images.map((img, index) => (
                          <button 
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ease-out 
                              ${activeIndex === index 
                                ? 'ring-2 ring-primary ring-offset-2 ring-offset-[#0b0813] scale-105 opacity-100 shadow-lg' 
                                : 'opacity-60 hover:opacity-100 hover:scale-105'}`}
                          >
                            <div 
                              className="w-full h-full bg-center bg-cover"
                              style={{ backgroundImage: `url("${img}")` }}
                            ></div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- Coluna: Detalhes da Compra --- */}
                <div className="flex flex-col gap-6">
                  <div className={`flex flex-col gap-6 relative transition-all duration-500 ease-out rounded-[2rem] p-6 md:p-8 ${
                    isBestSeller 
                      ? 'border-2 border-green-500/50 bg-green-500/5 shadow-[0_20px_50px_-10px_rgba(34,197,94,0.2)]' 
                      : 'border border-white/10 bg-white/5 shadow-xl'
                  }`}>
                    
                    {/* Badge "Melhor Oferta" flutuante */}
                    {isBestSeller && (
                      <div className="absolute -top-4 left-6 z-20">
                        <div className="bg-green-600 text-white font-black text-[10px] px-3 py-1 rounded-full shadow-lg shadow-green-900/40 uppercase tracking-widest animate-bounce">
                           MELHOR CUSTO-BENEFÍCIO
                        </div>
                      </div>
                    )}

                    {/* Heading Atualizado */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        PRODUTO ORIGINAL EVERHEALTH™
                      </div>
                      <h1 className="text-white text-3xl md:text-4xl font-black leading-tight">Kit de Facas Premium EverHealth™</h1>
                      <p className="text-gray-400 text-sm md:text-base font-medium">Corte profissional no seu churrasco — sem esforço.</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex text-yellow-500">
                          {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                        </div>
                        <span className="text-xs text-gray-400 font-bold">(154 avaliações)</span>
                      </div>
                    </div>
                    
                    {/* Price Section */}
                    <div className="flex flex-col border-b border-white/10 pb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-500 text-lg line-through font-medium">R$ 299,00</span>
                        <div className="bg-green-500/20 text-green-500 text-[10px] font-black px-1.5 py-0.5 rounded uppercase">60% OFF</div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-5xl font-black tracking-tighter">R$ {currentProduct.price}</span>
                        <span className="text-green-500 text-lg font-bold">em 12x de R$ {currentProduct.installment}</span>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex flex-col gap-3">
                      <p className="text-white text-sm font-bold">Quantidade:</p>
                      <div className="flex items-center justify-between bg-black/30 p-2 rounded-2xl border border-white/10">
                         <button onClick={decrement} className="size-10 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all">-</button>
                         <div className="flex flex-col items-center">
                            <span className="text-white font-black text-xl">{quantity}</span>
                            <span className="text-[10px] text-gray-500 uppercase font-black">Unidade{quantity > 1 ? 's' : ''}</span>
                         </div>
                         <button onClick={increment} className="size-10 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all">+</button>
                      </div>
                    </div>

                    {/* Frete/Entrega Status */}
                    <div className="bg-green-500/5 border border-green-500/20 p-4 rounded-2xl">
                       <div className="flex gap-3">
                          <span className="material-symbols-outlined text-green-500 text-2xl">local_shipping</span>
                          <div className="flex flex-col">
                             <span className="text-green-500 font-black text-sm uppercase italic tracking-tighter">Frete Grátis FULL</span>
                             <span className="text-white/70 text-xs">Chegará entre amanhã e depois de amanhã.</span>
                          </div>
                       </div>
                    </div>
                    
                    {/* Botão de Compra Atualizado com subtexto solicitado */}
                    <div className="flex flex-col gap-4 mt-2">
                      <button 
                        onClick={handleBuyClick}
                        className="group relative w-full h-16 md:h-24 flex items-center justify-center rounded-2xl bg-[#25D366] hover:bg-[#20b858] transition-all overflow-hidden shadow-[0_20px_40px_-10px_rgba(37,211,102,0.5)] active:scale-95"
                      >
                        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-45 -translate-x-full animate-[shimmer_3s_infinite]"></div>
                        <div className="flex flex-col items-center">
                           <span className="text-white text-xl md:text-2xl font-black uppercase tracking-widest drop-shadow-md">COMPRAR AGORA</span>
                           <span className="text-white/90 text-[10px] md:text-xs font-bold uppercase tracking-tighter mt-1">Pague somente ao receber o produto</span>
                        </div>
                      </button>

                      <div className="flex gap-2">
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MSG_SUPPORT_GENERAL}`} target="_blank" className="flex-1 h-12 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/10 transition-all">
                           <span className="material-symbols-outlined text-sm">chat</span>
                           Suporte
                        </a>
                      </div>

                      <button onClick={() => setIsHelpModalOpen(true)} className="text-gray-400 hover:text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors">
                        <span className="material-symbols-outlined text-sm">help</span>
                        Dúvidas na finalização? Clique aqui
                      </button>
                    </div>

                    {/* Benefícios e Accordions */}
                    <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                       <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-gray-500">replay</span>
                          <div className="flex flex-col">
                             <span className="text-blue-500 font-bold text-xs">Devolução grátis</span>
                             <span className="text-gray-400 text-[10px]">Você tem 7 dias a partir do recebimento.</span>
                          </div>
                       </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-4">
                      <details className="group border-b border-white/10 pb-4" open={isDetailsOpen}>
                        <summary className="flex justify-between items-center font-bold text-white cursor-pointer list-none uppercase text-xs tracking-widest">
                          <span>O que vem na caixa</span>
                          <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                        </summary>
                        <ul className="text-gray-400 text-base mt-4 grid grid-cols-1 gap-3">
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> 1 Faca do Chef</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> 1 Cutelo</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> 1 Faca de Pão</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> 1 Faca de Fruta</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> 1 Descascador</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> 1 Tesoura de Cozinha</li>
                        </ul>
                      </details>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- PROVA SOCIAL (FINAL DA PÁGINA) --- */}
              <div className="w-full flex flex-col gap-10 mt-12 border-t border-white/5 pt-12">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/10"></div>
                    <h3 className="text-white text-lg font-black uppercase tracking-[0.2em] text-center">O que nossos clientes estão recebendo em casa</h3>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>

                  {/* Vídeos de Prova Social com correção de scroll */}
                  {/* Fixed WebkitOverflowScrolling to satisfy TypeScript/React standards */}
                  <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x px-2 touch-pan-x" style={{ WebkitOverflowScrolling: 'touch' }}>
                    {videoTestimonials.map((video) => (
                      <div key={video.id} className="snap-center shrink-0 w-[240px] md:w-[280px] aspect-[9/16] rounded-3xl overflow-hidden relative group border border-white/10 bg-black shadow-2xl">
                         <video 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all"
                            controls
                            playsInline
                            poster={video.poster}
                            preload="metadata"
                          >
                            <source src={video.url} type="video/mp4" />
                          </video>
                      </div>
                    ))}
                  </div>

                  {/* Fotos e Avaliações de Clientes */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Fotos */}
                    <div className="grid grid-cols-2 gap-3">
                      {customerImages.map((src, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => setSelectedImage(src)}
                          className="aspect-square rounded-2xl overflow-hidden cursor-zoom-in border border-white/5 hover:border-white/20 transition-all shadow-xl"
                        >
                          <img src={src} alt="Cliente Everhealth" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                      ))}
                    </div>

                    {/* Comentários Atualizados - Fonte maior para acessibilidade e menos espaço excessivo */}
                    <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-2xl h-full flex flex-col justify-center">
                       <div className="flex items-center justify-between mb-8">
                          <h4 className="text-white font-black text-xl uppercase tracking-tighter">Comentários</h4>
                          <div className="flex items-center gap-2">
                             <span className="text-yellow-500 font-black text-2xl">4.8</span>
                             <div className="flex items-center gap-2">
                               {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined text-lg text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                             </div>
                          </div>
                       </div>
                       <div className="space-y-6">
                          {/* Rafael P. */}
                          <div className="border-b border-white/5 pb-5">
                             <div className="flex flex-col mb-1.5">
                                <span className="text-white font-bold text-base">Rafael P. – Santo André/SP</span>
                                <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Há 1 dia</span>
                             </div>
                             <div className="flex text-yellow-500 mb-2">
                                {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                             </div>
                             <p className="text-white/90 text-lg italic leading-relaxed font-light">“Foi a primeira vez que comprei pagando só na entrega. Confesso que fiquei com receio, mas chegou certinho e as facas são muito boas.”</p>
                             <div className="flex items-center gap-2 mt-3">
                                <span className="bg-green-500/20 text-green-400 text-[10px] font-black px-2 py-0.5 rounded uppercase">Compra Verificada</span>
                             </div>
                          </div>
                          
                          {/* Juliana R. */}
                          <div className="border-b border-white/5 pb-5">
                             <div className="flex flex-col mb-1.5">
                                <span className="text-white font-bold text-base">Juliana R. – Contagem/MG</span>
                                <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Há 3 dias</span>
                             </div>
                             <div className="flex text-yellow-500 mb-2">
                                {[1,2,3,4].map(s => <span key={s} className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                                <span className="material-symbols-outlined text-xs">star</span>
                             </div>
                             <p className="text-white/90 text-lg italic leading-relaxed font-light">“As facas cortam muito bem, gostei bastante. Só achei a caixa simples, mas o produto em si é excelente. Recomendo.”</p>
                             <div className="flex items-center gap-2 mt-3">
                                <span className="bg-green-500/20 text-green-400 text-[10px] font-black px-2 py-0.5 rounded uppercase">Compra Verificada</span>
                             </div>
                          </div>

                          {/* Márcio T. */}
                          <div className="pb-2">
                             <div className="flex flex-col mb-1.5">
                                <span className="text-white font-bold text-base">Márcio T. – Duque de Caxias/RJ</span>
                                <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Há 5 dias</span>
                             </div>
                             <div className="flex text-yellow-500 mb-2">
                                {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                             </div>
                             <p className="text-white/90 text-lg italic leading-relaxed font-light">“Produto exatamente como no site. Já usei várias vezes e continuam afiadas. Compra tranquila, sem dor de cabeça.”</p>
                             <div className="flex items-center gap-2 mt-3">
                                <span className="bg-green-500/20 text-green-400 text-[10px] font-black px-2 py-0.5 rounded uppercase">Compra Verificada</span>
                             </div>
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

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-45deg); }
          100% { transform: translateX(250%) skewX(-45deg); }
        }
        .animate-[shimmer_3s_infinite] {
          animation: shimmer 3s infinite;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default PurchasePage;

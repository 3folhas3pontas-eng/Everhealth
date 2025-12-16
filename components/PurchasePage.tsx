
import React, { useState, useEffect } from 'react';
import { useRouter } from './RouterContext';

// Configuração dos Kits (Preços e Links)
// url: Link Padrão (Logzz)
// braipUrl: Link Alternativo (Transportadora/Braip)
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
  
  // Mensagens pré-definidas codificadas
  const MSG_SUPPORT_GENERAL = encodeURIComponent("Olá! Gostaria de tirar dúvidas sobre o Kit de Facas Everhealth™.");
  const MSG_SUPPORT_ISSUE = encodeURIComponent("Olá! Estou tendo dificuldades para finalizar minha compra do Kit Everhealth™ e preciso de ajuda.");

  // Estado para gerenciar qual link está ativo (Padrão vs Alternativo)
  const [isBraipActive, setIsBraipActive] = useState(false); 

  // Estado do Modal de Ajuda
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  // Imagens da Galeria
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

  // Dados do Produto Selecionado Atualmente
  const currentProduct = PRODUCT_CONFIG[quantity];
  
  // Lógica de "Mais Vendido" (2 Kits)
  const isBestSeller = quantity === 2;

  const increment = () => setQuantity(q => Math.min(q + 1, 5));
  const decrement = () => setQuantity(q => Math.max(q - 1, 1));

  // Funções de navegação da galeria
  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  // Função para abrir o checkout
  const handleBuyClick = () => {
    if (isBraipActive) {
      // Lógica alternativa (Braip) - Usa o link específico configurado no PRODUCT_CONFIG
      window.open(currentProduct.braipUrl, '_blank');
    } else {
      // Lógica padrão (Logzz) - Usa o link específico do mapa
      window.open(currentProduct.url, '_blank');
    }
  };

  // Função para ativar o modo Braip (Delivery Alternativo)
  const activateAlternativeDelivery = () => {
    setIsBraipActive(true);
    alert("Método de entrega via Transportadora ativado com sucesso! Tente finalizar sua compra agora.");
    setIsHelpModalOpen(false); 
  };

  // Sistema de Inatividade (Auto-play)
  useEffect(() => {
    if (isHovering) return; 

    const interval = setInterval(() => {
      nextImage();
    }, 3500); 

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased min-h-screen">
      {/* --- MODAL DE AJUDA / PROBLEMAS --- */}
      {isHelpModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-[#1f1b28] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col max-h-[90vh]">
            
            {/* Header do Modal */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-500">help</span>
                Precisa de Ajuda?
              </h3>
              <button 
                onClick={() => setIsHelpModalOpen(false)}
                className="text-gray-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-black/5"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Conteúdo do Modal (Scrollável) */}
            <div className="overflow-y-auto p-6 flex flex-col gap-6">
              
              {/* Botão WhatsApp */}
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MSG_SUPPORT_ISSUE}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg hover:shadow-green-900/30 hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined">chat</span>
                Falar no WhatsApp
              </a>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200 dark:bg-white/10"></div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">OU</span>
                <div className="h-px flex-1 bg-gray-200 dark:bg-white/10"></div>
              </div>

              {/* Card de Solução: Endereço Indisponível */}
              <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-5 border border-slate-100 dark:border-white/5 shadow-inner">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 shrink-0">
                    <span className="material-symbols-outlined">location_off</span>
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-base leading-tight">Produto indisponível na sua região?</h4>
                </div>
                
                <p className="text-sm text-slate-600 dark:text-gray-300 mb-5 leading-relaxed">
                  Se você encontrou restrição de entrega para o seu CEP, ative nossa <strong>Entrega via Transportadora</strong> para liberar o envio imediato.
                </p>

                <button 
                  onClick={activateAlternativeDelivery}
                  className="w-full py-3 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-lg">local_shipping</span>
                  Ativar Entrega via Transportadora
                </button>
              </div>

            </div>
            
            <div className="p-3 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20 text-center">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Everhealth™ Support</p>
            </div>
          </div>
        </div>
      )}

      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="w-full flex justify-start px-4 pt-8 md:px-8 z-20">
            <button 
              onClick={() => navigate('/')} 
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/50 dark:bg-[#1f1b28]/50 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 font-bold text-sm hover:bg-white dark:hover:bg-[#2a2438] hover:border-primary/50 hover:text-primary dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10 transform hover:-translate-x-1"
            >
              <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:-translate-x-1">arrow_back</span>
              <span className="uppercase tracking-wider text-xs font-extrabold">Voltar ao Início</span>
            </button>
          </div>
          <main className="flex-1">
            <div className="w-full mx-auto max-w-6xl px-4 py-8 md:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                
                {/* --- Left Column: Product Gallery --- */}
                <div 
                  className="flex flex-col gap-6"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {/* Main Image Container */}
                  <div className="relative w-full aspect-square bg-black/5 dark:bg-white/5 rounded-2xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 group">
                    
                    {/* Active Image */}
                    <div 
                      key={activeIndex} 
                      className="w-full h-full bg-center bg-cover bg-no-repeat animate-fade-in" 
                      role="img"
                      aria-label="Imagem detalhada do produto" 
                      style={{ backgroundImage: `url("${images[activeIndex]}")` }}
                    ></div>

                    {/* Navigation Arrows */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:scale-110"
                    >
                      <span className="material-symbols-outlined text-2xl">chevron_left</span>
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:scale-110"
                    >
                      <span className="material-symbols-outlined text-2xl">chevron_right</span>
                    </button>

                    {/* Badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold">
                      {activeIndex + 1} / {images.length}
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="w-full overflow-x-auto hide-scrollbar pb-2">
                    <div className="flex gap-3 min-w-min px-1">
                      {images.map((img, index) => (
                        <button 
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ease-out 
                            ${activeIndex === index 
                              ? 'ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark scale-105 opacity-100 shadow-lg' 
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

                {/* --- Right Column: Purchase Details --- */}
                {/* Container dinâmico com borda e efeito para "Melhor Oferta" */}
                <div 
                  className={`flex flex-col gap-6 relative transition-all duration-500 ease-out rounded-3xl ${
                    isBestSeller 
                      ? 'p-6 sm:p-8 border-2 border-green-500 shadow-[0_0_50px_-10px_rgba(34,197,94,0.3)] bg-green-500/5 animate-border-glow' 
                      : 'p-0 border-2 border-transparent'
                  }`}
                >
                  
                  {/* Badge "Oferta Mais Vendida" (Apenas se for 2 kits) */}
                  {isBestSeller && (
                    <div className="absolute -top-5 right-4 sm:right-8 z-20">
                      <div className="relative group cursor-default">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-green-500 rounded-lg blur opacity-75 animate-pulse"></div>
                        {/* Content */}
                        <div className="relative px-4 py-2 bg-green-600 rounded-lg shadow-xl flex items-center gap-2 animate-neon-pulse">
                          <span className="material-symbols-outlined text-white text-sm">local_fire_department</span>
                          <span className="text-white font-black text-xs uppercase tracking-widest whitespace-nowrap">
                            Oferta Mais Vendida
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PageHeading */}
                  <div className="flex flex-wrap justify-between gap-3">
                    <div className="flex min-w-72 flex-col gap-2">
                      <p className="text-gray-800 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Kit de Facas Profissionais Everhealth™</p>
                      <p className="text-gray-600 dark:text-[#a69cba] text-base font-normal leading-normal">A precisão dos chefs na sua cozinha. Aproveite essa oferta por tempo limitado.</p>
                    </div>
                  </div>
                  
                  {/* Price & Installments (Dynamic) */}
                  <div className="flex flex-col gap-1">
                    <h1 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-bold leading-tight tracking-[-0.015em] text-left">
                      R$ {currentProduct.price}
                    </h1>
                    <p className="text-primary text-lg font-bold">
                      ou 12x de R$ {currentProduct.installment}
                    </p>
                  </div>
                  
                  {/* Quantity */}
                  <div className="flex items-center gap-4 bg-transparent min-h-14 justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center rounded-lg shrink-0 size-10 transition-colors ${isBestSeller ? 'bg-green-500/20 text-green-400' : 'bg-black/5 dark:bg-white/5 text-gray-700 dark:text-white'}`}>
                        <span className="material-symbols-outlined">package_2</span>
                      </div>
                      <p className={`text-base font-medium leading-normal flex-1 truncate ${isBestSeller ? 'text-green-400 font-bold' : 'text-gray-800 dark:text-white'}`}>
                        {quantity === 1 ? '1 Kit (6 Peças)' : `${quantity} Kits (${quantity * 6} Peças)`}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <div className="flex items-center gap-2 text-gray-800 dark:text-white">
                        <button onClick={decrement} className="text-base font-medium leading-normal flex h-8 w-8 items-center justify-center rounded-full bg-black/10 dark:bg-white/10 cursor-pointer hover:bg-black/20 dark:hover:bg-white/20 transition-colors">-</button>
                        <input 
                          className="text-base font-medium leading-normal w-8 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" 
                          type="number" 
                          value={quantity}
                          readOnly
                        />
                        <button onClick={increment} className="text-base font-medium leading-normal flex h-8 w-8 items-center justify-center rounded-full bg-black/10 dark:bg-white/10 cursor-pointer hover:bg-black/20 dark:hover:bg-white/20 transition-colors">+</button>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3">
                    
                    {/* Frete Grátis Badge */}
                    <div className="flex items-center gap-2 pb-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold tracking-wide uppercase">
                        <span className="material-symbols-outlined text-sm">local_shipping</span>
                        Frete Grátis
                      </div>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        para todo o Brasil
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button 
                        onClick={handleBuyClick}
                        className={`flex-1 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 bg-[#25D366] hover:bg-[#20b858] shadow-[#25D366]/20`}
                      >
                        <span className="truncate">
                          {isBraipActive ? "Comprar (Entrega Ativada)" : "Comprar Agora"}
                        </span>
                      </button>
                      
                      <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MSG_SUPPORT_GENERAL}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-black/10 dark:bg-white/10 text-gray-800 dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
                      >
                        <span className="truncate">Suporte</span>
                      </a>
                    </div>
                    
                    {/* Botão de Ajuda / Problemas */}
                    <button 
                      onClick={() => setIsHelpModalOpen(true)}
                      className="mt-1 w-full flex items-center justify-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all py-2 px-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 group"
                    >
                      <span className="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-primary transition-colors">help_outline</span>
                      <span>Problemas com a compra?</span>
                    </button>
                  </div>

                  {/* Security Badges */}
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                    <div className="flex flex-col">
                      <p className="text-gray-800 dark:text-white font-bold">Compra 100% Segura</p>
                      <p className="text-gray-600 dark:text-[#a69cba] text-sm">Pague somente ao receber o produto na sua casa.</p>
                    </div>
                  </div>
                  
                  {/* Product Details Accordion */}
                  <div className="flex flex-col gap-2 pt-6">
                    <div className="border-b border-black/10 dark:border-white/10 py-4">
                      <details className="group" open={isDetailsOpen} onToggle={(e) => setIsDetailsOpen(e.currentTarget.open)}>
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                          <span className="text-lg font-bold text-gray-800 dark:text-white">O que vem na caixa</span>
                          <span className="transition-transform transform group-open:rotate-180">
                            <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">expand_more</span>
                          </span>
                        </summary>
                        <ul className="text-gray-600 dark:text-[#a69cba] mt-4 list-disc list-inside space-y-2">
                          <li>1 Faca Cutelo</li>
                          <li>1 Faca do Chef (8 polegadas)</li>
                          <li>1 Descascador de Legumes</li>
                          <li>1 Faca de Fatiar/Pão</li> 
                          <li>1 Tesoura de Cozinha</li>
                          <li>1 Faca de Legumes</li>
                          <li>1 Caixa premium para presente</li>
                        </ul>
                      </details>
                    </div>
                    <div className="border-b border-black/10 dark:border-white/10 py-4">
                      <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                          <span className="text-lg font-bold text-gray-800 dark:text-white">Especificações Técnicas</span>
                          <span className="transition-transform transform group-open:rotate-180">
                            <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">expand_more</span>
                          </span>
                        </summary>
                        <div className="text-gray-600 dark:text-[#a69cba] mt-4 space-y-2">
                          <p><strong>Material da Lâmina:</strong> Aço de Carbono</p>
                          <p><strong>Dureza da Lâmina:</strong> 58±2 HRC</p>
                          <p><strong>Material do Cabo:</strong> polímero de alta resistência” polida</p>
                          <p><strong>Ângulo do Fio:</strong> 15° por lado</p>
                        </div>
                      </details>
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

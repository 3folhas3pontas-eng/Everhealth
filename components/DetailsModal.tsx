
import React, { useState, useEffect } from 'react';

type Tab = 'kit' | 'features' | 'craftsmanship';

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: Tab;
  onBuy: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ isOpen, onClose, initialTab, onBuy }) => {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  // Reset tab when modal opens
  useEffect(() => {
    if (isOpen) setActiveTab(initialTab);
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'kit', label: 'O Kit Completo', icon: 'inventory_2' },
    { id: 'features', label: 'Características', icon: 'verified' },
    { id: 'craftsmanship', label: 'Artesanato', icon: 'handyman' },
  ];

  const content = {
    kit: {
      title: 'O Que Você Recebe',
      description: 'Um conjunto completo projetado para cobrir todas as necessidades da sua cozinha, do corte delicado ao trabalho pesado.',
      image: 'https://i.imgur.com/SLK2BMz.jpeg',
      items: [
        'Faca do Chef (8")',
        'Faca Cutelo',
        'Faca de Pão/Serrilha',
        'Faca de Legumes',
        'Tesoura de Cozinha Multifuncional',
        'Descascador de Cerâmica Premium',
        'Caixa de Apresentação Exclusiva'
      ]
    },
    features: {
      title: 'Especificações de Elite',
      description: 'Engenharia de precisão para performance inigualável.',
      image: 'https://i.imgur.com/9bDQosV.jpeg',
      specs: [
        { label: 'Material da Lâmina', value: 'Aço de Carbono 7CR17' },
        { label: 'Dureza', value: '58±2 HRC (Rockwell)' },
        { label: 'Acabamento', value: 'Padrão Damasco Laser' },
        { label: 'Cabo', value: 'Ergonômico Antiderrapante' },
        { label: 'Afiação', value: '15° por lado (Navalha)' }
      ]
    },
    craftsmanship: {
      title: 'Forjado para Perfeição',
      description: 'Cada faca passa por um rigoroso processo de acabamento manual.',
      image: 'https://i.imgur.com/0exZbvZ.jpeg',
      text: 'Nossas lâminas combinam técnicas tradicionais de forjamento com tecnologia moderna. O tratamento térmico preciso garante que o fio se mantenha afiado por muito mais tempo, enquanto o design balanceado reduz a fadiga durante o uso prolongado.'
    }
  };

  const activeContent = content[activeTab];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#161022] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[85vh] md:h-[600px] animate-fade-in">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 md:hidden p-2 bg-black/50 text-white rounded-full"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Image Side */}
        <div className="w-full md:w-1/2 h-48 md:h-full relative bg-black shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#161022] to-transparent z-10"></div>
          <img 
            src={activeContent.image} 
            alt={activeContent.title}
            className="w-full h-full object-cover opacity-90 transition-all duration-500 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 flex flex-col h-full bg-[#161022]">
          {/* Tabs Header */}
          <div className="flex border-b border-white/5 overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 px-4 text-sm font-bold transition-all whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'text-primary border-b-2 border-primary bg-white/5' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">{activeContent.title}</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">{activeContent.description}</p>

            {activeTab === 'kit' && (
              <ul className="grid gap-3">
                {content.kit.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-lg border border-white/5 transition-colors hover:bg-white/10">
                    <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'features' && (
              <div className="space-y-4">
                {content.features.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-sm">{spec.label}</span>
                    <span className="text-white font-bold text-sm text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'craftsmanship' && (
              <div className="text-white/80 space-y-4 leading-relaxed">
                <p>{content.craftsmanship.text}</p>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mt-4">
                  <div className="flex items-center gap-2 text-primary font-bold mb-1">
                    <span className="material-symbols-outlined">award_star</span>
                    <span>Garantia de Mestre</span>
                  </div>
                  <p className="text-sm text-gray-300">Cada peça é inspecionada individualmente para assegurar zero imperfeições.</p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/5 flex justify-end gap-3 mt-auto">
            <button 
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg text-white/70 font-bold hover:bg-white/5 transition-colors text-sm"
            >
              Fechar
            </button>
            <button 
              onClick={onBuy}
              className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-sm flex items-center gap-2"
            >
              <span>Eu Quero</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
      `}</style>
    </div>
  );
};

export default DetailsModal;

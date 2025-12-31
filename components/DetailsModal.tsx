
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

  useEffect(() => {
    if (isOpen) setActiveTab(initialTab);
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'kit', label: 'O Kit Completo', icon: 'inventory_2' },
    { id: 'features', label: 'Especificações', icon: 'verified' },
    { id: 'craftsmanship', label: 'Durabilidade', icon: 'handyman' },
  ];

  const content = {
    kit: {
      title: 'Arsenal Completo',
      description: 'Ferramentas específicas para cada desafio na sua cozinha ou churrasqueira.',
      image: 'https://i.imgur.com/SLK2BMz.jpeg',
      items: [
        'Faca do Chef: A versátil para o dia a dia.',
        'Cutelo Profissional: Para cortes pesados e precisos.',
        'Faca de Pão: Corte limpo e sem amassar.',
        'Faca de Frutas: Agilidade e detalhe para o preparo.',
        'Tesoura Multifuncional: O suporte que toda cozinha precisa.',
        'Descascador de Cerâmica: Agilidade para legumes e vegetais.',
        'Estojo Premium de Apresentação Everhealth™'
      ]
    },
    features: {
      title: 'Ficha Técnica',
      description: 'Materiais certificados para alta performance sanitária e mecânica.',
      image: 'https://i.imgur.com/9bDQosV.jpeg',
      specs: [
        { label: 'Material da Lâmina', value: 'Aço Carbono Especial 7CR17' },
        { label: 'Dureza', value: '58±2 HRC (Fio Duradouro)' },
        { label: 'Acabamento', value: 'Revestimento Antiaderente' },
        { label: 'Cabo', value: 'Polímero de Alta Densidade (Texturizado)' },
        { label: 'Perfil', value: 'Ergonomia de Pegada Firme' }
      ]
    },
    craftsmanship: {
      title: 'Higiene e Conforto',
      description: 'Projetado para quem cozinha de verdade.',
      image: 'https://i.imgur.com/0exZbvZ.jpeg',
      text: 'Nossos cabos em Polímero de Alta Densidade são injetados diretamente na espiga da lâmina. Isso significa zero frestas para acúmulo de sujeira ou bactérias. Além de serem imunes à umidade, oferecem uma textura antiderrapante que garante controle total, mesmo quando a mão está suja de gordura. É o padrão de segurança exigido em cozinhas profissionais, agora na sua casa.'
    }
  };

  const activeContent = content[activeTab];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl bg-[#161022] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[85vh] md:h-[600px] animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 z-20 md:hidden p-2 bg-black/50 text-white rounded-full">
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="w-full md:w-1/2 h-48 md:h-full relative bg-black shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#161022] to-transparent z-10"></div>
          <img src={activeContent.image} alt={activeContent.title} className="w-full h-full object-cover opacity-90 transition-all" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col h-full bg-[#161022]">
          <div className="flex border-b border-white/5 overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 px-4 text-sm font-bold transition-all whitespace-nowrap
                  ${activeTab === tab.id ? 'text-primary border-b-2 border-primary bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">{activeContent.title}</h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">{activeContent.description}</p>

            {activeTab === 'kit' && (
              <ul className="grid gap-3">
                {content.kit.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-lg border border-white/5">
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
              <div className="text-white/80 space-y-4 leading-relaxed text-sm md:text-base">
                <p>{content.craftsmanship.text}</p>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mt-4">
                  <div className="flex items-center gap-2 text-primary font-bold mb-1">
                    <span className="material-symbols-outlined">shield_check</span>
                    <span>Padrão Sanitário Profissional</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-300">Resistente à gordura e umidade. Muito mais fácil de lavar e conservar.</p>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-white/5 flex justify-end gap-3 mt-auto">
            <button onClick={onClose} className="px-6 py-2.5 rounded-lg text-white/70 font-bold hover:bg-white/5 transition-colors text-sm">Fechar</button>
            <button onClick={onBuy} className="px-6 py-2.5 rounded-lg bg-[#25D366] text-white font-bold hover:bg-[#20b858] transition-all shadow-lg shadow-[#25D366]/20 text-sm flex items-center gap-2">
              <span>Sim! Quero Facas que Cortam de Verdade</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;

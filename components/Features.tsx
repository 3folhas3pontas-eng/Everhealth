
import React from 'react';

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex flex-1 flex-col gap-4 rounded-xl border border-white/10 bg-white/5 dark:bg-slate-900/40 p-6 text-center items-center shadow-lg transition-all duration-300 hover:border-primary/50 hover:bg-white/10 dark:hover:bg-slate-900/60">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
      <span className="material-symbols-outlined text-4xl">{icon}</span>
    </div>
    <div className="flex flex-col gap-1">
      <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
        {description}
      </p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const featureList = [
    {
      icon: "science",
      title: "Lâmina Blindada que Não Gruda",
      description: "Nada pior que a carne grudando na faca. Nosso revestimento garante que cada fatia deslize suavemente, sem esforço."
    },
    {
      icon: "diamond",
      title: "Fio de Navalha de Longa Duração",
      description: "Chega de amolar a faca a cada churrasco. O tratamento térmico do aço mantém o corte cirúrgico por muito mais tempo."
    },
    {
      icon: "front_hand",
      title: "Pegada Firme e Segura (Mesmo Molhada)",
      description: "Tenha controle total. O cabo anatômico não escorrega, evitando acidentes e garantindo firmeza até nos cortes mais pesados."
    },
    {
      icon: "restaurant_menu",
      title: "Arsenal Completo para Sua Cozinha",
      description: "Você não compra apenas uma faca, mas um kit profissional com cutelo, faca de pão, frutas, tesoura e descascador para qualquer desafio."
    }
  ];

  return (
    <div className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-6 text-center items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl max-w-3xl">
            O Segredo do Corte Perfeito em Cada Detalhe
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal max-w-3xl">
            Descubra a combinação de design moderno, materiais de alta qualidade e engenharia de precisão que torna o nosso kit de facas essencial para qualquer cozinha.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-0">
        {featureList.map((feature, index) => (
          <FeatureItem 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;

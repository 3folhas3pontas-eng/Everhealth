
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
      title: "Lâmina Blindada",
      description: "Aço Carbono de alta qualidade com tratamento antiaderente. A gordura não gruda e o corte desliza com precisão cirúrgica."
    },
    {
      icon: "diamond",
      title: "Fio de Navalha",
      description: "Afiação profissional de fábrica que atravessa carnes, ossos e congelados. Pronta para o uso pesado no churrasco."
    },
    {
      icon: "front_hand",
      title: "Pegada Antiderrapante",
      description: "Cabos em Polímero de Alta Densidade com textura soft-touch. Segurança total mesmo com as mãos molhadas ou sujas de gordura."
    },
    {
      icon: "health_and_safety",
      title: "100% Higiênico",
      description: "Diferente da madeira, nosso material não absorve umidade nem acumula bactérias. Limpeza rápida e durabilidade vitalícia."
    }
  ];

  return (
    <div className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-6 text-center items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl max-w-3xl">
            A Engenharia que sua Cozinha Merece
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal max-w-3xl">
            Unimos a tradição da cutelaria profissional com materiais modernos para entregar um kit que não perde o fio e não te deixa na mão.
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

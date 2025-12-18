
import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Philosophy from './Philosophy';
import Features from './Features';
import ExcellenceDetail from './ExcellenceDetail';
import PrecisionInspiration from './PrecisionInspiration';
import QualityComparison from './QualityComparison';
import WhyChooseUs from './WhyChooseUs';
import Footer from './Footer';
import FAQ from './FAQ';
import Guarantee from './Guarantee';
import DetailsModal from './DetailsModal';
import { useRouter } from './RouterContext';

const LandingPage: React.FC = () => {
  const { navigate } = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'kit' | 'features' | 'craftsmanship'>('kit');

  const handleOpenDetails = (tab: 'kit' | 'features' | 'craftsmanship') => {
    setActiveTab(tab);
    setModalOpen(true);
  };

  const handleBuyFromModal = () => {
    setModalOpen(false);
    navigate('/comprar');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      {/* Top Banner Estratégico */}
      <div className="sticky top-0 z-[100] w-full bg-yellow-400 py-2 px-4 shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-45 -translate-x-full animate-[shimmer_2.5s_infinite]"></div>
        <p className="text-black text-center font-black text-[10px] md:text-sm uppercase tracking-tighter flex items-center justify-center gap-2">
          🔥 <span className="underline decoration-black decoration-1 underline-offset-2">QUEIMA TOTAL SÓ HOJE</span> — LIQUIDAÇÃO DE ESTOQUE ATÉ MEIA-NOITE!
        </p>
      </div>

      <DetailsModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialTab={activeTab}
        onBuy={handleBuyFromModal}
      />
      
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
            <Header onOpenDetails={handleOpenDetails} />
            
            <main className="flex flex-col gap-10 md:gap-16 mt-5">
              <Hero />
              <Philosophy />
              <Features />
              <ExcellenceDetail />
              <PrecisionInspiration />
              <WhyChooseUs />
              <QualityComparison />
              <Guarantee />
              <FAQ/>
            </main>
            
            <Footer />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-45deg); }
          100% { transform: translateX(250%) skewX(-45deg); }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;

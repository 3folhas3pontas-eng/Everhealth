
import React from 'react';
import Logo from './Logo';
import { useRouter } from './RouterContext';

interface HeaderProps {
  onOpenDetails: (tab: 'kit' | 'features' | 'craftsmanship') => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDetails }) => {
  const { navigate } = useRouter();

  const handleNavClick = (tab: 'kit' | 'features' | 'craftsmanship') => (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenDetails(tab);
  };

  return (
    <header className="sticky top-5 z-50 flex items-center justify-between whitespace-nowrap border border-solid border-white/10 bg-background-dark/50 backdrop-blur-md rounded-lg px-6 py-3 transition-all duration-300">
      <div 
        className="flex items-center gap-4 text-white cursor-pointer hover:opacity-80 transition-opacity" 
        onClick={() => navigate('/')}
      >
        <Logo className="size-6" clipId="header-logo" />
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Everhealth™</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-center gap-8">
        <div className="flex items-center gap-9">
          <button 
            onClick={handleNavClick('kit')}
            className="text-white/80 hover:text-white transition-all text-sm font-medium leading-normal hover:scale-105 relative group bg-transparent border-none cursor-pointer"
          >
            O Kit
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={handleNavClick('features')}
            className="text-white/80 hover:text-white transition-all text-sm font-medium leading-normal hover:scale-105 relative group bg-transparent border-none cursor-pointer"
          >
            Características
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={handleNavClick('craftsmanship')}
            className="text-white/80 hover:text-white transition-all text-sm font-medium leading-normal hover:scale-105 relative group bg-transparent border-none cursor-pointer"
          >
            Artesanato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
      <button 
        onClick={() => navigate('/comprar')}
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 transition-all duration-300 text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
      >
        <span className="truncate">Comprar Agora</span>
      </button>
    </header>
  );
};

export default Header;

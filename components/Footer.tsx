
import React from 'react';
import { useRouter } from './RouterContext';

const Footer: React.FC = () => {
  const { navigate } = useRouter();

  // Mensagem otimizada para ser convidativa e direta
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais detalhes sobre o Kit de Facas Profissionais Everhealth™.");
  
  // Número atualizado
  const whatsappNumber = "5511976285899"; 

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* CTA Section Component */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24 @container">
          <div className="flex flex-col justify-end gap-6 px-4 py-10 sm:gap-8 sm:px-10 sm:py-20 text-center">
            <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-extrabold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-tighter max-w-3xl mx-auto">
              Sua jornada culinária começa aqui
            </h1>
            <div className="flex justify-center">
              <button 
                onClick={() => navigate('/comprar')}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#25D366] text-white text-base font-bold leading-normal tracking-wide transition-all hover:bg-[#20b858] hover:scale-105"
              >
                <span className="truncate">Quero Pagar na Entrega</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <footer className="w-full bg-gradient-to-t from-[#000000] to-[#1A1A1A] text-white rounded-t-3xl md:rounded-t-[3rem] overflow-hidden shadow-2xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Column 1: Branding */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-white">Everhealth™</h3>
              <p className="text-gray-400 text-sm">A precisão encontra a arte. Facas forjadas para a excelência culinária.</p>
            </div>
            {/* Column 2: Navigation */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white">Empresa</h4>
              <nav className="flex flex-col gap-2">
                <a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Sobre Nós</a>
                <a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Garantia</a>
              </nav>
            </div>
            {/* Column 3: Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white">Legal</h4>
              <nav className="flex flex-col gap-2">
                <a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Termos de Uso</a>
                <a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Política de Privacidade</a>
              </nav>
            </div>
            {/* Column 4: Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white">Suporte</h4>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 w-full flex items-center justify-center gap-3 px-6 py-4 text-base font-bold bg-[#25D366] text-white rounded-xl hover:bg-[#20b858] transition-all duration-300 shadow-lg shadow-[#25D366]/25 hover:-translate-y-1 hover:shadow-[#25D366]/40"
              >
                <span className="material-symbols-outlined">chat</span>
                Fale Conosco
              </a>
              <p className="text-xs text-gray-500 text-center md:text-left">Atendimento direto via WhatsApp</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 justify-center md:justify-end flex-wrap">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-400" style={{ fontSize: '20px' }}>lock</span>
                <span className="text-xs text-gray-400">Ambiente Seguro SSL</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

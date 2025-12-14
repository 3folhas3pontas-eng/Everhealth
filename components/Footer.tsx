
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
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide transition-colors hover:bg-primary/90"
              >
                <span className="truncate">Adquira sua Everhealth™</span>
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
            {/* Column 4: Contact (MODIFICADO) */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white">Suporte</h4>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 w-full flex items-center justify-center gap-3 px-6 py-4 text-base font-bold bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-1 hover:shadow-primary/40"
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
              <div className="flex items-center gap-3" aria-label="Ícones de métodos de pagamento">
                <svg className="h-5 w-auto fill-gray-400" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg"><path d="M35.222 5.584v.056h-5.228c-1.01 0-1.83.82-1.83 1.83v10.038c0 1.01.82 1.83 1.83 1.83h5.228a1.83 1.83 0 001.83-1.83V7.47a1.83 1.83 0 00-1.83-1.83v-.056z" fillOpacity=".65"></path><path d="M35.222 5.584v.056h-5.228c-1.01 0-1.83.82-1.83 1.83v10.038c0 1.01.82 1.83 1.83 1.83h5.228a1.83 1.83 0 001.83-1.83V7.47a1.83 1.83 0 00-1.83-1.83v-.056z" fill="#fff"></path><path d="M29.938 18.283c-.505 0-.915-.41-.915-.915V8.58c0-.505.41-.915.915-.915h5.34c.505 0 .915.41.915.915v8.788c0 .505-.41.915-.915.915h-5.34z" fill="#0070E0"></path><path d="M30.707 13.064c0-.74.596-1.336 1.336-1.336.74 0 1.336.596 1.336 1.336 0 .74-.596 1.336-1.336 1.336-.74 0-1.336-.596-1.336-1.336" fill="#fff"></path><path d="M34.8 15.283a2.537 2.537 0 01-2.072-1.037c.562-.27.933-.836.933-1.49 0-.933-.76-1.693-1.693-1.693-.933 0-1.693.76-1.693 1.693 0 .654.37 1.22.932 1.49a2.537 2.537 0 01-2.072 1.037 2.537 2.537 0 012.072-1.036 2.537 2.537 0 012.073 1.036z" fill="#FFC400"></path><path d="M22.13 5.584v.056H16.9c-1.01 0-1.83.82-1.83 1.83v10.038c0 1.01.82 1.83 1.83 1.83h5.23c1.01 0 1.83-.82 1.83-1.83V7.47a1.83 1.83 0 00-1.83-1.83v-.056z" fillOpacity=".65"></path><path d="M22.13 5.584v.056H16.9c-1.01 0-1.83.82-1.83 1.83v10.038c0 1.01.82 1.83 1.83 1.83h5.23c1.01 0 1.83-.82 1.83-1.83V7.47a1.83 1.83 0 00-1.83-1.83v-.056z" fill="#fff"></path><path d="M16.844 18.283c-.505 0-.915-.41-.915-.915V8.58c0-.505.41-.915.915-.915h5.34c.505 0 .915.41.915.915v8.788c0 .505-.41.915-.915.915h-5.34z" fill="#FF5F00"></path><path d="M19.514 13.064c0-2.14 1.74-3.88 3.88-3.88.358 0 .704.05 1.03.138-1.055-1.082-2.73-1.28-4.144-.483-1.413.796-2.06 2.564-1.503 4.144.557 1.58 2.14 2.65 3.852 2.65.626 0 1.22-.122 1.76-.34-.99-.9-1.876-2.14-1.876-3.6z" fill="#EB001B"></path><path d="M25.32 12.724c.732-1.22 1.135-2.65 1.135-4.144 0-.39-.033-.78-.096-1.168-1.547.243-2.923 1.168-3.788 2.458-.865 1.29-1.22 2.846-1.03 4.426.19 1.58.915 3.01 1.97 4.022.382-.76.626-1.61.626-2.508 0-1.324-.488-2.537-1.306-3.476a3.89 3.89 0 012.488-1.01z" fill="#FFC400"></path><path d="M9.196 5.584v.056H3.968c-1.01 0-1.83.82-1.83 1.83v10.038c0 1.01.82 1.83 1.83 1.83h5.228c1.01 0 1.83-.82 1.83-1.83V7.47a1.83 1.83 0 00-1.83-1.83v-.056z" fillOpacity=".65"></path><path d="M9.196 5.584v.056H3.968c-1.01 0-1.83.82-1.83 1.83v10.038c0 1.01.82 1.83 1.83 1.83h5.228c1.01 0 1.83-.82 1.83-1.83V7.47a1.83 1.83 0 00-1.83-1.83v-.056z" fill="#fff"></path><path d="M3.912 18.283c-.505 0-.915-.41-.915-.915V8.58c0-.505.41-.915.915-.915h5.34c.505 0 .915.41.915.915v8.788c0 .505-.41.915-.915.915H3.912z" fill="#222"></path><path d="M6.34 9.873c-.626 0-1.22.488-1.547 1.22-.326.732-.212 1.58.275 2.17.488.59 1.253.76 1.937.52l.212-.082v-2.344a1.88 1.88 0 00-.877-1.484zm3.037 3.19c0 .732-.326 1.428-.877 1.876-.55.45-1.253.66-1.97.55l-2.072-.55c-.716-.19-1.286-.76-1.514-1.484-.228-.724-.082-1.514.382-2.072.464-.558 1.168-.846 1.876-.79l2.072.55c.716.19 1.286.76 1.514 1.484.228.724.082 1.514-.382 2.072a3.02 3.02 0 01-.582.365zM0 10.117c0-2.618 2.115-4.733 4.733-4.733 2.618 0 4.733 2.115 4.733 4.733 0 2.618-2.115 4.733-4.733 4.733C2.115 14.85 0 12.735 0 10.117z" fill="#00A1DF"></path><path d="M2.366 10.117c0-1.309 1.056-2.366 2.367-2.366 1.31 0 2.366 1.057 2.366 2.366 0 1.31-1.056 2.367-2.366 2.367-1.311 0-2.367-1.057-2.367-2.367z" fill="#0072AF"></path></svg>
                <svg className="h-5 w-auto" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8S174 70.7 159.5 160h177zM496 160c0-35.3-28.7-64-64-64h-17.5c-9.9 59.4-40.4 112.2-80.1 144h225.1c35.3 0 64-28.7 64-64zM16 160c0 35.3 28.7 64 64 64h225.1c-39.8-31.8-70.2-84.6-80.1-144H80c-35.3 0-64 28.7-64 64zM248 456c39.8 0 74-62.7 88.5-152h-177C174 393.3 208.2 456 248 456zM420.5 304h-105c-11.4 69.3-37.5 128.8-77.4 163.4c71.2 14.8 141.2-22.3 174-84.5c11-21.2 16.5-44.5 17.8-68.9zM36.1 382.9c32.8 62.2 102.8 99.3 174 84.5c-39.8-34.6-66-94.2-77.4-163.4h-105c1.4 24.4 6.8 47.8 17.8 68.9z" fill="#a9a9a9"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

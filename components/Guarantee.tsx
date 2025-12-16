
import React from 'react';
import { useRouter } from './RouterContext';

const Guarantee: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="flex items-center justify-center py-10 md:py-20 px-4">
      <div className="bg-white dark:bg-[#1C1C1C] rounded-3xl p-8 sm:p-12 max-w-5xl w-full text-center shadow-2xl relative overflow-hidden border border-slate-200 dark:border-white/5">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 blur-3xl rounded-full opacity-50 dark:opacity-40"></div>
        <div className="relative z-10">
          <span className="inline-block bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            Oferta Especial
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Garanta Sua <span className="text-primary">Everhealth™</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Invista em qualidade que dura uma vida inteira. Satisfação garantida ou seu dinheiro de volta.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 text-slate-900 dark:text-gray-100 flex flex-col items-center hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Garantia de Qualidade</h3>
              <p className="text-sm text-slate-500 dark:text-gray-400">Proteção total contra defeitos.</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 text-slate-900 dark:text-gray-100 flex flex-col items-center hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">payments</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Pagamento na Entrega</h3>
              <p className="text-sm text-slate-500 dark:text-gray-400">Pague somente ao receber o pedido.</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 text-slate-900 dark:text-gray-100 flex flex-col items-center hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">credit_card</span>
              </div>
              <h3 className="font-bold text-lg mb-1">12x Sem Juros</h3>
              <p className="text-sm text-slate-500 dark:text-gray-400">Parcele em até 12x no cartão.</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 text-slate-900 dark:text-gray-100 flex flex-col items-center hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Entrega Rápida</h3>
              <p className="text-sm text-slate-500 dark:text-gray-400">Receba em até 7 dias úteis.</p>
            </div>
            
          </div>
          <button 
            onClick={() => navigate('/comprar')}
            className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-lg py-4 px-12 rounded-xl shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)]"
          >
            Comprar Agora
          </button>
          <p className="text-sm text-slate-500 dark:text-gray-400 mt-6 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-base">lock</span>
            Compra 100% segura • Satisfação garantida
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;

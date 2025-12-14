import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="relative flex flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-10 sm:py-20">
          <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1">
            <div className="flex flex-col items-center text-center px-4 pb-8 pt-5">
              <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tighter">Perguntas Frequentes</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-base sm:text-lg max-w-2xl">
                Encontre respostas para as dúvidas mais comuns sobre nosso kit de facas profissional.
              </p>
            </div>
            <div className="flex flex-col px-4">
              {/* Otimização: Uso de defaultOpen={true} para evitar componentes controlados sem handler */}
              <details className="flex flex-col border-b border-b-gray-200 dark:border-b-white/10 py-3 group" open>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Como funciona a entrega?</p>
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="pb-3">
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed">
                    Nossa entrega é realizada por transportadoras parceiras em todo o Brasil. O prazo médio é de 1 a 5 dias úteis, e você Você poderá selecionar a data exata da entrega.
                  </p>
                </div>
              </details>
              <details className="flex flex-col border-b border-b-gray-200 dark:border-b-white/10 py-3 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">O kit realmente é profissional?</p>
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="pb-3">
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed">
                    Sim. Nossas facas são forjadas com Aço de Carbono, garantindo um fio duradouro e precisão de corte superior. São desenvolvidas e testadas por chefs profissionais para atender às mais altas exigências da culinária.
                  </p>
                </div>
              </details>
              <details className="flex flex-col border-b border-b-gray-200 dark:border-b-white/10 py-3 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Tem garantia?</p>
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="pb-3">
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed">
                    Oferecemos garantia de qualidade contra defeitos de fabricação. Confiamos na qualidade e durabilidade de nossos produtos e queremos que você tenha total segurança e satisfação com sua compra.
                  </p>
                </div>
              </details>
              <details className="flex flex-col border-b border-b-gray-200 dark:border-b-white/10 py-3 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Quais são as formas de pagamento?</p>
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="pb-3">
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed">
                    Aceitamos as principais bandeiras de cartão de crédito em até 12x, boleto bancário e PIX. Todos os pagamentos são processados em um ambiente seguro e criptografado para sua proteção.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
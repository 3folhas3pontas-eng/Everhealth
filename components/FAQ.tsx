
import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="relative flex flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-10 sm:py-20">
          <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1">
            <div className="flex flex-col items-center text-center px-4 pb-8 pt-5">
              <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tighter">Dúvidas Comuns</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-base sm:text-lg max-w-2xl">
                Tudo o que você precisa saber sobre o Kit Everhealth™ antes de garantir o seu.
              </p>
            </div>
            <div className="flex flex-col px-4">
              <details className="flex flex-col border-b border-b-gray-200 dark:border-b-white/10 py-3 group" open>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Como funciona o Pagamento na Entrega?</p>
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="pb-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  É a forma mais segura de comprar online. Você faz o pedido aqui no site e só realiza o pagamento para o entregador quando o produto estiver na sua mão. Aceitamos cartão, pix ou dinheiro no ato da entrega.
                </div>
              </details>
              
              <details className="flex flex-col border-b border-b-gray-200 dark:border-b-white/10 py-3 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">O kit realmente é profissional?</p>
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="pb-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Sim. O design é inspirado na cutelaria profissional de alta performance, focado em retenção de fio e facilidade de manutenção. São ferramentas forjadas para suportar o uso diário intenso, mantendo a precisão que um chef ou churrasqueiro exige.
                </div>
              </details>

              <details className="flex flex-col border-b border-b-gray-200 dark:border-b-white/10 py-3 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">As facas perdem o fio rápido?</p>
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="pb-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Não. Usamos Aço Carbono com tratamento térmico especial que garante uma dureza superior. Se usadas corretamente em superfícies de madeira ou polímero, elas mantêm o fio de navalha por meses antes de precisarem de um simples retoque com chaira.
                </div>
              </details>

              <details className="flex flex-col border-b border-b-gray-200 dark:border-b-white/10 py-3 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Qual a garantia que eu tenho?</p>
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="pb-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Conforme o Código de Defesa do Consumidor, você tem 7 dias de garantia incondicional. Se você receber o kit e não achar que ele corta tudo o que prometemos, nós devolvemos 100% do seu dinheiro. Sem perguntas.
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

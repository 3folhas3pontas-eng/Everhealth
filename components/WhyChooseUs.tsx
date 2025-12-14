import React from 'react';
import { useRouter } from './RouterContext';

const WhyChooseUs: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="flex flex-col justify-center py-10 md:py-20 @container">
      {/* SectionHeader */}
      <div className="flex flex-col items-center w-full mb-12">
        <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tighter text-center">
          Por Que Escolher a Everhealth™?
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4 md:px-0">
        {/* Coluna 1: Imagem */}
        <div className="flex flex-col gap-4">
          <div 
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl shadow-lg"
            role="img"
            aria-label="Chef profissional cortando legumes com precisão usando uma faca Everhealth em uma cozinha moderna."
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3jSNWxpaPKDfyDZKxQNigVkICGTRuhE-gStP9sDo81GMDf2A-qiTJQ2fczGD9vZ_ANQvHP3m2YfkVNp0nG7Ty81ku8siJb-HsFLOfQREGK-tY0Sy5BN9JnIr0z7E1VhczlnquHge6impnSxzgKJTWe1ewxH8PNNbm7s69TI_-8PqUvMjudDtMZCZjwPkpDlWODfQql4TDCCiXDmcO-foIWbZfa_6gNeZgs36Xr_YgBL1oCEw53Rrb_SlIh0YL576JBhk0eTTob3xB")' }}
          ></div>
          <div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">Design e Precisão em Cada Corte</h3>
            <p className="text-slate-600 dark:text-[#a59abc] text-sm font-normal leading-normal">
              Nossas lâminas são forjadas para oferecer um equilíbrio perfeito e uma performance de corte inigualável.
            </p>
          </div>
        </div>

        {/* Coluna 2: Reviews */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">Avaliações de Nossos Clientes</h3>
            <p className="text-slate-600 dark:text-[#a59abc] text-sm">O que os especialistas e entusiastas dizem.</p>
          </div>
          
          <div className="flex flex-col gap-8">
            {/* Review 1 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
                  role="img"
                  aria-label="Avatar do Chef Profissional Alexandre Mattos"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAI-jsOA257e9kQKfKq1mCJFIOf_InLZgDsro_DP1BCGORnWyAoAoE0EYQ5hczWo3L_WbJlLLaCK9I6FR79FEU2CHMAqiFTbDbvm_oB0h_j2RYuRNii4uuAEees2JCUympdPYz78aF1OssZzdHti_1GXXSqZNzhI_c2xWT0A7c6RbpBzbNSjP_4-E9wg2vZkLTfqtk9XLnHpOl8GBZyOqmgfzk6eLnNf9O4b1jo5T2arTtzHA8CWW2a1feOtJ6e6Mcqk_fY7HAMMvdN")' }}
                ></div>
                <div>
                  <p className="text-slate-800 dark:text-white text-base font-medium leading-normal">Alexandre Mattos</p>
                  <p className="text-slate-500 dark:text-[#a59abc] text-sm font-normal leading-normal">Chef Profissional</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined text-sm text-[#A90000]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-slate-700 dark:text-white text-base font-normal leading-normal">
                "A qualidade e o equilíbrio destas facas transformaram minha rotina na cozinha. São verdadeiras obras de arte."
              </p>
            </div>

            {/* Review 2 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
                  role="img"
                  aria-label="Avatar da Amante da Culinária Juliana Costa"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA76vWsenehot50lxgBs5rPka0C8MEA6opOQrN5mwM3FhxN4cAvlthCSpayxBHqkQVrhNOBWK5svLdPTdtvJ1rn17IVsPt9ha9OqDS5BMT-NqAnSGtHtY3vhAgfhc915X_Ie_oRzH_w5D4SgENoRxM_2aXo2wJh_Y6zIV0wzS1rUIDmv4YQueh4o_fMmGeKQ5OZS3dWZnfO9bJ4NelsK8ocMK6rFnSa61y4N4FhaVDtGPM-5wJMEpOfB0exnCwW6-8yUwhntWB0kEDT")' }}
                ></div>
                <div>
                  <p className="text-slate-800 dark:text-white text-base font-medium leading-normal">Juliana Costa</p>
                  <p className="text-slate-500 dark:text-[#a59abc] text-sm font-normal leading-normal">Amante da Culinária</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined text-sm text-[#A90000]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-slate-700 dark:text-white text-base font-normal leading-normal">
                "Nunca pensei que uma faca pudesse fazer tanta diferença. O corte é preciso e o design é simplesmente deslumbrante."
              </p>
            </div>
          </div>
        </div>

        {/* Coluna 3: Feature Section */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">Sua Confiança é a Nossa Prioridade</h3>
            <p className="text-slate-600 dark:text-[#a59abc] text-sm">Oferecemos mais do que facas, oferecemos tranquilidade.</p>
          </div>
          
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-black/20 hover:bg-white/80 dark:hover:bg-black/30 transition-colors">
              <div className="text-[#A90000] mt-1">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-slate-800 dark:text-white text-base font-bold leading-tight">Mais de 100.000 Clientes Satisfeitos</h4>
                <p className="text-slate-600 dark:text-[#a59abc] text-sm font-normal leading-normal">Junte-se à nossa comunidade de chefs e entusiastas.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-black/20 hover:bg-white/80 dark:hover:bg-black/30 transition-colors">
              <div className="text-[#A90000] mt-1">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-slate-800 dark:text-white text-base font-bold leading-tight">Garantia de Qualidade Contra Defeitos</h4>
                <p className="text-slate-600 dark:text-[#a59abc] text-sm font-normal leading-normal">Confiamos na durabilidade e na qualidade superior de nossos produtos.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-black/20 hover:bg-white/80 dark:hover:bg-black/30 transition-colors">
              <div className="text-[#A90000] mt-1">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-slate-800 dark:text-white text-base font-bold leading-tight">Compra Segura e Entrega Premium</h4>
                <p className="text-slate-600 dark:text-[#a59abc] text-sm font-normal leading-normal">Sua experiência de compra é protegida do início ao fim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SingleButton */}
      <div className="flex px-4 py-12 justify-center mt-8">
        <button 
          onClick={() => navigate('/comprar')}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-[#A90000] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#8c0000] transition-colors shadow-lg hover:shadow-red-900/20 transform hover:-translate-y-0.5"
        >
          <span className="truncate">Descubra a Coleção Completa</span>
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
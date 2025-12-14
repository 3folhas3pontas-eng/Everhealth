import React from 'react';

const QualityComparison: React.FC = () => {
  return (
    <section className="flex flex-col justify-center py-10 md:py-20">
      <div className="layout-content-container flex flex-col max-w-6xl w-full mx-auto px-4 md:px-8">
        {/* SectionHeader */}
        <div className="w-full flex justify-center pb-8 md:pb-12">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight text-center">
            A Diferença Está no Corte
          </h2>
        </div>
        
        {/* Comparison Section */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 w-full items-center">
          {/* Divider Line for Desktop */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-slate-200/20 dark:bg-white/10 hidden lg:block"></div>
          
          {/* Left Panel: Frustration */}
          <div className="flex flex-col items-center px-0 lg:px-8 xl:px-16">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-300 dark:bg-slate-800 shadow-lg group">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105" 
                role="img"
                aria-label="Uma pessoa tentando, sem sucesso, cortar um tomate com uma faca cega, amassando o alimento."
                style={{ 
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCH6IHSeHA5DHJwnMzqzLJCQvm5nznBnFQVXsPCts8Pi1DBgwGxyigVQ1d_4cvx7GA291eBHyzAKPB5whLxEKwLqPQJFmmJcFNsBXUakAtgZrkkhWMGDO6o6PTzN2n6LiKD6LpUOHnqRHfaCpDAcbhAhAWCk4e-eJ5Of_0hE8_9kHAmya_gkyLxDUPLpo-vuZKC7sWKE5bQJXuEX0WYLd1FGYRRC6NtouUUjGd1gQSjBd-_EZffK429etHSGFundxjqy_GcLAyeVWjW")',
                  filter: 'grayscale(80%) contrast(1.1)' 
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-white text-2xl md:text-3xl font-bold tracking-tight">
                Saia da Frustração
              </h3>
            </div>
          </div>
          
          {/* Right Panel: Precision */}
          <div className="flex flex-col items-center px-0 lg:px-8 xl:px-16">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-300 dark:bg-slate-800 shadow-lg group">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105" 
                role="img"
                aria-label="Uma faca premium Imperial Blades cortando fatias finas e perfeitas de um tomate com facilidade e precisão."
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVXvgxaHuDl1ubsB56mkIeiOB35C_4NkHUTMW6EORPYjoFcGgzrvqRAOWmsoSH-tb5D0UGdj7FShGcIhLcnvpuVHWy7YXduwDPbmSCX2o2ab4ObPKB0B_A2ICfP-WEglmk5tSnJmaT1jJJW1OgwftvJUevdWUTvQKHTWwYGEXv7FkQDLHb8QL4nfA-ychDmmbQjBR4XsMzAE1VdV60yLvdHuQX8LUUt3S_2jnJhva5yggj9qWEYef4J0Diwp4DxxAh3RhSe_e4-kgf")' }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/20"></div>
              <h3 className="absolute bottom-6 right-6 text-white text-2xl md:text-3xl font-bold tracking-tight text-right">
                Experimente a Verdadeira Precisão
              </h3>
            </div>
          </div>
        </div>
        
        {/* SingleButton CTA */}
        <div className="flex pt-12 md:pt-16 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(89,13,242,0.5)] hover:shadow-[0_8px_25px_-4px_rgba(89,13,242,0.6)] hover:-translate-y-0.5">
            <span className="truncate">Descubra a Coleção Imperial</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QualityComparison;
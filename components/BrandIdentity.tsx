
import React from 'react';
import Logo from './Logo';

const BrandIdentity: React.FC = () => {
  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Nossa Identidade</h2>
        <p className="text-white/80 text-base font-normal leading-normal mt-2">Minimalista, geométrica e premium.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center justify-center p-8 bg-[#1f1b28] rounded-xl border border-[#423956]">
          <Logo className="size-20" clipId="brand-vertical" />
          <h3 className="mt-4 text-white font-bold">Logo Vertical</h3>
        </div>
        <div className="flex items-center justify-center p-8 bg-[#1f1b28] rounded-xl border border-[#423956]">
          <div className="flex items-center gap-4 text-white">
            <Logo className="size-10" clipId="brand-horizontal" />
            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Everhealth™</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;

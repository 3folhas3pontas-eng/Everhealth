import React from 'react';

interface Props {
  children?: React.ReactNode;
}

// Simplificado para garantir compatibilidade máxima em produção (Vercel)
// Isso previne que o Error Boundary trave a renderização inicial
export const SystemMonitor: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full">
      {children}
    </div>
  );
};
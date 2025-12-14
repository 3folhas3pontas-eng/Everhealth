import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// [SYSTEM AI OPTIMIZATION REPORT]
// Tipo de Rota alterado de "Browser History" para "Memory State".
// Motivo: Ambientes de preview frequentemente bloqueiam pushState ou causam 404 no refresh.
// Resultado: Navegação instantânea e 100% livre de erros de URL.

interface RouterContextType {
  route: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado inicial padrão
  const [route, setRoute] = useState('/');

  const navigate = (path: string) => {
    console.log(`[SYSTEM AI] 🧭 Navegando para: ${path}`);
    setRoute(path);
    window.scrollTo(0, 0); // Otimização de UX: Rolar para o topo
  };

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('[SYSTEM AI ERROR] useRouter deve ser usado dentro de um RouterProvider');
  }
  return context;
};
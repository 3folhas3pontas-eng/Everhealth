import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { RouterProvider, useRouter } from './components/RouterContext';
import LandingPage from './components/LandingPage';
import PurchasePage from './components/PurchasePage';
import { SystemMonitor } from './components/SystemMonitor';

const Content: React.FC = () => {
  const { route } = useRouter();
  
  // Otimização de rota: remove barras finais
  const normalizedRoute = route.endsWith('/') && route.length > 1 ? route.slice(0, -1) : route;

  if (normalizedRoute === '/comprar') {
    return <PurchasePage />;
  }
  return <LandingPage />;
};

const App: React.FC = () => {
  return (
    <SystemMonitor>
      <RouterProvider>
        <Content />
      </RouterProvider>
      <Analytics />
    </SystemMonitor>
  );
};

export default App;
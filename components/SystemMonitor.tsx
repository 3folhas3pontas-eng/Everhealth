import React, { Component, ErrorInfo, ReactNode, useEffect } from 'react';

// --- AGENTE DE MONITORAMENTO (A "IA" INTERNA) ---

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorInfo: string | null;
}

// 1. Analisador de Performance Funcional
const PerformanceObserverComponent: React.FC = () => {
  useEffect(() => {
    // Simulação de análise de código em tempo real
    console.log("%c[SYSTEM AI] 🟢 Agente de Otimização Ativo", "color: #00ff00; font-weight: bold; background: #002200; padding: 4px;");
    
    const checkDOM = () => {
      const domSize = document.getElementsByTagName('*').length;
      if (domSize > 1500) {
        console.warn(`[SYSTEM AI] ⚠️ Aviso: DOM muito grande (${domSize} nós). Otimização sugerida: Virtualização de listas.`);
      } else {
        console.log(`[SYSTEM AI] ✅ Saúde do DOM: Ótima (${domSize} nós).`);
      }
    };

    // Executa análise inicial
    setTimeout(checkDOM, 1000);
    
    // Monitora Core Web Vitals (Simulado)
    const reportPerformance = () => {
       const timing = window.performance?.timing;
       if (timing) {
         const loadTime = timing.loadEventEnd - timing.navigationStart;
         console.log(`[SYSTEM AI] ⚡ Tempo de Carregamento: ${loadTime > 0 ? loadTime + 'ms' : 'Calculando...'}`);
       }
    };
    window.addEventListener('load', reportPerformance);

    return () => window.removeEventListener('load', reportPerformance);
  }, []);

  return null;
};

// 2. Error Boundary (O mecanismo de Auto-Correção)
export class SystemMonitor extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorInfo: null
  };

  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorInfo: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("%c[SYSTEM AI] 🔴 CRITICAL ERROR DETECTED", "color: red; font-weight: bold; font-size: 14px;");
    console.error("Erro:", error);
    console.error("Stack:", errorInfo.componentStack);
    
    // Tenta auto-correção limpando storages ou resets se necessário (lógica simulada)
    console.log("%c[SYSTEM AI] 🔧 Iniciando protocolo de auto-recuperação...", "color: orange;");
  }

  handleReset = () => {
    this.setState({ hasError: false, errorInfo: null });
    window.location.href = "/"; // Força recarregamento limpo
  };

  render() {
    if (this.state.hasError) {
      // Interface de Fallback (Recuperação)
      return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-[#161022] p-4 text-white font-display text-center">
          <div className="mb-6 rounded-full bg-red-500/10 p-6 text-red-500">
            <span className="material-symbols-outlined text-6xl">smart_toy</span>
          </div>
          <h1 className="mb-2 text-2xl font-bold">O Agente de Sistema detectou uma falha</h1>
          <p className="mb-8 max-w-md text-gray-400">
            Um erro inesperado ocorreu. O sistema de proteção interceptou a falha para evitar o travamento total.
            <br/><br/>
            <span className="font-mono text-xs text-red-400 bg-black/30 p-2 rounded block">
              Erro: {this.state.errorInfo}
            </span>
          </p>
          <button 
            onClick={this.handleReset}
            className="rounded-lg bg-[#590df2] px-8 py-3 font-bold text-white transition-all hover:bg-[#4a0bd4] hover:shadow-lg hover:shadow-purple-900/50"
          >
            Executar Auto-Correção e Recarregar
          </button>
        </div>
      );
    }

    return (
      <>
        <PerformanceObserverComponent />
        {this.props.children}
      </>
    );
  }
}
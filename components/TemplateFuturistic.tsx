import React from 'react';
import { Cpu, Globe, Zap, Network, Bot, ChevronRight, Terminal } from 'lucide-react';

const TemplateFuturistic: React.FC = () => {
  return (
    <div className="font-sans bg-slate-950 text-white min-h-screen relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Nav */}
      <nav className="relative z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
             <span className="font-bold text-lg">Z</span>
           </div>
           <span className="text-xl font-bold tracking-wide">ZenB1</span>
        </div>
        <button className="px-6 py-2 border border-cyan-500/30 text-cyan-400 rounded hover:bg-cyan-500/10 transition-all font-mono text-sm">
          &lt;Agendar_Demo /&gt;
        </button>
      </nav>

      {/* Hero */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Sistemas v2.0 Disponible
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
            El Futuro de la <br/>
            Gestión ERP
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
            Fusionamos la potencia de <span className="text-cyan-400 font-semibold">SAP B1</span> y la flexibilidad de <span className="text-purple-400 font-semibold">Odoo</span> con algoritmos de IA generativa para crear sistemas que no solo gestionan, sino que piensan.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center gap-2">
              Explorar Soluciones <ChevronRight size={18} />
            </button>
            <button className="px-8 py-4 bg-slate-900 border border-slate-700 text-slate-300 rounded-lg font-medium hover:bg-slate-800 transition-all">
              Documentación
            </button>
          </div>
        </div>
        
        {/* Abstract 3D/Tech Graphic Placeholder */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur opacity-30"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
             <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                <Terminal className="text-slate-500" size={20} />
                <span className="text-sm text-slate-400 font-mono">zenb1_core.tsx</span>
             </div>
             <div className="space-y-3 font-mono text-sm">
                <div className="flex gap-4">
                   <span className="text-slate-600">01</span>
                   <span className="text-purple-400">import</span> <span className="text-white">{`{ AI_Optimizer }`}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@zenb1/core'</span>;
                </div>
                <div className="flex gap-4">
                   <span className="text-slate-600">02</span>
                   <span className="text-purple-400">const</span> <span className="text-yellow-400">ERP</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">SAP_BusinessOne</span>();
                </div>
                <div className="flex gap-4">
                   <span className="text-slate-600">03</span>
                   <span className="text-slate-500">// Optimizando inventario en tiempo real</span>
                </div>
                <div className="flex gap-4">
                   <span className="text-slate-600">04</span>
                   <span className="text-blue-400">await</span> <span className="text-yellow-400">ERP</span>.<span className="text-blue-300">connect</span>(<span className="text-yellow-400">AI_Optimizer</span>);
                </div>
                <div className="flex gap-4">
                   <span className="text-slate-600">05</span>
                   <span className="text-green-400">console.log("Sistema ZenB1 Iniciado");</span>
                </div>
             </div>
             <div className="mt-6 h-32 bg-slate-950 rounded border border-slate-800 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] animate-[shimmer_2s_infinite]"></div>
                <span className="text-cyan-500 font-mono text-xs">ANALIZANDO DATOS...</span>
             </div>
          </div>
        </div>
      </main>

      {/* Bento Grid Services */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center"><span className="text-cyan-400">Stack</span> Tecnológico</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors group">
               <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                   <Globe size={24} />
                 </div>
                 <h3 className="text-xl font-bold">Expertos SAP Business One</h3>
               </div>
               <p className="text-slate-400">
                 Dominamos la integración global. Personalizamos SAP B1 para corporaciones multinacionales, asegurando que cada módulo, desde finanzas hasta logística, funcione con precisión suiza.
               </p>
            </div>

             {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-colors group">
               <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                   <Network size={24} />
                 </div>
                 <h3 className="text-xl font-bold">Módulos Odoo</h3>
               </div>
               <p className="text-slate-400">
                 Desarrollo ágil de módulos customizados en Python para expandir las capacidades nativas de Odoo.
               </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-green-500/50 transition-colors group">
               <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 rounded-lg bg-green-500/10 text-green-400 group-hover:bg-green-500/20 transition-colors">
                   <Bot size={24} />
                 </div>
                 <h3 className="text-xl font-bold">IA & Automatización</h3>
               </div>
               <p className="text-slate-400">
                 Implementación de agentes inteligentes que reducen la carga operativa manual en un 40%.
               </p>
            </div>

            {/* Card 4 */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 relative overflow-hidden">
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                 <div>
                   <h3 className="text-2xl font-bold text-white mb-2">¿Listo para escalar?</h3>
                   <p className="text-slate-300">Nuestros consultores están listos para auditar su infraestructura actual.</p>
                 </div>
                 <button className="whitespace-nowrap px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-cyan-50 transition-colors">
                   Contactar Ahora
                 </button>
               </div>
               {/* Decorative background glow */}
               <div className="absolute right-0 top-0 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-12 bg-slate-950 text-center text-slate-500 text-sm">
        <p>&copy; 2024 ZenB1 Technologies. Powered by Innovation.</p>
      </footer>
    </div>
  );
};

export default TemplateFuturistic;
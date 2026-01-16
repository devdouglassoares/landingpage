import React from 'react';
import { ArrowRight, Code, Database, Brain, Cpu, Menu, X } from 'lucide-react';

const TemplateMinimalist: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">Zen<span className="font-light">B1</span>.</div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-black transition-colors">Expertise</a>
            <a href="#" className="hover:text-black transition-colors">Servicios</a>
            <a href="#" className="hover:text-black transition-colors">Nosotros</a>
            <a href="#" className="hover:text-black transition-colors">Contacto</a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight mb-8">
            La ingeniería del <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-400">equilibrio digital.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mb-12 font-light">
            Especialistas en la arquitectura de ecosistemas SAP B1, integración avanzada de Odoo y soluciones de Inteligencia Artificial que transforman datos en decisiones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
              Iniciar Proyecto <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-slate-200 rounded-full font-medium hover:border-black transition-colors">
              Ver Portfolio
            </button>
          </div>
        </div>
      </header>

      {/* Image Strip */}
      <div className="w-full h-64 md:h-96 overflow-hidden grid grid-cols-3 gap-1 px-6">
        <img src="https://picsum.photos/800/600?grayscale&random=1" className="w-full h-full object-cover" alt="Office" />
        <img src="https://picsum.photos/800/600?grayscale&random=2" className="w-full h-full object-cover" alt="Meeting" />
        <img src="https://picsum.photos/800/600?grayscale&random=3" className="w-full h-full object-cover" alt="Code" />
      </div>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Nuestros Pilares</h2>
            <h3 className="text-4xl font-bold leading-tight">
              Orquestamos tecnología compleja para crear operaciones simples.
            </h3>
          </div>
          
          <div className="grid gap-12">
            <div className="group border-b border-slate-100 pb-8 hover:border-black transition-colors cursor-default">
              <div className="flex justify-between items-start mb-4">
                <Database className="w-8 h-8 text-slate-800" />
                <span className="text-xs font-mono text-slate-400">01</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Expertos SAP Business One</h4>
              <p className="text-slate-500 leading-relaxed">
                Implementación, personalización y optimización de SAP B1. Llevamos su ERP al límite de la eficiencia con add-ons personalizados y migraciones sin fricción.
              </p>
            </div>

            <div className="group border-b border-slate-100 pb-8 hover:border-black transition-colors cursor-default">
              <div className="flex justify-between items-start mb-4">
                <Code className="w-8 h-8 text-slate-800" />
                <span className="text-xs font-mono text-slate-400">02</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Ecosistema Odoo</h4>
              <p className="text-slate-500 leading-relaxed">
                Desarrollo de módulos a medida e integración completa. Adaptamos Odoo para que se comporte exactamente como su negocio lo necesita, no al revés.
              </p>
            </div>

            <div className="group border-b border-slate-100 pb-8 hover:border-black transition-colors cursor-default">
              <div className="flex justify-between items-start mb-4">
                <Brain className="w-8 h-8 text-slate-800" />
                <span className="text-xs font-mono text-slate-400">03</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Inteligencia Artificial Aplicada</h4>
              <p className="text-slate-500 leading-relaxed">
                Desde automatización de procesos hasta análisis predictivo. Integramos modelos de IA directamente en su flujo de trabajo empresarial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Proyectos Entregados', val: '150+' },
            { label: 'Retención de Clientes', val: '98%' },
            { label: 'Años de Experiencia', val: '12+' },
            { label: 'Países Alcanzados', val: '8' },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">{stat.val}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter">Zen<span className="font-light">B1</span>.</div>
          <div className="text-slate-500 text-sm">© 2024 ZenB1 Solutions. Todos los derechos reservados.</div>
          <div className="flex gap-6">
             {/* Social placeholders */}
             <div className="w-5 h-5 bg-slate-200 rounded-full hover:bg-black transition-colors cursor-pointer"></div>
             <div className="w-5 h-5 bg-slate-200 rounded-full hover:bg-black transition-colors cursor-pointer"></div>
             <div className="w-5 h-5 bg-slate-200 rounded-full hover:bg-black transition-colors cursor-pointer"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TemplateMinimalist;
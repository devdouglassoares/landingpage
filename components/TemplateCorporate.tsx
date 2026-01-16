import React from 'react';
import { CheckCircle, Users, BarChart3, ArrowUpRight, ShieldCheck, Layers } from 'lucide-react';

const TemplateCorporate: React.FC = () => {
  return (
    <div className="font-sans text-stone-800 bg-stone-50">
      {/* Top Bar */}
      <div className="bg-emerald-900 text-white py-2 px-4 text-center text-xs font-medium tracking-wide">
        🚀 Nueva certificación SAP Gold Partner obtenida. <a href="#" className="underline decoration-white/50 hover:decoration-white">Leer más</a>
      </div>

      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-700 text-white w-10 h-10 rounded flex items-center justify-center font-serif font-bold text-xl">Z</div>
            <span className="font-serif text-2xl font-bold text-stone-900">ZenB1</span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-stone-600">
            <a href="#" className="hover:text-emerald-700 transition-colors">Soluciones</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Casos de Éxito</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Blog</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Compañía</a>
          </nav>

          <button className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded font-medium transition-colors shadow-md shadow-emerald-700/20">
            Consultoría Gratuita
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.1] mb-6">
              Solidez empresarial, <br/>
              <span className="text-emerald-700">agilidad tecnológica.</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-lg">
              ZenB1 ayuda a empresas líderes a integrar SAP Business One y Odoo con soluciones de inteligencia artificial, garantizando escalabilidad y control total.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <button className="flex items-center justify-center gap-2 px-7 py-3.5 bg-stone-900 text-white rounded hover:bg-stone-800 transition-all font-medium">
                 Ver Servicios <ArrowUpRight size={18} />
               </button>
               <button className="flex items-center justify-center gap-2 px-7 py-3.5 bg-stone-100 text-stone-700 rounded hover:bg-stone-200 transition-all font-medium">
                 Conocer al Equipo
               </button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-stone-500">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stone-300 overflow-hidden">
                    <img src={`https://picsum.photos/100/100?random=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p>Confianza de +200 empresas en LATAM.</p>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-stone-100 rounded-xl transform rotate-3"></div>
             <img 
               src="https://picsum.photos/800/600?random=20" 
               alt="Team working" 
               className="relative rounded-lg shadow-xl w-full object-cover h-[400px]"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs border border-stone-100">
               <div className="flex items-center gap-3 mb-2">
                 <ShieldCheck className="text-emerald-600" />
                 <span className="font-bold text-stone-900">Partner Certificado</span>
               </div>
               <p className="text-sm text-stone-500">Garantía de implementación sin interrupciones operativas.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">Ecosistema Integral</h2>
            <p className="text-stone-600">Unificamos sus procesos de negocio bajo una arquitectura robusta y moderna.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Layers, 
                title: 'SAP Business One', 
                desc: 'Implementaciones desde cero, migraciones complejas y soporte continuo para su core bancario y logístico.' 
              },
              { 
                icon: Users, 
                title: 'Desarrollo Odoo', 
                desc: 'Módulos personalizados para CRM, eCommerce y Recursos Humanos, integrados perfectamente con su flujo.' 
              },
              { 
                icon: BarChart3, 
                title: 'Analítica & IA', 
                desc: 'Tableros de control predictivos que utilizan sus datos históricos para proyectar tendencias de mercado.' 
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-700 mb-6">
                  <service.icon size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-stone-900">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-stone-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">¿Por qué elegir ZenB1?</h2>
            <div className="space-y-6">
              {[
                'Equipo certificado con más de 10 años de experiencia promedio.',
                'Metodología ágil que asegura entregas en tiempo y forma.',
                'Soporte post-implementación 24/7 en español e inglés.'
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="text-emerald-400 shrink-0" />
                  <p className="text-stone-300">{item}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 text-emerald-400 font-medium hover:text-emerald-300 flex items-center gap-2">
              Conocer nuestra metodología <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700">
            <h3 className="text-xl font-bold mb-6 border-b border-stone-700 pb-4">Solicitar Diagnóstico</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="w-full bg-stone-900 border border-stone-700 rounded p-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors" />
                <input type="email" placeholder="Email Corporativo" className="w-full bg-stone-900 border border-stone-700 rounded p-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <select className="w-full bg-stone-900 border border-stone-700 rounded p-3 text-sm text-stone-400 focus:outline-none focus:border-emerald-500 transition-colors">
                <option>Interés Principal</option>
                <option>SAP Business One</option>
                <option>Odoo</option>
                <option>Inteligencia Artificial</option>
              </select>
              <textarea placeholder="Cuéntenos sobre su proyecto..." rows={3} className="w-full bg-stone-900 border border-stone-700 rounded p-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"></textarea>
              <button className="w-full bg-emerald-700 hover:bg-emerald-600 py-3 rounded font-bold transition-colors">Enviar Solicitud</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 px-6 border-t border-stone-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
           <span className="font-serif font-bold text-xl text-stone-900">ZenB1</span>
           <div className="flex gap-6 text-stone-500 text-sm font-medium">
             <a href="#" className="hover:text-stone-900">LinkedIn</a>
             <a href="#" className="hover:text-stone-900">Twitter</a>
             <a href="#" className="hover:text-stone-900">Instagram</a>
           </div>
           <span className="text-stone-400 text-sm">© 2024 ZenB1 Inc.</span>
        </div>
      </footer>
    </div>
  );
};

export default TemplateCorporate;
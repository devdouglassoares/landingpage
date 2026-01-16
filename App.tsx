import React, { useState } from 'react';
import { TemplateType } from './types';
import TemplateMinimalist from './components/TemplateMinimalist';
import TemplateFuturistic from './components/TemplateFuturistic';
import TemplateCorporate from './components/TemplateCorporate';
import { Layout, Palette, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>('minimalist');

  const renderTemplate = () => {
    switch (currentTemplate) {
      case 'minimalist':
        return <TemplateMinimalist />;
      case 'futuristic':
        return <TemplateFuturistic />;
      case 'corporate':
        return <TemplateCorporate />;
      default:
        return <TemplateMinimalist />;
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Template Switcher Overlay */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-full p-2 flex items-center gap-2 transition-all duration-300 hover:scale-105">
        <span className="pl-4 pr-2 text-xs font-semibold text-gray-500 uppercase tracking-widest hidden sm:block">
          Seleccionar Diseño
        </span>
        <button
          onClick={() => setCurrentTemplate('minimalist')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentTemplate === 'minimalist'
              ? 'bg-black text-white shadow-lg'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Palette size={16} />
          <span className="hidden sm:inline">Minimalista</span>
        </button>
        <button
          onClick={() => setCurrentTemplate('futuristic')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentTemplate === 'futuristic'
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Layout size={16} />
          <span className="hidden sm:inline">Futurista AI</span>
        </button>
        <button
          onClick={() => setCurrentTemplate('corporate')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentTemplate === 'corporate'
              ? 'bg-emerald-700 text-white shadow-lg'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Briefcase size={16} />
          <span className="hidden sm:inline">Corporativo</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full h-full">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default App;
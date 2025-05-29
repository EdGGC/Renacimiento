import React from 'react';

const CoverPage = () => {
  return (
    <div className="min-h-screen bg-cream-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white p-12 rounded-lg shadow-soft text-center border border-gold-200">
        <h1 className="text-4xl font-serif font-bold text-indigo-900 mb-2">Renacimiento Edson</h1>
        <h2 className="text-xl font-sans text-gold-600 mb-8">Bitácora de Terapia Gestalt y Recuperación Espiritual</h2>
        
        <div className="space-y-6 mb-8">
          <div className="border-b border-gold-100 pb-4">
            <p className="text-sm text-gray-500">Nombre completo</p>
            <div className="h-8 border-b border-dashed border-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Fecha de inicio</p>
              <div className="h-8 border-b border-dashed border-gray-300"></div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Grupo NA</p>
              <div className="h-8 border-b border-dashed border-gray-300"></div>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Días limpios</p>
            <div className="h-8 border-b border-dashed border-gray-300"></div>
          </div>
        </div>
        
        <div className="h-48 bg-gray-50 rounded flex items-center justify-center mb-8">
          <span className="text-gray-400">Espacio para imagen o símbolo</span>
        </div>
        
        <p className="text-xs text-gold-600 italic">"Cada página es un paso hacia tu esencia"</p>
      </div>
    </div>
  );
};

export default CoverPage;
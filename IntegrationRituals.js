import React from 'react';

const IntegrationRituals = () => {
  return (
    <div className="min-h-screen bg-cream-50 p-8">
      <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-lg shadow-soft border border-gold-200">
        <h2 className="text-2xl font-serif font-bold text-indigo-900 mb-6 flex items-center">
          <span className="mr-2">🔥</span> Rituales de Integración
        </h2>
        
        <p className="text-sm text-gray-600 mb-6 italic">
          "Describe aquí los rituales, prácticas o ejercicios que te han ayudado a integrar emociones, cerrar ciclos o renovar energía."
        </p>
        
        <div className="space-y-6">
          <div>
            <p className="text-xs text-gray-500">Nombre del ritual</p>
            <div className="h-8 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500">Intención</p>
            <div className="h-20 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500">Cómo lo realicé</p>
            <div className="h-20 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500">Qué sentí después</p>
            <div className="h-20 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationRituals;
import React from 'react';

const InsightNotes = () => {
  return (
    <div className="min-h-screen bg-cream-50 p-8">
      <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-lg shadow-soft border border-gold-200">
        <h2 className="text-2xl font-serif font-bold text-indigo-900 mb-6 flex items-center">
          <span className="mr-2">✨</span> Notas de Insight y Canalización Personal
        </h2>
        
        <div className="space-y-4 mb-4">
          <div>
            <p className="text-xs text-gray-500">Fecha</p>
            <div className="h-8 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500">Contexto</p>
            <div className="h-8 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-xs text-gray-500">Reflexiones, mensajes internos, intuiciones</p>
          <div className="h-64 bg-gray-50 rounded border border-dashed border-gray-300"></div>
        </div>
        
        <p className="text-sm text-center text-gold-600 italic mt-6">
          "Cuando hablo conmigo mismo, también escucho a Dios."
        </p>
      </div>
    </div>
  );
};

export default InsightNotes;
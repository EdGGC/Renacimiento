import React from 'react';

const GestaltExercises = () => {
  return (
    <div className="min-h-screen bg-cream-50 p-8">
      <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-lg shadow-soft border border-gold-200">
        <h2 className="text-2xl font-serif font-bold text-indigo-900 mb-6 flex items-center">
          <span className="mr-2">🌀</span> Ejercicios de Terapia Gestalt
        </h2>
        
        <p className="text-sm text-gray-600 mb-6 italic">
          "Usa esta sección para escribir diálogos internos, ejercicios de polaridades, cartas no enviadas o exploraciones emocionales."
        </p>
        
        <div className="space-y-4 mb-4">
          <div>
            <p className="text-xs text-gray-500">Nombre del ejercicio</p>
            <div className="h-8 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500">Fecha</p>
            <div className="h-8 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500">Partes que intervienen</p>
            <div className="h-8 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-xs text-gray-500">Diálogo o escritura libre</p>
          <div className="h-64 bg-gray-50 rounded border border-dashed border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default GestaltExercises;
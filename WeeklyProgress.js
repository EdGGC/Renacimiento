import React from 'react';

const WeeklyProgress = () => {
  return (
    <div className="min-h-screen bg-cream-50 p-8">
      <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-lg shadow-soft border border-gold-200">
        <h2 className="text-2xl font-serif font-bold text-indigo-900 mb-6 flex items-center">
          <span className="mr-2">📈</span> Avances Semanales
        </h2>
        
        <div className="space-y-6">
          <div>
            <p className="text-xs text-gray-500">Semana #__</p>
            <div className="h-8 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500">¿Qué logré esta semana?</p>
            <div className="h-20 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500">¿Qué bloqueos aparecieron?</p>
            <div className="h-20 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500">¿Qué aprendí sobre mí?</p>
            <div className="h-20 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500">¿Qué necesito ajustar?</p>
            <div className="h-20 bg-gray-50 rounded border border-dashed border-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyProgress;
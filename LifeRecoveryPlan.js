import React from 'react';

const LifeRecoveryPlan = () => {
  const recoveryAreas = [
    'Recuperación espiritual',
    'Estabilidad económica',
    'Relaciones familiares',
    'Salud integral',
    'Comunidad y servicio'
  ];

  return (
    <div className="min-h-screen bg-cream-50 p-8">
      <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-lg shadow-soft border border-gold-200">
        <h2 className="text-2xl font-serif font-bold text-indigo-900 mb-6 flex items-center">
          <span className="mr-2">🌱</span> Plan de Vida de Recuperación (Versión 1.0)
        </h2>
        
        {recoveryAreas.map((area, index) => (
          <div key={index} className="mb-8">
            <h3 className="font-sans font-semibold text-indigo-700 mb-4">{area}</h3>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <p className="text-xs text-gray-500">Mi visión</p>
                <div className="h-16 bg-gray-50 rounded border border-dashed border-gray-300"></div>
              </div>
              <div>
                <p className="text-xs text-gray-500">Mis acciones</p>
                <div className="h-16 bg-gray-50 rounded border border-dashed border-gray-300"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Mis límites</p>
                <div className="h-16 bg-gray-50 rounded border border-dashed border-gray-300"></div>
              </div>
              <div>
                <p className="text-xs text-gray-500">Mi ancla</p>
                <div className="h-16 bg-gray-50 rounded border border-dashed border-gray-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeRecoveryPlan;
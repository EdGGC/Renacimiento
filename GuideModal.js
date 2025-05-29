import React from 'react';

const GuideModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        
        <h3 className="text-xl font-serif font-bold text-indigo-900 mb-4">Guía de Uso</h3>
        <p className="text-gray-700 mb-4">
          Esta bitácora es tu espacio sagrado para el crecimiento personal. Cada sección está diseñada para acompañarte en tu proceso terapéutico.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Escribe con honestidad y sin juzgarte</li>
          <li>Visita cada sección según tus necesidades</li>
          <li>Guarda tus reflexiones importantes</li>
          <li>Celebra tus avances por pequeños que sean</li>
        </ul>
      </div>
    </div>
  );
};

export default GuideModal;
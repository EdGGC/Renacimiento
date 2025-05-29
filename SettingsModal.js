import React, { useState } from 'react';

const SettingsModal = ({ onClose }) => {
  const [chatGptApiKey, setChatGptApiKey] = useState(localStorage.getItem('chatGptApiKey') || '');

  const handleApiKeyChange = (e) => {
    setChatGptApiKey(e.target.value);
    localStorage.setItem('chatGptApiKey', e.target.value); // Guardar la API Key localmente
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        
        <h3 className="text-xl font-serif font-bold text-indigo-900 mb-4">Ajustes</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tema de color</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Claro</option>
              <option>Oscuro</option>
              <option>Sepia</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tamaño de texto</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Pequeño</option>
              <option>Mediano</option>
              <option>Grande</option>
            </select>
          </div>
          
          <div className="flex items-center">
            <input type="checkbox" id="notifications" className="mr-2" />
            <label htmlFor="notifications" className="text-sm text-gray-700">Recordatorios diarios</label>
          </div>

          {/* Sección de ChatGPT */}
          <div className="border-t pt-4 mt-4">
            <h4 className="text-lg font-semibold text-indigo-800 mb-2">Integración ChatGPT</h4>
            <p className="text-sm text-gray-600 mb-2">
              Para usar las sugerencias de ChatGPT, ingresa tu clave API de OpenAI.
              <br/>
              <span className="text-red-500 font-bold">¡Advertencia! No compartas tu clave API.</span>
            </p>
            <input
              type="password" // Usar type="password" para ocultar la clave
              placeholder="Tu clave API de OpenAI"
              value={chatGptApiKey}
              onChange={handleApiKeyChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Tu clave se guarda solo en tu navegador.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
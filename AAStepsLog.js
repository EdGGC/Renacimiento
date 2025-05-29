import React, { useState } from 'react';
import { saveToLocal, loadFromLocal } from '../utilities/localStorage';

const AAStepsLog = () => {
  const [stepData, setStepData] = useState({
    currentStep: '',
    startDate: '',
    keyQuestions: '',
    reflections: '',
    guidingPrinciple: ''
  });

  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);
  const [isChatGPTActive, setIsChatGPTActive] = useState(false);
  const [gptResponse, setGptResponse] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStepData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    saveToLocal('aaSteps', stepData);
    alert('Paso AA guardado');
  };

  const loadHistory = () => {
    setHistory(loadFromLocal('aaSteps'));
    setShowHistory(!showHistory);
  };

  const handleGPTRequest = async () => {
    setIsChatGPTActive(true);
    try {
      setGptResponse('Sugerencias de ChatGPT para tu paso AA aparecerían aquí.');
    } catch (error) {
      console.error('Error calling ChatGPT', error);
      setGptResponse('Error al conectar con ChatGPT');
    } finally {
      setIsChatGPTActive(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 p-8">
      <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-lg shadow-soft border border-blue-200">
        <h2 className="text-2xl font-serif font-bold text-blue-900 mb-6 flex items-center">
          <span className="mr-2">🔵</span> Bitácora de Pasos AA
        </h2>
        
        <div className="space-y-6">
          <div>
            <p className="text-xs text-gray-500">Paso actual en el que estoy</p>
            <input
              type="text"
              name="currentStep"
              value={stepData.currentStep}
              onChange={handleChange}
              className="w-full h-8 border-b border-dashed border-blue-300 bg-transparent focus:outline-none"
            />
          </div>
          
          <div>
            <p className="text-xs text-gray-500">Fecha en que lo comencé</p>
            <input
              type="date"
              name="startDate"
              value={stepData.startDate}
              onChange={handleChange}
              className="w-full h-8 border-b border-dashed border-blue-300 bg-transparent focus:outline-none"
            />
          </div>
          
          <div>
            <p className="text-xs text-gray-500">Preguntas clave del paso</p>
            <textarea
              name="keyQuestions"
              value={stepData.keyQuestions}
              onChange={handleChange}
              className="w-full h-20 border border-dashed border-blue-300 bg-gray-50 rounded p-2 focus:outline-none"
            />
          </div>
          
          <div>
            <p className="text-xs text-gray-500">Respuestas, reflexiones, bloqueos</p>
            <textarea
              name="reflections"
              value={stepData.reflections}
              onChange={handleChange}
              className="w-full h-64 border border-dashed border-blue-300 bg-gray-50 rounded p-2 focus:outline-none"
            />
          </div>
          
          <div>
            <p className="text-xs text-gray-500">Frase o principio que me guía en este paso</p>
            <textarea
              name="guidingPrinciple"
              value={stepData.guidingPrinciple}
              onChange={handleChange}
              className="w-full h-20 border border-dashed border-blue-300 bg-gray-50 rounded p-2 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <button
            onClick={handleSave}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Guardar
          </button>
          
          <button
            onClick={loadHistory}
            className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded hover:bg-indigo-200 transition"
          >
            {showHistory ? 'Ocultar historial' : 'Ver anteriores'}
          </button>
          
          <button
            onClick={handleGPTRequest}
            disabled={isChatGPTActive}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition disabled:bg-green-300"
          >
            {isChatGPTActive ? 'Generando...' : 'Habla con ChatGPT'}
          </button>
        </div>

        {showHistory && (
          <div className="mt-6 border-t pt-4">
            <h3 className="font-medium mb-2">Historial de Pasos AA:</h3>
            {history.length > 0 ? (
              <ul className="space-y-4">
                {history.map((item, index) => (
                  <li key={index} className="border-b pb-4">
                    <p className="text-sm">{new Date(item.timestamp).toLocaleDateString()} - Paso {item.currentStep}</p>
                    <p>Reflexiones: {item.reflections.substring(0, 100)}...</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">Aún no hay pasos AA guardados</p>
            )}
          </div>
        )}

        {gptResponse && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
            <h3 className="font-medium mb-2">Sugerencia de ChatGPT:</h3>
            <p>{gptResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AAStepsLog;
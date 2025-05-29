import React, { useState } from 'react';
import { saveToLocal, loadFromLocal } from '../utilities/localStorage';

const CommitmentPage = () => {
  const [signature, setSignature] = useState({
    name: '',
    witness: '',
    date: ''
  });

  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);
  const [isChatGPTActive, setIsChatGPTActive] = useState(false);
  const [gptResponse, setGptResponse] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignature(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    saveToLocal('commitmentSignatures', signature);
    alert('Compromiso guardado');
  };

  const loadHistory = () => {
    setHistory(loadFromLocal('commitmentSignatures'));
    setShowHistory(!showHistory);
  };

  const handleGPTRequest = async () => {
    setIsChatGPTActive(true);
    try {
      setGptResponse('Sugerencias de ChatGPT para tu compromiso aparecerían aquí.');
    } catch (error) {
      console.error('Error calling ChatGPT', error);
      setGptResponse('Error al conectar con ChatGPT');
    } finally {
      setIsChatGPTActive(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-12 rounded-lg shadow-soft text-center border border-gold-200">
        <h2 className="text-2xl font-serif font-bold text-indigo-900 mb-8">Compromiso Final</h2>
        
        <p className="text-lg text-gray-700 mb-12">
          "Yo me comprometo a sostener mi proceso con valentía, honestidad y amor."
        </p>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-sm text-gray-500 mb-2">Firma</p>
            <input
              type="text"
              name="name"
              value={signature.name}
              onChange={handleChange}
              className="w-full h-16 border-b border-dashed border-gray-400 bg-transparent focus:outline-none text-center"
            />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Testigo espiritual</p>
            <input
              type="text"
              name="witness"
              value={signature.witness}
              onChange={handleChange}
              className="w-full h-16 border-b border-dashed border-gray-400 bg-transparent focus:outline-none text-center"
            />
          </div>
        </div>
        
        <div className="w-1/2 mx-auto">
          <p className="text-sm text-gray-500 mb-2">Fecha</p>
          <input
            type="date"
            name="date"
            value={signature.date}
            onChange={handleChange}
            className="w-full h-8 border-b border-dashed border-gray-400 bg-transparent focus:outline-none text-center"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
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
            <h3 className="font-medium mb-2">Historial de Compromisos:</h3>
            {history.length > 0 ? (
              <ul className="space-y-4">
                {history.map((item, index) => (
                  <li key={index} className="border-b pb-4">
                    <p className="text-sm">{new Date(item.timestamp).toLocaleDateString()}</p>
                    <p>Firmante: {item.name}</p>
                    <p>Testigo: {item.witness}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">Aún no hay compromisos guardados</p>
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

export default CommitmentPage;

// DONE
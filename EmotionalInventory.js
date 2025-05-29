import React, { useState } from 'react';
import { saveToLocal, loadFromLocal } from '../utilities/localStorage';

const EmotionalInventory = () => {
  const [activeTab, setActiveTab] = useState('daily');
  const [dailyData, setDailyData] = useState({
    date: '',
    emotion: '',
    trigger: '',
    response: '',
    higherPowerMessage: ''
  });
  const [weeklyData, setWeeklyData] = useState({
    frequentEmotions: '',
    keyEvents: '',
    lessons: '',
    gratitudes: ''
  });

  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);
  const [isChatGPTActive, setIsChatGPTActive] = useState(false);
  const [gptResponse, setGptResponse] = useState('');

  const handleDailyChange = (e) => {
    const { name, value } = e.target;
    setDailyData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWeeklyChange = (e) => {
    const { name, value } = e.target;
    setWeeklyData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (activeTab === 'daily') {
      saveToLocal('emotionalInventoryDaily', dailyData);
      alert('Inventario diario guardado');
    } else {
      saveToLocal('emotionalInventoryWeekly', weeklyData);
      alert('Inventario semanal guardado');
    }
  };

  const loadHistory = () => {
    if (activeTab === 'daily') {
      setHistory(loadFromLocal('emotionalInventoryDaily'));
    } else {
      setHistory(loadFromLocal('emotionalInventoryWeekly'));
    }
    setShowHistory(!showHistory);
  };

  const handleGPTRequest = async () => {
    setIsChatGPTActive(true);
    try {
      setGptResponse('Análisis y sugerencias de ChatGPT sobre tus emociones aparecerían aquí.');
    } catch (error) {
      console.error('Error calling ChatGPT', error);
      setGptResponse('Error al conectar con ChatGPT');
    } finally {
      setIsChatGPTActive(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 p-8">
      <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-lg shadow-soft border border-gold-200">
        <h2 className="text-2xl font-serif font-bold text-indigo-900 mb-6 flex items-center">
          <span className="mr-2">🌊</span> Inventario Emocional
        </h2>
        
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'daily' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('daily')}
          >
            Diario
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'weekly' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('weekly')}
          >
            Semanal
          </button>
        </div>
        
        {activeTab === 'daily' ? (
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500">Fecha</p>
              <input
                type="date"
                name="date"
                value={dailyData.date}
                onChange={handleDailyChange}
                className="w-full h-8 border-b border-dashed border-indigo-300 bg-transparent focus:outline-none"
              />
            </div>
            
            <div>
              <p className="text-xs text-gray-500">Emoción principal</p>
              <input
                type="text"
                name="emotion"
                value={dailyData.emotion}
                onChange={handleDailyChange}
                className="w-full h-8 border-b border-dashed border-indigo-300 bg-transparent focus:outline-none"
              />
            </div>
            
            <div>
              <p className="text-xs text-gray-500">Qué la detonó</p>
              <textarea
                name="trigger"
                value={dailyData.trigger}
                onChange={handleDailyChange}
                className="w-full h-20 border border-dashed border-indigo-300 bg-gray-50 rounded p-2 focus:outline-none"
              />
            </div>
            
            <div>
              <p className="text-xs text-gray-500">Cómo la enfrenté</p>
              <textarea
                name="response"
                value={dailyData.response}
                onChange={handleDailyChange}
                className="w-full h-20 border border-dashed border-indigo-300 bg-gray-50 rounded p-2 focus:outline-none"
              />
            </div>
            
            <div>
              <p className="text-xs text-gray-500">Qué me diría mi Poder Superior</p>
              <textarea
                name="higherPowerMessage"
                value={dailyData.higherPowerMessage}
                onChange={handleDailyChange}
                className="w-full h-20 border border-dashed border-indigo-300 bg-gray-50 rounded p-2 focus:outline-none"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500">Emociones más frecuentes</p>
              <textarea
                name="frequentEmotions"
                value={weeklyData.frequentEmotions}
                onChange={handleWeeklyChange}
                className="w-full h-20 border border-dashed border-indigo-300 bg-gray-50 rounded p-2 focus:outline-none"
              />
            </div>
            
            <div>
              <p className="text-xs text-gray-500">Eventos clave</p>
              <textarea
                name="keyEvents"
                value={weeklyData.keyEvents}
                onChange={handleWeeklyChange}
                className="w-full h-20 border border-dashed border-indigo-300 bg-gray-50 rounded p-2 focus:outline-none"
              />
            </div>
            
            <div>
              <p className="text-xs text-gray-500">Lecciones</p>
              <textarea
                name="lessons"
                value={weeklyData.lessons}
                onChange={handleWeeklyChange}
                className="w-full h-20 border border-dashed border-indigo-300 bg-gray-50 rounded p-2 focus:outline-none"
              />
            </div>
            
            <div>
              <p className="text-xs text-gray-500">Agradecimientos</p>
              <textarea
                name="gratitudes"
                value={weeklyData.gratitudes}
                onChange={handleWeeklyChange}
                className="w-full h-20 border border-dashed border-indigo-300 bg-gray-50 rounded p-2 focus:outline-none"
              />
            </div>
          </div>
        )}

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
            <h3 className="font-medium mb-2">Historial:</h3>
            {history.length > 0 ? (
              <ul className="space-y-4">
                {history.map((item, index) => (
                  <li key={index} className="border-b pb-4">
                    <p className="text-sm">{new Date(item.timestamp).toLocaleDateDateString()}</p>
                    {activeTab === 'daily' ? (
                      <>
                        <p>Emoción: {item.emotion}</p>
                        <p>Detonante: {item.trigger.substring(0, 50)}...</p>
                      </>
                    ) : (
                      <>
                        <p>Emociones frecuentes: {item.frequentEmotions.substring(0, 50)}...</p>
                        <p>Lecciones: {item.lessons.substring(0, 50)}...</p>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">Aún no hay entradas guardadas</p>
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

export default EmotionalInventory;
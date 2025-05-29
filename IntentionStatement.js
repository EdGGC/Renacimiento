import React, { useState } from 'react';
import { saveToLocal, loadFromLocal } from '../utilities/localStorage';
import { getChatGPTResponse } from '../utilities/chatGptService'; // Importar el servicio

const IntentionStatement = () => {
  const [intention, setIntention] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);
  const [isChatGPTActive, setIsChatGPTActive] = useState(false);
  const [gptResponse, setGptResponse] = useState('');

  const handleSave = () => {
    saveToLocal('intentions', { content: intention });
    alert('Declaración guardada localmente');
  };

  const loadHistory = () => {
    setHistory(loadFromLocal('intentions'));
    setShowHistory(!showHistory);
  };

  const handleGPTRequest = async () => {
    setIsChatGPTActive(true);
    const prompt = `Genera una declaración de intención inspiradora para una bitácora de terapia, basada en el siguiente texto: "${intention}". Si el texto está vacío, sugiere una declaración general.`;
    const response = await getChatGPTResponse(prompt);
    setGptResponse(response);
    setIsChatGPTActive(false);
  };

  return (
    <div className="min-h-screen bg-cream-50 p-8 flex flex-col">
      <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-lg shadow-soft border border-gold-200">
        <h2 className="text-2xl font-serif font-bold text-indigo-900 mb-6 flex items-center">
          <span className="mr-2">🧭</span> Declaración de Intención
        </h2>
        
        <p className="text-sm text-gray-600 mb-6 italic">
          "Escribe aquí tu compromiso contigo mismo, tu proceso y tu Poder Superior"
        </p>
        
        <textarea
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          className="w-full h-64 border border-dashed border-indigo-300 bg-gray-50 rounded p-4 focus:outline-none"
          placeholder="Escribe tu declaración de intención aquí..."
        />
        
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
            <h3 className="font-medium mb-2">Tus declaraciones anteriores:</h3>
            {history.length > 0 ? (
              <ul className="space-y-2">
                {history.map((item, index) => (
                  <li key={index} className="border-b pb-2">
                    <p className="text-sm">{new Date(item.timestamp).toLocaleDateString()}</p>
                    <p>{item.content}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">Aún no hay declaraciones guardadas</p>
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

export default IntentionStatement;


EXPLANATION:
1.  `utilities/chatGptService.js` (NUEVO ARCHIVO):
    *   Este archivo contiene la función `getChatGPTResponse`.
    *   IMPORTANTE: Esta función simula la llamada a la API de OpenAI. En un entorno de producción, la clave API nunca debe estar en el frontend. La llamada real a la API de OpenAI debe hacerse desde un backend seguro que reciba la solicitud del frontend y use la clave API.
    *   La clave API se obtiene de `localStorage` (donde el usuario la guardará desde Ajustes).
    *   Incluye un `setTimeout` para simular un retraso de red.

2.  `components/SettingsModal.js` (ACTUALIZADO):
    *   Se añadió una nueva sección "Integración ChatGPT".
    *   Hay un campo de entrada de tipo `password` para que el usuario ingrese su clave API de OpenAI.
    *   La clave se guarda en `localStorage` para que persista entre sesiones.
    *   Se incluye una advertencia clara sobre la seguridad de la clave API.

3.  `components/IntentionStatement.js` (ACTUALIZADO):
    *   Ahora importa `getChatGPTResponse` del nuevo servicio.
    *   La función `handleGPTRequest` llama a `getChatGPTResponse` con un `prompt` relevante para la sección.
    *   El `prompt` puede incluir el contenido actual del campo de texto para que ChatGPT genere una respuesta contextualizada.

Pasos para implementar en otras secciones:
Para integrar ChatGPT en las demás secciones (LifeRecoveryPlan, GestaltExercises, etc.), deberás:
1.  Importar `getChatGPTResponse` en cada componente.
2.  Modificar la función `handleGPTRequest` en cada componente para que llame a `getChatGPTResponse` con un `prompt` específico para el contenido de esa sección.
3.  Asegurarte de que el estado `isChatGPTActive` y `gptResponse` estén definidos y manejados correctamente en cada componente.

Advertencia de Seguridad Crítica:
Aunque la clave API se guarda en `localStorage` (que es más seguro que tenerla directamente en el código fuente), sigue siendo visible para el usuario final en las herramientas de desarrollador del navegador. Para una seguridad robusta en una aplicación real, la clave API DEBE ser gestionada por un servidor backend que actúe como intermediario entre tu frontend y la API de OpenAI. El frontend solo debería comunicarse con tu propio backend.
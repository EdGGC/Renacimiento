import React, { useState } from 'react';
import { saveToLocal, loadFromLocal } from '../utilities/localStorage';

const DailyActivities = () => {
  const [activity, setActivity] = useState({
    name: '',
    date: '',
    time: '',
    notes: ''
  });

  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);
  const [isChatGPTActive, setIsChatGPTActive] = useState(false);
  const [gptResponse, setGptResponse] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    saveToLocal('dailyActivities', activity);
    alert('Actividad diaria guardada');
  };

  const loadHistory = () => {
    setHistory(loadFromLocal('dailyActivities'));
    setShowHistory(!showHistory);
  };

  const handleGPTRequest = async () => {
    setIsChatGPTActive(true);
    try {
      setGptResponse('Sugerencias de ChatGPT para tus actividades diarias aparecerían aquí.');
    } catch (error) {
      console.error('Error calling ChatGPT', error);
      setGptResponse('Error al conectar con ChatGPT');
    } finally {
      setIsChatGPTActive(false);
    }
  };

  const connectToCalendar = () => {
    // Esta es una implementación simulada.
    // La integración real con calendarios (Google Calendar, Outlook, etc.)
    // requiere APIs de terceros y autenticación OAuth.
    const eventTitle = activity.name || 'Actividad Diaria';
    const eventDescription = activity.notes || 'Actividad registrada en mi bitácora';
    
    let eventDate;
    if (activity.date && activity.time) {
      eventDate = new Date(`${activity.date}T${activity.time}`);
    } else if (activity.date) {
      eventDate = new Date(activity.date);
    } else {
      eventDate = new Date();
    }

    const year = eventDate.getFullYear();
    const month = (eventDate.getMonth() + 1).toString().padStart(2, '0');
    const day = eventDate.getDate().toString().padStart(2, '0');
    const hours = eventDate.getHours().toString().padStart(2, '0');
    const minutes = eventDate.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${year}${month}${day}T${hours}${minutes}00`;

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&details=${encodeURIComponent(eventDescription)}&dates=${formattedDate}/${formattedDate}`;
    
    window.open(googleCalendarUrl, '_blank');
    alert('Intentando conectar con el calendario. Revisa la nueva pestaña.');
  };

  return (
    <div className="min-h-screen bg-cream-50 p-8">
      <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-lg shadow-soft border border-teal-200">
        <h2 className="text-2xl font-serif font-bold text-teal-900 mb-6">Mis Actividades Diarias</h2>
        
        <div className="space-y-4 mb-4">
          <div>
            <p className="text-xs text-gray-500">Nombre de la actividad</p>
            <input
              type="text"
              name="name"
              value={activity.name}
              onChange={handleChange}
              className="w-full h-8 border-b border-dashed border-teal-300 bg-transparent focus:outline-none"
            />
          </div>
          
          <div>
            <p className="text-xs text-gray-500">Fecha</p>
            <input
              type="date"
              name="date"
              value={activity.date}
              onChange={handleChange}
              className="w-full h-8 border-b border-dashed border-teal-300 bg-transparent focus:outline-none"
            />
          </div>

          <div>
            <p className="text-xs text-gray-500">Hora</p>
            <input
              type="time"
              name="time"
              value={activity.time}
              onChange={handleChange}
              className="w-full h-8 border-b border-dashed border-teal-300 bg-transparent focus:outline-none"
            />
          </div>
          
          <div>
            <p className="text-xs text-gray-500">Notas</p>
            <textarea
              name="notes"
              value={activity.notes}
              onChange={handleChange}
              className="w-full h-32 border border-dashed border-teal-300 bg-gray-50 rounded p-2 focus:outline-none"
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

          <button
            onClick={connectToCalendar}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
          >
            Conectar con Calendario
          </button>
        </div>

        {showHistory && (
          <div className="mt-6 border-t pt-4">
            <h3 className="font-medium mb-2">Historial de Actividades Diarias:</h3>
            {history.length > 0 ? (
              <ul className="space-y-4">
                {history.map((item, index) => (
                  <li key={index} className="border-b pb-4">
                    <p className="text-sm">{new Date(item.timestamp).toLocaleDateString()} - {item.name}</p>
                    <p>Fecha: {item.date} {item.time}</p>
                    <p>Notas: {item.notes.substring(0, 100)}...</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">Aún no hay actividades guardadas</p>
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

export default DailyActivities;
import React, { useState, useEffect } from 'react';
import CoverPage from './components/CoverPage';
import IntentionStatement from './components/IntentionStatement';
import LifeRecoveryPlan from './components/LifeRecoveryPlan';
import GestaltExercises from './components/GestaltExercises';
import WeeklyProgress from './components/WeeklyProgress';
import EmotionalInventory from './components/EmotionalInventory';
import IntegrationRituals from './components/IntegrationRituals';
import InsightNotes from './components/InsightNotes';
import NAStepsLog from './components/NAStepsLog';
import AAStepsLog from './components/AAStepsLog';
import SpiritualAgenda from './components/SpiritualAgenda';
import DailyActivities from './components/DailyActivities';
import CommitmentPage from './components/CommitmentPage';
import AuthLogin from './components/AuthLogin';
import AuthRegister from './components/AuthRegister';

const App = () => {
  const [currentPage, setCurrentPage] = useState('auth'); // Estado inicial para la autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [showRegister, setShowRegister] = useState(false); // Para alternar entre login y registro

  useEffect(() => {
    // Intentar cargar el usuario de localStorage al iniciar
    const storedUsername = localStorage.getItem('renacimiento_username');
    if (storedUsername) {
      setUsername(storedUsername);
      setIsAuthenticated(true);
      setCurrentPage('cover'); // Si ya está logueado, ir a la portada
    }
  }, []);

  const handleLogin = (user) => {
    if (user) { // Si user es null, significa que se quiere ir a registro desde login
      setUsername(user);
      setIsAuthenticated(true);
      localStorage.setItem('renacimiento_username', user); // Guardar usuario en localStorage
      setCurrentPage('cover');
    } else {
      setShowRegister(true); // Ir a la pantalla de registro
    }
  };

  const handleRegister = (user) => {
    setUsername(user);
    setIsAuthenticated(true);
    localStorage.setItem('renacimiento_username', user); // Guardar usuario en localStorage
    setCurrentPage('cover');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    localStorage.removeItem('renacimiento_username');
    setCurrentPage('auth'); // Volver a la pantalla de autenticación
    setShowRegister(false); // Asegurarse de que muestre login por defecto
  };

  const pages = [
    { id: 'cover', component: <CoverPage onNext={() => setCurrentPage('intention')} />, name: 'Portada' },
    { id: 'intention', component: <IntentionStatement />, name: 'Declaración' },
    { id: 'recovery', component: <LifeRecoveryPlan />, name: 'Plan de Vida' },
    { id: 'gestalt', component: <GestaltExercises />, name: 'Ejercicios' },
    { id: 'progress', component: <WeeklyProgress />, name: 'Avances' },
    { id: 'inventory', component: <EmotionalInventory />, name: 'Emociones' },
    { id: 'rituals', component: <IntegrationRituals />, name: 'Rituales' },
    { id: 'insights', component: <InsightNotes />, name: 'Insights' },
    { id: 'na', component: <NAStepsLog />, name: 'Pasos NA' },
    { id: 'aa', component: <AAStepsLog />, name: 'Pasos AA' },
    { id: 'spiritual', component: <SpiritualAgenda />, name: 'Agenda Espiritual' },
    { id: 'activities', component: <DailyActivities />, name: 'Actividades Diarias' },
    { id: 'commitment', component: <CommitmentPage />, name: 'Compromiso' }
  ];

  if (!isAuthenticated) {
    return showRegister ? (
      <AuthRegister onRegister={handleRegister} onGoToLogin={() => setShowRegister(false)} />
    ) : (
      <AuthLogin onLogin={handleLogin} />
    );
  }

  return (
    <div className="font-sans">
      {currentPage === 'cover' ? (
        pages.find((page) => page.id === 'cover')?.component
      ) : (
        <div>
          <nav className="bg-indigo-900 text-white p-4 sticky top-0 z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <h1 className="font-serif text-xl">Renacimiento {username}</h1> {/* Título personalizado */}
              <div className="flex items-center space-x-4">
                <select
                  className="bg-indigo-800 text-white p-2 rounded"
                  value={currentPage}
                  onChange={(e) => setCurrentPage(e.target.value)}
                >
                  {pages.map((page) => (
                    <option key={page.id} value={page.id}>
                      {page.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
                >
                  Salir
                </button>
              </div>
            </div>
          </nav>
          
          <div>
            {pages.find((page) => page.id === currentPage)?.component}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

// DONE
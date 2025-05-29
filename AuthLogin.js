import React, { useState } from 'react';

const AuthLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // --- SIMULACIÓN DE AUTENTICACIÓN ---
    // Para Edson Gabriel, cualquier contraseña funciona.
    // Para otros usuarios, se requiere que ambos campos no estén vacíos.
    if (username === 'Edson Gabriel') {
      onLogin(username); // Simula login exitoso para Edson Gabriel
    } else if (username && password) {
      onLogin(username); // Simula login exitoso para cualquier otro usuario con campos llenos
    } else {
      alert('Por favor, ingresa usuario y contraseña.');
    }
    // --- FIN SIMULACIÓN ---
  };

  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-soft border border-gold-200 text-center">
        <h2 className="text-3xl font-serif font-bold text-indigo-900 mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            Entrar
          </button>
        </form>
        <p className="mt-6 text-gray-600">
          ¿No tienes cuenta? <button onClick={() => onLogin(null)} className="text-indigo-600 hover:underline">Regístrate aquí</button>
        </p>
      </div>
    </div>
  );
};

export default AuthLogin;
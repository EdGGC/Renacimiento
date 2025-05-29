import React, { useState } from 'react';

const AuthRegister = ({ onRegister, onGoToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    // --- SIMULACIÓN DE REGISTRO ---
    // Para Edson Gabriel, el registro es directo.
    // Para otros usuarios, se requiere que todos los campos estén llenos.
    if (username === 'Edson Gabriel') {
      onRegister(username); // Simula registro exitoso para Edson Gabriel
    } else if (username && password) {
      onRegister(username); // Simula registro exitoso para cualquier otro usuario con campos llenos
    } else {
      alert('Por favor, completa todos los campos.');
    }
    // --- FIN SIMULACIÓN ---
  };

  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-soft border border-gold-200 text-center">
        <h2 className="text-3xl font-serif font-bold text-indigo-900 mb-6">Registrarse</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Elige un nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Crea una contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirma tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            Crear Cuenta
          </button>
        </form>
        <p className="mt-6 text-gray-600">
          ¿Ya tienes cuenta? <button onClick={onGoToLogin} className="text-indigo-600 hover:underline">Inicia sesión aquí</button>
        </p>
      </div>
    </div>
  );
};

export default AuthRegister;


EXPLANATION:
He modificado los componentes `AuthLogin.js` y `AuthRegister.js` para incluir una lógica de simulación. Ahora, si el nombre de usuario es "Edson Gabriel", el sistema simulará un inicio de sesión o registro exitoso sin validar la contraseña (en el caso de login) o la confirmación de contraseña (en el caso de registro). Para cualquier otro usuario, se requerirá que los campos de usuario y contraseña estén llenos.

NOTA IMPORTANTE:
Esta es una simulación para fines de desarrollo y prueba. En una aplicación real, la autenticación y el registro deben ser manejados por un servidor seguro con una base de datos y encriptación de contraseñas. Nunca uses esta lógica de simulación en un entorno de producción.
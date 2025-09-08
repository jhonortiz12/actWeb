import React, { useState } from 'react';

const ValidContrasena: React.FC = () => {
  const [password, setPassword] = useState<string>('');

  const tieneMinimo8Caracteres = password.length >= 8;
  const tieneNumero = /\d/.test(password);
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneMinuscula = /[a-z]/.test(password);
  const tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const esValida = tieneMinimo8Caracteres && tieneNumero && tieneMayuscula;

  const getColor = (condicion: boolean) => 
    condicion ? 'text-green-600' : 'text-red-600';

  const getIcon = (condicion: boolean) => 
    condicion ? '✅' : '❌';

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🔐 Validador de Contraseñas
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
            />
          </div>

          <div className="space-y-3 bg-gray-50 p-4 rounded-xl">
            <div className={`flex items-center space-x-2 ${getColor(tieneMinimo8Caracteres)}`}>
              <span>{getIcon(tieneMinimo8Caracteres)}</span>
              <span>Mínimo 8 caracteres</span>
            </div>
            
            <div className={`flex items-center space-x-2 ${getColor(tieneNumero)}`}>
              <span>{getIcon(tieneNumero)}</span>
              <span>Contiene un número</span>
            </div>
            
            <div className={`flex items-center space-x-2 ${getColor(tieneMayuscula)}`}>
              <span>{getIcon(tieneMayuscula)}</span>
              <span>Contiene una letra mayúscula</span>
            </div>
            
            <div className={`flex items-center space-x-2 ${getColor(tieneMinuscula)}`}>
              <span>{getIcon(tieneMinuscula)}</span>
              <span>Contiene una letra minúscula</span>
            </div>
            
            <div className={`flex items-center space-x-2 ${getColor(tieneEspecial)}`}>
              <span>{getIcon(tieneEspecial)}</span>
              <span>Contiene un carácter especial</span>
            </div>
          </div>

          {esValida && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-center">
              <span className="font-bold">🎉 ¡Contraseña válida!</span>
              <p className="text-sm mt-1">Tu contraseña cumple con los requisitos básicos de seguridad</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValidContrasena;
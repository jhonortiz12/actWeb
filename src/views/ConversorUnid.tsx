// ConversorUnid.tsx - Agrega htmlFor e id a los inputs
import React, { useState } from 'react';

const ConversorUnid: React.FC = () => {
  const [celsius, setCelsius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>(32);

  const convertir = () => {
    const fahr = celsius * 1.8 + 32;
    setFahrenheit(fahr);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🌡️ Conversor de Unidades
        </h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="celsius-input" className="block text-sm font-medium text-gray-700 mb-2">
              Celsius (°C)
            </label>
            <input
              id="celsius-input" // ← Agregar este id
              type="number"
              value={celsius}
              onChange={(e) => setCelsius(Number(e.target.value))}
              className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              placeholder="0"
            />
          </div>

          <div>
            <label htmlFor="fahrenheit-input" className="block text-sm font-medium text-gray-700 mb-2">
              Fahrenheit (°F)
            </label>
            <input
              id="fahrenheit-input" // ← Agregar este id
              type="number"
              value={fahrenheit}
              readOnly
              className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-300 rounded-xl text-gray-700"
            />
          </div>

          <button
            onClick={convertir}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            🔄 Convertir
          </button>
        </div>

        <div className="mt-6 p-4 bg-orange-50 rounded-xl">
          <p className="text-sm text-orange-700 text-center">
            Fórmula: °F = (°C × 1.8) + 32
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversorUnid;
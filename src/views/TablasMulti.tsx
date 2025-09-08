import React, { useState } from 'react';

const TablasMulti: React.FC = () => {
  const [numero, setNumero] = useState<number>(0);
  const [tabla, setTabla] = useState<number[]>([]);

  const generarTabla = () => {
    const nuevaTabla = [];
    for (let i = 1; i <= 10; i++) {
      nuevaTabla.push(numero * i);
    }
    setTabla(nuevaTabla);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🧮 Tablas de Multiplicar
        </h2>
        
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Ingresa un número"
            value={numero}
            onChange={(e) => setNumero(Number(e.target.value))}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
          
          <button
            onClick={generarTabla}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            🚀 Generar Tabla
          </button>
        </div>

        {tabla.length > 0 && (
          <div className="mt-8 bg-gray-50 rounded-xl p-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Tabla del {numero}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {tabla.map((resultado, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-center"
                >
                  <span className="text-sm text-gray-600">{numero} × {index + 1} = </span>
                  <span className="font-bold text-blue-600">{resultado}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TablasMulti;
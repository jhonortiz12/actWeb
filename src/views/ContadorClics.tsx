import React, { useState, useEffect } from 'react';

const ContadorClics: React.FC = () => {
  const [contador, setContador] = useState<number>(0);

  useEffect(() => {
    const saved = localStorage.getItem('contadorClics');
    if (saved) {
      setContador(parseInt(saved));
    }
  }, []);

  const incrementar = () => {
    const nuevoValor = contador + 1;
    setContador(nuevoValor);
    localStorage.setItem('contadorClics', nuevoValor.toString());
  };

  const resetear = () => {
    setContador(0);
    localStorage.setItem('contadorClics', '0');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🎯 Contador de Clics
        </h2>
        
        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-6xl font-bold rounded-2xl p-8 shadow-lg">
            {contador}
          </div>
          
          <div className="space-y-3">
            <button
              onClick={incrementar}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg"
            >
              ✨ Haz clic
            </button>
            
            <button
              onClick={resetear}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
            >
              🔄 Reiniciar
            </button>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-xl">
            <p className="text-sm text-purple-700">
              💾 El contador se guarda automáticamente. ¡No perderás tu progreso!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContadorClics;
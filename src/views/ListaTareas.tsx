import React, { useState } from 'react';

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

const ListaTareas: React.FC = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState<string>('');

  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }]);
      setNuevaTarea('');
    }
  };

  const eliminarTarea = (id: number) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const toggleCompletada = (id: number) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          📝 Lista de Tareas
        </h2>
        
        <div className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Nueva tarea..."
              value={nuevaTarea}
              onChange={(e) => setNuevaTarea(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
            <button
              onClick={agregarTarea}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              ➕
            </button>
          </div>

          {tareas.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-gray-500">No hay tareas pendientes</p>
              <p className="text-sm text-gray-400">¡Agrega tu primera tarea!</p>
            </div>
          ) : (
            <div className="space-y-2">
              {tareas.map(tarea => (
                <div
                  key={tarea.id}
                  className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                    tarea.completada
                      ? 'bg-green-50 border-green-200 text-green-700'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={tarea.completada}
                      onChange={() => toggleCompletada(tarea.id)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className={tarea.completada ? 'line-through text-gray-500' : ''}>
                      {tarea.texto}
                    </span>
                  </div>
                  <button
                    onClick={() => eliminarTarea(tarea.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}

          {tareas.length > 0 && (
            <div className="bg-blue-50 p-3 rounded-xl">
              <p className="text-sm text-blue-700 text-center">
                📊 Total: {tareas.length} | ✅ Completadas: {tareas.filter(t => t.completada).length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListaTareas;
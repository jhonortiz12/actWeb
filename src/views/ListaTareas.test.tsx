// ListaTareas.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListaTareas from './ListaTareas';

describe('ListaTareas Component', () => {
  test('renderiza input y botón para agregar tareas', () => {
    render(<ListaTareas />);
    // Cambiado: Nuevo placeholder
    expect(screen.getByPlaceholderText('Nueva tarea...')).toBeInTheDocument();
    // Cambiado: Nuevo texto del botón (emoji ➕)
    expect(screen.getByText('➕')).toBeInTheDocument();
  });

  test('agrega nueva tarea a la lista', () => {
    render(<ListaTareas />);
    
    // Cambiado: Nuevo placeholder
    const input = screen.getByPlaceholderText('Nueva tarea...');
    // Cambiado: Nuevo texto del botón (emoji ➕)
    const addButton = screen.getByText('➕');
    
    fireEvent.change(input, { target: { value: 'Comprar leche' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Comprar leche')).toBeInTheDocument();
    expect(input).toHaveValue(''); // Se debe limpiar el input
  });

  test('elimina tarea de la lista', () => {
    render(<ListaTareas />);
    
    // Cambiado: Nuevo placeholder
    const input = screen.getByPlaceholderText('Nueva tarea...');
    // Cambiado: Nuevo texto del botón (emoji ➕)
    const addButton = screen.getByText('➕');
    
    // Agregar dos tareas
    fireEvent.change(input, { target: { value: 'Tarea 1' } });
    fireEvent.click(addButton);
    
    fireEvent.change(input, { target: { value: 'Tarea 2' } });
    fireEvent.click(addButton);
    
    // Eliminar la primera tarea (buscar por emoji 🗑️)
    const deleteButtons = screen.getAllByText('🗑️');
    fireEvent.click(deleteButtons[0]);
    
    expect(screen.queryByText('Tarea 1')).not.toBeInTheDocument();
    expect(screen.getByText('Tarea 2')).toBeInTheDocument();
  });

  test('muestra mensaje cuando no hay tareas', () => {
    render(<ListaTareas />);
    // Cambiado: Nuevo mensaje
    expect(screen.getByText('No hay tareas pendientes')).toBeInTheDocument();
  });

  test('muestra múltiples tareas correctamente', () => {
    render(<ListaTareas />);
    
    // Cambiado: Nuevo placeholder
    const input = screen.getByPlaceholderText('Nueva tarea...');
    // Cambiado: Nuevo texto del botón (emoji ➕)
    const addButton = screen.getByText('➕');
    
    // Agregar varias tareas
    const tasks = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
    tasks.forEach(task => {
      fireEvent.change(input, { target: { value: task } });
      fireEvent.click(addButton);
    });
    
    // Verificar que todas están en la lista
    tasks.forEach(task => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
    
    // Verificar que hay 3 botones de eliminar (buscar por emoji 🗑️)
    expect(screen.getAllByText('🗑️')).toHaveLength(3);
  });
});
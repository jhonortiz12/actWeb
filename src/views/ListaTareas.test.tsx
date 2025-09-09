
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListaTareas from './ListaTareas';

describe('ListaTareas Component', () => {
  test('renderiza input y botón para agregar tareas', () => {
    render(<ListaTareas />);
    
    expect(screen.getByPlaceholderText('Nueva tarea...')).toBeInTheDocument();
    
    expect(screen.getByText('➕')).toBeInTheDocument();
  });

  test('agrega nueva tarea a la lista', () => {
    render(<ListaTareas />);
    
    
    const input = screen.getByPlaceholderText('Nueva tarea...');
    
    const addButton = screen.getByText('➕');
    
    fireEvent.change(input, { target: { value: 'Comprar leche' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Comprar leche')).toBeInTheDocument();
    expect(input).toHaveValue(''); 
  });

  test('elimina tarea de la lista', () => {
    render(<ListaTareas />);
    
   
    const input = screen.getByPlaceholderText('Nueva tarea...');
    
    const addButton = screen.getByText('➕');
    
    
    fireEvent.change(input, { target: { value: 'Tarea 1' } });
    fireEvent.click(addButton);
    
    fireEvent.change(input, { target: { value: 'Tarea 2' } });
    fireEvent.click(addButton);
    
    
    const deleteButtons = screen.getAllByText('🗑️');
    fireEvent.click(deleteButtons[0]);
    
    expect(screen.queryByText('Tarea 1')).not.toBeInTheDocument();
    expect(screen.getByText('Tarea 2')).toBeInTheDocument();
  });

  test('muestra mensaje cuando no hay tareas', () => {
    render(<ListaTareas />);
    
    expect(screen.getByText('No hay tareas pendientes')).toBeInTheDocument();
  });

  test('muestra múltiples tareas correctamente', () => {
    render(<ListaTareas />);
    
    
    const input = screen.getByPlaceholderText('Nueva tarea...');
    const addButton = screen.getByText('➕');
    
   
    const tasks = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
    tasks.forEach(task => {
      fireEvent.change(input, { target: { value: task } });
      fireEvent.click(addButton);
    });
    
  
    tasks.forEach(task => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
    
   
    expect(screen.getAllByText('🗑️')).toHaveLength(3);
  });
});
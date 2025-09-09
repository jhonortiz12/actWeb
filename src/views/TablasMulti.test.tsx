
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TablasMulti from './TablasMulti';

describe('TablasMulti Component', () => {
  test('renderiza el título y los controles', () => {
    render(<TablasMulti />);
    expect(screen.getByText('🧮 Tablas de Multiplicar')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ingresa un número')).toBeInTheDocument();
    expect(screen.getByText('🚀 Generar Tabla')).toBeInTheDocument();
  });

  test('muestra la tabla de multiplicar correcta al ingresar un número', () => {
    const { container } = render(<TablasMulti />);
    
    const input = screen.getByPlaceholderText('Ingresa un número');
    const button = screen.getByText('🚀 Generar Tabla');
    
    
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.click(button);
    
    
    expect(container.textContent).toContain('5 × 1 = 5');
    expect(container.textContent).toContain('5 × 10 = 50');
  });

  test('actualiza la tabla al cambiar el número', () => {
    const { container } = render(<TablasMulti />);
    
    const input = screen.getByPlaceholderText('Ingresa un número');
    const button = screen.getByText('🚀 Generar Tabla');
    
    fireEvent.change(input, { target: { value: '3' } });
    fireEvent.click(button);
    expect(container.textContent).toContain('3 × 1 = 3');
    
   
    fireEvent.change(input, { target: { value: '7' } });
    fireEvent.click(button);
    expect(container.textContent).toContain('7 × 1 = 7');
    expect(container.textContent).not.toContain('3 × 1 = 3');
  });
});
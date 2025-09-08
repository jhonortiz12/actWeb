// ConversorUnid.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConversorUnid from './ConversorUnid';

describe('ConversorUnid Component', () => {
  test('renderiza el formulario correctamente', () => {
    render(<ConversorUnid />);
    expect(screen.getByLabelText(/celsius/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/fahrenheit/i)).toBeInTheDocument();
    // Cambiado: Buscar el nuevo texto del botón con emoji
    expect(screen.getByText('🔄 Convertir')).toBeInTheDocument();
  });

  test('convierte correctamente valores positivos', () => {
    render(<ConversorUnid />);
    
    const celsiusInput = screen.getByLabelText(/celsius/i);
    const fahrenheitInput = screen.getByLabelText(/fahrenheit/i);
    // Cambiado: Buscar el nuevo texto del botón con emoji
    const convertButton = screen.getByText('🔄 Convertir');
    
    // Convertir 25°C a Fahrenheit (25 * 1.8 + 32 = 77)
    fireEvent.change(celsiusInput, { target: { value: '25' } });
    fireEvent.click(convertButton);
    
    expect(fahrenheitInput).toHaveValue(77);
  });

  test('convierte correctamente valores negativos', () => {
    render(<ConversorUnid />);
    
    const celsiusInput = screen.getByLabelText(/celsius/i);
    const fahrenheitInput = screen.getByLabelText(/fahrenheit/i);
    // Cambiado: Buscar el nuevo texto del botón con emoji
    const convertButton = screen.getByText('🔄 Convertir');
    
    // Convertir -10°C a Fahrenheit (-10 * 1.8 + 32 = 14)
    fireEvent.change(celsiusInput, { target: { value: '-10' } });
    fireEvent.click(convertButton);
    
    expect(fahrenheitInput).toHaveValue(14);
  });

  test('convierte correctamente el valor cero', () => {
    render(<ConversorUnid />);
    
    const celsiusInput = screen.getByLabelText(/celsius/i);
    const fahrenheitInput = screen.getByLabelText(/fahrenheit/i);
    // Cambiado: Buscar el nuevo texto del botón con emoji
    const convertButton = screen.getByText('🔄 Convertir');
    
    // Convertir 0°C a Fahrenheit (0 * 1.8 + 32 = 32)
    fireEvent.change(celsiusInput, { target: { value: '0' } });
    fireEvent.click(convertButton);
    
    expect(fahrenheitInput).toHaveValue(32);
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConversorUnid from './ConversorUnid';

describe('ConversorUnid Component', () => {
  test('renderiza el formulario correctamente', () => {
    render(<ConversorUnid />);
    expect(screen.getByLabelText(/celsius/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/fahrenheit/i)).toBeInTheDocument();
   
    expect(screen.getByText('🔄 Convertir')).toBeInTheDocument();
  });

  test('convierte correctamente valores positivos', () => {
    render(<ConversorUnid />);
    
    const celsiusInput = screen.getByLabelText(/celsius/i);
    const fahrenheitInput = screen.getByLabelText(/fahrenheit/i);
    
    const convertButton = screen.getByText('🔄 Convertir');
    
   
    fireEvent.change(celsiusInput, { target: { value: '25' } });
    fireEvent.click(convertButton);
    
    expect(fahrenheitInput).toHaveValue(77);
  });

  test('convierte correctamente valores negativos', () => {
    render(<ConversorUnid />);
    
    const celsiusInput = screen.getByLabelText(/celsius/i);
    const fahrenheitInput = screen.getByLabelText(/fahrenheit/i);
    
    const convertButton = screen.getByText('🔄 Convertir');
    
    
    fireEvent.change(celsiusInput, { target: { value: '-10' } });
    fireEvent.click(convertButton);
    
    expect(fahrenheitInput).toHaveValue(14);
  });

  test('convierte correctamente el valor cero', () => {
    render(<ConversorUnid />);
    
    const celsiusInput = screen.getByLabelText(/celsius/i);
    const fahrenheitInput = screen.getByLabelText(/fahrenheit/i);
    
    const convertButton = screen.getByText('🔄 Convertir');
    
    
    fireEvent.change(celsiusInput, { target: { value: '0' } });
    fireEvent.click(convertButton);
    
    expect(fahrenheitInput).toHaveValue(32);
  });
});
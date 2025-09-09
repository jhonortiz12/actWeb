
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContadorClics from './ContadorClics';


const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('ContadorClics Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('inicia en 0 si no hay valor en localStorage', () => {
    render(<ContadorClics />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('incrementa el contador al hacer clic', () => {
    render(<ContadorClics />);
    
    
    const button = screen.getByText('✨ Haz clic');
    
    fireEvent.click(button);
    expect(screen.getByText('1')).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('guarda el valor en localStorage', () => {
    render(<ContadorClics />);
    
    
    const button = screen.getByText('✨ Haz clic');
    
    fireEvent.click(button);
    fireEvent.click(button);
    
    expect(localStorage.getItem('contadorClics')).toBe('2');
  });

  test('carga el valor de localStorage al renderizar', () => {
    
    localStorage.setItem('contadorClics', '5');
    
    render(<ContadorClics />);
    
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
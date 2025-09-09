
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ValidContrasena from './ValidContrasena';

describe('ValidContrasena Component', () => {
  test('renderiza los campos y lista de requisitos', () => {
    render(<ValidContrasena />);
    
    expect(screen.getByPlaceholderText('Ingresa tu contraseña')).toBeInTheDocument();
    expect(screen.getByText('Mínimo 8 caracteres')).toBeInTheDocument();
    expect(screen.getByText('Contiene un número')).toBeInTheDocument();
    expect(screen.getByText('Contiene una letra mayúscula')).toBeInTheDocument();
    expect(screen.getByText('Contiene una letra minúscula')).toBeInTheDocument();
    expect(screen.getByText('Contiene un carácter especial')).toBeInTheDocument();
  });

  test('actualiza indicadores al escribir contraseña', () => {
    render(<ValidContrasena />);
    
    const passwordInput = screen.getByPlaceholderText('Ingresa tu contraseña');
    
    
    fireEvent.change(passwordInput, { target: { value: 'hola' } });
    
    
    const lengthReq = screen.getByText('Mínimo 8 caracteres');
    const contenedor = lengthReq.parentElement; 
    
    expect(contenedor).toHaveClass('text-red-600');
    
   
    const icono = lengthReq.previousElementSibling;
    expect(icono).toHaveTextContent('❌');
  });

  test('muestra mensaje de contraseña válida cuando se cumplen todos los requisitos', () => {
    render(<ValidContrasena />);
    
    const passwordInput = screen.getByPlaceholderText('Ingresa tu contraseña');
    
    
    fireEvent.change(passwordInput, { target: { value: 'SecurePass123!' } });
    
   
    expect(screen.getByText('🎉 ¡Contraseña válida!')).toBeInTheDocument();
    expect(screen.getByText('Tu contraseña cumple con los requisitos básicos de seguridad')).toBeInTheDocument();
    
    
    const lengthReq = screen.getByText('Mínimo 8 caracteres');
    const contenedor = lengthReq.parentElement; 
    
    expect(contenedor).toHaveClass('text-green-600');
    
    const lengthIcon = lengthReq.previousElementSibling;
    expect(lengthIcon).toHaveTextContent('✅');
  });
});
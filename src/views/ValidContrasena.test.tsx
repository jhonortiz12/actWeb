// ValidContrasena.test.tsx
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
    
    // Escribir "hola" - no cumple requisitos
    fireEvent.change(passwordInput, { target: { value: 'hola' } });
    
    // Verificar que el CONTENEDOR tiene la clase de color rojo
    const lengthReq = screen.getByText('Mínimo 8 caracteres');
    const contenedor = lengthReq.parentElement; // ← El div padre
    
    expect(contenedor).toHaveClass('text-red-600');
    
    // Verificar que muestra ❌
    const icono = lengthReq.previousElementSibling;
    expect(icono).toHaveTextContent('❌');
  });

  test('muestra mensaje de contraseña válida cuando se cumplen todos los requisitos', () => {
    render(<ValidContrasena />);
    
    const passwordInput = screen.getByPlaceholderText('Ingresa tu contraseña');
    
    // Contraseña que cumple todos los requisitos
    fireEvent.change(passwordInput, { target: { value: 'SecurePass123!' } });
    
    // Verificar mensaje de éxito
    expect(screen.getByText('🎉 ¡Contraseña válida!')).toBeInTheDocument();
    expect(screen.getByText('Tu contraseña cumple con los requisitos básicos de seguridad')).toBeInTheDocument();
    
    // Verificar que el CONTENEDOR tiene la clase de color verde
    const lengthReq = screen.getByText('Mínimo 8 caracteres');
    const contenedor = lengthReq.parentElement; // ← El div padre
    
    expect(contenedor).toHaveClass('text-green-600');
    
    // Verificar que muestra ✅
    const lengthIcon = lengthReq.previousElementSibling;
    expect(lengthIcon).toHaveTextContent('✅');
  });
});
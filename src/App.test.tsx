import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza el título principal", () => {
  render(<App />);
  // Cambia el texto buscado para que coincida con el nuevo título
  expect(screen.getByText(/Bienvenido a React/i)).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import Router from './application/router';

beforeEach(() => {
  render(<Router/>);
});

test('renders reading a json file', () => {
  const linkElement = screen.getByText(/Photos - Reading a json file/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders read-json tab', () => {
  const tab = screen.getByText(/read-json/i);
  expect(tab).toBeInTheDocument();
});

test('renders read-json button', () => {
  const button = screen.getByRole('link', {name: /read-json/i});
  expect(button).toBeInTheDocument();
});

//screen.find -> es para encontrar elementos asíncronos
//screen.get -> es para encontrar elementos síncronos (deberían existir en la app)
//screen.query -> es para consultar elementos que puedan estar o no en el dom

//All devuelte todos los elementos y By un elemento único ej. screen.findBy o screen.findAll

// eslint-disable-next-line testing-library/no-debugging-utils
//screen.debug(); -> para hacer un console.log de lo que encentra



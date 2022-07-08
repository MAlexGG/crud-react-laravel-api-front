import { render, screen } from '@testing-library/react';
import Router from './application/router';

test('renders reading a json file', () => {
  render(<Router/>);
  const linkElement = screen.getByText(/Photos - Reading a json file/i);
  expect(linkElement).toBeInTheDocument();
});

//screen.find -> es para encontrar elementos asíncronos
//screen.get -> es para encontrar elementos síncronos (deberían existir en la app)
//screen.query -> es para consultar elementos que puedan estar o no en el dom

//All devuelte todos los elementos y By un elemento único ej. screen.findBy o screen.findAll

// eslint-disable-next-line testing-library/no-debugging-utils
//screen.debug(); -> para hacer un console.log de lo que encentra



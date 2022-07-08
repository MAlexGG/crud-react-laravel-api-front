import { render, screen } from '@testing-library/react';
import Crud from './crud';

test('renders CRUD using the browser memory', () => {
  render(<Crud/>);
  const linkElement = screen.getByText(/CRUD using the browser memory/i);
  expect(linkElement).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});



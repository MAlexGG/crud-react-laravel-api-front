import { render, screen } from '@testing-library/react';
import Router from './application/router';

test('renders reading a json file', () => {
  render(<Router/>);
  const linkElement = screen.getByText(/Photos - Reading a json file/i);
  expect(linkElement).toBeInTheDocument();
});

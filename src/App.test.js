import { render, screen } from '@testing-library/react';
import Router from './application/router';

test('renders learn react link', () => {
  render(<Router/>);
  const linkElement = screen.getByText(/Photos - Reading a json file/i);
  expect(linkElement).toBeInTheDocument();
});

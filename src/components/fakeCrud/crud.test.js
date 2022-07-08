import { fireEvent, render, screen } from '@testing-library/react';
import Crud from './crud';

beforeEach(() => {
  render(<Crud/>);
})

test('renders CRUD using the browser memory', () => {
  const linkElement = screen.getByText(/CRUD using the browser memory/i);
  expect(linkElement).toBeInTheDocument();
  //screen.debug();
});

test('should renders the form element', () => {
  const input = screen.getByPlaceholderText(/image name/i);
  const button = screen.getByRole('button', {name: /send/i});
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  //screen.debug();
});

test('should get a image name', async () => {
  const inputName = screen.getByLabelText(/imgName/i);
  const inputUser = screen.getByLabelText(/imgUser/i);
  const inputURL = screen.getByLabelText(/imgURL/i);
  const button = screen.getByRole('button', {name: /send/i});

  fireEvent.change(inputName, {target:{value: 'Portugal'}});
  fireEvent.change(inputUser, {target:{value: 'Alex'}});
  fireEvent.change(inputURL, {target:{value: 'moon'}});
  fireEvent.click(button);

  const imgName = await screen.findByText(/Portugal/i)
  expect(imgName).toBeInTheDocument();
  //screen.debug();
})


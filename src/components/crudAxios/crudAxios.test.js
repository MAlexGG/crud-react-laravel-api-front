import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import CrudAxios from './crudAxios';
import axios from 'axios';
import { serviceAxios } from '../../services/serviceAxios';

jest.mock('axios');

beforeEach(() => {
    render(
        <Router>
            <CrudAxios/>
        </Router>
    );
})

afterEach(() => {
    axios.get.mockClear();
})

test('renders CRUD with axios and json server', () => {
  const linkElement = screen.getByText(/CRUD with axios and json server/i);
  expect(linkElement).toBeInTheDocument();
  //screen.debug();
});

test('get cards with axios, mocking data', async () => {

    const cards = [
        {
            id: 1,
            imgName: "Waikiki Beach sunset",
            imgUser: "María",
            imgURL: "beach"
        }
    ];

   axios.get.mockResolvedValueOnce(cards);

    const api = serviceAxios();
    const result = await api.get();

    expect(axios.get).toHaveBeenCalledWith(api.url);
    expect(result).toEqual(cards);

});

import React from 'react';
import { render, act } from '@testing-library/react';
import App from './App';
test('app start', () => {
  act(() => {
    // рендер компонентов
    render(<App />);
  });
  // const { getByText } = render(<App />);
  // console.log(getByText);
  // const linkElement = getByText(/Welcome a Home/i);
  // expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
   beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
   });
test('app start', () => {
    // рендер компонентов
    const div = document.createElement('div');
    ReactDOM.render(<App/>,div)
    ReactDOM.unmountComponentAtNode(div)
    render(<App />);
  // const { getByText } = render(<App />);
  // console.log(getByText);
  // const linkElement = getByText(/Welcome a Home/i);
  // expect(linkElement).toBeInTheDocument();
});

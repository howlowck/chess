import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('renders chess link', () => {
  render(<App />);
  const linkElement = screen.getByText(/chess/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders examples', () => {
  render(<App />);
  const linkElement = screen.getByText(/Examples/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders little lemon and link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

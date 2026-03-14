// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MaterialUiNext title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MaterialUiNext/i);
    expect(titleElement).toBeInTheDocument();
});

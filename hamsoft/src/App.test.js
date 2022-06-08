import { render, screen } from '@testing-library/react';
import App from './App';


describe("Website", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });

  it('mentions our company name', () => {
    render(<App />);
    const linkElement = screen.getByText(/HamSoft/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('load our company logo', () => {
    render(<App />);
    const image = screen.getByAltText("logo"); // throws an expception if the element cannot be found
    expect(image).toHaveAttribute('src', '/hamsoft-logo.gif');
  });
});
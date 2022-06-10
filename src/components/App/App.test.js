import { render, screen } from '@testing-library/react';

import App from 'components/App/App';
import hamsoftLogo from 'assets/brand/hamsoft-logo.gif'

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

  it('should try to render the company logo', () => {
    render(<App />);
    const image = screen.getByAltText("logo"); // throws an expception if the element cannot be found
    expect(image).toHaveAttribute('src', hamsoftLogo);
  });

});
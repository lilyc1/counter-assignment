// import necessary react testing library helpers here
// import the Counter component here
import { render, screen , fireEvent } from '@testing-library/react';
import Counter from '../components/Counter.js';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const welcomeMessage = screen.getByText("Counter");
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const valueZero = screen.getByTestId("count");
  expect(valueZero.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countVar = screen.getByTestId("count");
  const plusButton = screen.getByText("+");
  fireEvent.click(plusButton);
  expect(countVar.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countVar = screen.getByTestId("count");
  const minusButton = screen.getByText("-");
  fireEvent.click(minusButton);
  expect(countVar.textContent).toBe("-1");
});

import { TipCalculatorContext } from '../TipCalculatorContext/TipCalculatorContext';
import { Summary } from './Summary';
import { fireEvent, render, screen } from '@testing-library/react';
import { ResetButton } from './Summary.styled';
const renderSummary = (props) => {
  const setBill = jest.fn();
  const setNoOfPersons = jest.fn();
  const setCustomTip = jest.fn();
  const setTip = jest.fn();

  render(
    <TipCalculatorContext.Provider
      value={{ setBill, setNoOfPersons, setCustomTip, setTip }}
    >
      <Summary />
    </TipCalculatorContext.Provider>
  );

  return { setBill, setNoOfPersons, setCustomTip, setTip };
};

describe('Summary', () => {
  it('should call all context setters with 0, to clear the fields', () => {
    const { setBill, setNoOfPersons, setCustomTip, setTip } = renderSummary();
    const resetButton = screen.getByTestId('reset-button');
    fireEvent.click(resetButton);
    expect(setBill).toBeCalledWith(0);
    expect(setCustomTip).toBeCalledWith(0);
    expect(setTip).toBeCalledWith(0);
    expect(setNoOfPersons).toBeCalledWith(0);
  });
});

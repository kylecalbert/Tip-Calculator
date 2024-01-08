import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TipInputForm } from './TipInputForm';
import { TipCalculatorContext } from '../TipCalculatorContext/TipCalculatorContext';

const renderTipInputForm = (props) => {
  const setCustomTip = jest.fn();
  const setTip = jest.fn();

  render(
    <TipCalculatorContext.Provider value={{ setCustomTip, setTip }}>
      <TipInputForm />
    </TipCalculatorContext.Provider>
  );

  return { setTip, setCustomTip };
};

describe('TipInputForm Component', () => {
  it('should call the setTip with selected value and call the setCustomTip with 0', () => {
    const { setTip, setCustomTip } = renderTipInputForm();
    fireEvent.click(screen.getByText('10%'));
    expect(setTip).toHaveBeenCalledWith(10);
    fireEvent.click(screen.getByText('15%'));
    expect(setTip).toHaveBeenCalledWith(15);
    expect(setCustomTip).toHaveBeenCalledWith(0);
  });

  it('should call setCustomTip with entered value and call the tip with 0', () => {
    const { setCustomTip, setTip } = renderTipInputForm();
    const customInput = screen.getByPlaceholderText('Custom');
    fireEvent.change(customInput, { target: { value: 50 } });
    expect(setCustomTip).toHaveBeenCalledWith(50);
    expect(setTip).toHaveBeenCalledWith(0);
  });
});

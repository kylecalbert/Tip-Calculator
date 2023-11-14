import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TipInputForm } from './TipInputForm';
import { TipCalculatorContext } from '../TipCalculatorContext/TipCalculatorContext';

const renderTipInputForm = (props) => {
  const setCustomTip = jest.fn();
  const setTip = jest.fn();

  render(
    <TipCalculatorContext.Provider value={{ setCustomTip, setTip, tip: 0 }}>
      <TipInputForm />
    </TipCalculatorContext.Provider>
  );

  return { setTip, setCustomTip };
};

describe('TipInputForm Component', () => {
  it('should update setTip to the button value clicked', () => {
    const { setTip } = renderTipInputForm();
    fireEvent.click(screen.getByText('10%'));
    expect(setTip).toHaveBeenCalledWith(10);
    fireEvent.click(screen.getByText('15%'));
    expect(setTip).toHaveBeenCalledWith(15);
  });

  it('should disable the custum tip input field when a button is clicked', () => {
    const { setTip } = renderTipInputForm();
    const customTipInput = screen.getByPlaceholderText('Custom');
    fireEvent.click(screen.getByText('10%'));
    expect(setTip).toHaveBeenCalledWith(10);
    expect(customTipInput).toBeDisabled();
  });

  it('should update customTip to the custom value entered', () => {
    const { setCustomTip } = renderTipInputForm();
    const customInput = screen.getByPlaceholderText('Custom');
    fireEvent.change(customInput, { target: { value: 25 } });

    expect(setCustomTip).toHaveBeenCalledWith(25); ///not sure why this is not working?
  });
});

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Bill } from './TipInputForm';
import { TipCalculatorContext } from '../TipCalculatorContext/TipCalculatorContext';

const renderBill = (props) => {
  const setCustomTip = jest.fn();
  const setTip = jest.fn();
  const setSelectedButton = jest.fn();

  render(
    <TipCalculatorContext.Provider
      value={{ setCustomTip, setTip, setSelectedButton, tip: 0 }}
    >
      <Bill />
    </TipCalculatorContext.Provider>
  );

  return { setTip, setCustomTip, setSelectedButton };
};

describe('Bill Component', () => {
  it('should update setTip to the button value clicked', () => {
    const { setTip, setSelectedButton } = renderBill();
    fireEvent.click(screen.getByText('10%'));
    expect(setSelectedButton).toHaveBeenCalledWith(10);
    expect(setTip).toHaveBeenCalledWith(10);

    fireEvent.click(screen.getByText('15%'));
    expect(setTip).toHaveBeenCalledWith(15);

    ///custom tip input field should be disabled
    const customTipInput = screen.getByPlaceholderText('Custom');
    expect(customTipInput).toBeDisabled();

    fireEvent.click(screen.getByText('15%'));
    expect(setTip).toHaveBeenCalledWith(0); ///not sure why this is not working
  });

  it('should update customTip to the custom value entered', () => {
    const { setCustomTip } = renderBill();
    const customInput = screen.getByPlaceholderText('Custom');
    fireEvent.change(customInput, { target: { value: 25 } });

    expect(setCustomTip).toHaveBeenCalledWith(25); ///not sure why this is not working?
  });
});

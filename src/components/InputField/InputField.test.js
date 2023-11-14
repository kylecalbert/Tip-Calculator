import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { InputField } from './InputField';
import { TipCalculatorContext } from '../TipCalculatorContext/TipCalculatorContext';
const renderInputField = (props) => {
  const setBill = jest.fn();
  const setNoOfPersons = jest.fn();

  render(
    <TipCalculatorContext.Provider value={{ setBill, setNoOfPersons }}>
      <InputField title={props.title} type={props.type} icon={props.icon} />
    </TipCalculatorContext.Provider>
  );

  return { setBill, setNoOfPersons };
};

describe('InputField', () => {
  it('should call setBill when the bill input field is changed', () => {
    const { setBill } = renderInputField({
      title: 'Bill',
      type: 'number',
      icon: 'dollarSign',
    });
    const billInput = screen.getByTestId('input-field');
    fireEvent.change(billInput, { target: { value: '50' } });
    expect(setBill).toHaveBeenCalledWith('50');
  });

  it('should call setNoOfPersons when the person input field is changed', () => {
    const { setNoOfPersons } = renderInputField({
      title: 'Number of People',
      type: 'number',
      icon: 'personIcon',
    });
    const personInput = screen.getByTestId('input-field');
    fireEvent.change(personInput, { target: { value: '2' } });
    expect(setNoOfPersons).toHaveBeenCalledWith('2');
  });

  it('should display error message when person or bill is set to zero', () => {
    renderInputField({
      title: 'Number of People',
      type: 'number',
      icon: 'personIcon',
    });

    const personInput = screen.getByTestId('input-field');
    fireEvent.change(personInput, { target: { value: '0' } });
    const errorMessage = screen.getByText('Cannot be Zero');
    expect(errorMessage).toBeInTheDocument();
  });
});

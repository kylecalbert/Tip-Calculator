import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { InputField } from './InputField';
import { BillContext } from '../BillContext/BillContext';
const renderInputField = (props) => {
  const setBill = jest.fn();
  const setPerson = jest.fn();

  render(
    <BillContext.Provider value={{ setBill, setPerson }}>
      <InputField title={props.title} type={props.type} icon={props.icon} />
    </BillContext.Provider>
  );

  return { setBill, setPerson };
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

  it('should call setPerson when the person input field is changed', () => {
    const { setPerson } = renderInputField({
      title: 'Number of People',
      type: 'number',
      icon: 'personIcon',
    });
    const personInput = screen.getByTestId('input-field');
    fireEvent.change(personInput, { target: { value: '2' } });
    expect(setPerson).toHaveBeenCalledWith('2');
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

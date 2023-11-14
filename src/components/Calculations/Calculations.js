import { BillContext } from '../TipCalculatorContext/TipCalculatorContext';
import { useContext } from 'react';

///tip per person = bill amount x tip percentage / number of people

export const tipPerPerson = (tip, noOfPersons, bill) => {
  const tipPerPerson = (bill * tip) / noOfPersons;
  return tipPerPerson;
};

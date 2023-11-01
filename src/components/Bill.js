import React from 'react';
import {
  BillContainer,
  BillSelectionContainer,
  SelectTipContainer,
  SelectTipGrid,
  SelectTipItems,
  Title,
} from './Bill.styled';
import InputField from './InputField/InputField';

import dollarSign from '../images/icon-dollar.svg';
import personIcon from '../images/icon-person.svg';

export const Bill = () => {
  return (
    <BillContainer>
      <BillSelectionContainer>
        <InputField title="Bill" type="number" icon={dollarSign} />
        <SelectTipContainer>
          <div>Select Tip %</div>
          <SelectTipGrid>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
          </SelectTipGrid>
        </SelectTipContainer>
        <InputField title="Number of People" type="number" icon={personIcon} />
      </BillSelectionContainer>
    </BillContainer>
  );
};

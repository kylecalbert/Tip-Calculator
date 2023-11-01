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
import { TipInput } from './Bill.styled';
export const Bill = () => {
  return (
    <BillContainer>
      <BillSelectionContainer>
        <InputField
          title="Bill"
          defaultValue="0"
          type="number"
          icon={dollarSign}
        />
        <SelectTipContainer>
          <div>Select Tip %</div>
          <SelectTipGrid>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
            <TipInput />
          </SelectTipGrid>
        </SelectTipContainer>
        <InputField title="Number of People" type="number" icon={personIcon} />
      </BillSelectionContainer>
    </BillContainer>
  );
};

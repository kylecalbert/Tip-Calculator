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

export const Bill = () => {
  return (
    <BillContainer>
      <BillSelectionContainer>
        <InputField title="Bill" type="number" />
        <SelectTipContainer>
          <Title>Select Tip %</Title>
          <SelectTipGrid>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
            <SelectTipItems>25%</SelectTipItems>
          </SelectTipGrid>
        </SelectTipContainer>
        <InputField title="Number of People" type="number" />
      </BillSelectionContainer>
    </BillContainer>
  );
};

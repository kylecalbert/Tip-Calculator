import React from 'react';
import {
  BillContainer,
  BillInput,
  BillInputContainer,
  BillSelectionContainer,
  SelectTipContainer,
  SelectTipGrid,
  SelectTipItems,
  Title,
} from './Bill.styled';

export const Bill = () => {
  return (
    <BillContainer>
      <BillSelectionContainer>
        <BillInputContainer>
          <Title>Bill</Title>
          <BillInput />
        </BillInputContainer>
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
        <BillInputContainer>
          <Title>Number of People</Title>
          <BillInput />
        </BillInputContainer>
      </BillSelectionContainer>
    </BillContainer>
  );
};

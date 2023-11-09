import React, { useState } from 'react';
import {
  BillContainer,
  BillSelectionContainer,
  SelectTipContainer,
  SelectTipGrid,
  SelectTipItems,
} from './Bill.styled';
import InputField from '../InputField/InputField';
import dollarSign from '../../images/icon-dollar.svg';
import personIcon from '../../images/icon-person.svg';
import { TipInput } from './Bill.styled';
import { Text } from '../Text/Text';
import colors from '../colors/colors';
import { sizes } from './sizes/sizes';

///put these in context
/// state for number of people
//state for bill input
//put numebr instead of string in usetstae

//create new branch
export const Bill = () => {
  const [People, setPeople] = useState('');
  const [bill, setBill] = useState('');

  return (
    <BillContainer>
      <BillSelectionContainer>
        <InputField
          title="Bill"
          placeholder={'0'}
          type="number"
          icon={dollarSign}
          amount={bill}
        />
        <SelectTipContainer>
          <Text padding="0 0 10px 0" color={colors.neutral.darkGrayishCyan}>
            Select Tip %
          </Text>
          <SelectTipGrid>
            <SelectTipItems>
              <Text size={sizes.small}>5%</Text>
            </SelectTipItems>
            <SelectTipItems>
              <Text size={sizes.small}>10%</Text>
            </SelectTipItems>
            <SelectTipItems>
              <Text size={sizes.small}>15%</Text>
            </SelectTipItems>
            <SelectTipItems>
              <Text size={sizes.small}>20%</Text>
            </SelectTipItems>
            <SelectTipItems>
              <Text size={sizes.small}>25%</Text>
            </SelectTipItems>
            <TipInput placeholder="Custom" />
          </SelectTipGrid>
        </SelectTipContainer>
        <InputField
          placeholder="Custom"
          title="Number of People"
          type="number"
          amount={People}
          icon={personIcon}
        />
      </BillSelectionContainer>
    </BillContainer>
  );
};

////do calculationof the tip amount per person is

///tip per person = bill amount x tip percentage / number of people

///place the data in a context

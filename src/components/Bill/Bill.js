import React from 'react';
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
export const Bill = () => {
  return (
    <BillContainer>
      <BillSelectionContainer>
        <InputField
          title="Bill"
          placeholder={'0'}
          type="number"
          icon={dollarSign}
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
          icon={personIcon}
        />
      </BillSelectionContainer>
    </BillContainer>
  );
};

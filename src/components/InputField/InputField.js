import React from 'react';

import {
  BillInput,
  Title,
  BillInputContainer,
  IconContainer,
} from './InputField.styled';
import { Text } from '../Text/Text';
import colors from '../colors';
const InputField = ({ title, type, icon }) => {
  return (
    <BillInputContainer>
      <Text padding="0 0 10px 0" color={colors.neutral.darkGrayishCyan}>
        {title}
      </Text>
      <IconContainer src={icon} />
      <BillInput type={type} step={'number'} defaultValue="0" />
    </BillInputContainer>
  );
};

export default InputField;

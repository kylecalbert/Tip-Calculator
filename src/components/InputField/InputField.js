import React from 'react';

import {
  BillInput,
  Title,
  BillInputContainer,
  IconContainer,
} from './InputField.styled';
const InputField = ({ title, type, icon }) => {
  return (
    <BillInputContainer>
      <Title>{title}</Title>
      <IconContainer src={icon} />
      <BillInput type={type} step={'number'} defaultValue="0" />
    </BillInputContainer>
  );
};

export default InputField;

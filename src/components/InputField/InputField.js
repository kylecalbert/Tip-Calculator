import React from 'react';

import { BillInputContainer, Title, BillInput } from '../Bill.styled';

const InputField = ({ title, type }) => {
  return (
    <BillInputContainer>
      <Title>{title}</Title>
      <BillInput type={type} />
    </BillInputContainer>
  );
};

export default InputField;

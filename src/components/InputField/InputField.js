import React, { useState, useContext } from 'react';
import {
  IconContainer,
  StyledInput,
  StyledInputContainer,
  ValidationContainer,
} from './InputField.styled';
import { Text } from '../Text/Text';
import colors from '../colors/colors';
import { BillContext } from '../BillContext/BillContext';

export const InputField = ({ title, type, icon }) => {
  const { setBill, setPerson } = useContext(BillContext);

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (title === 'Bill') {
      setBill(inputValue);
    }
    if (title === 'Number of People') {
      setPerson(inputValue);
    }

    if (inputValue === '0') {
      setError('Cannot be Zero');
    } else {
      setError('');
    }
  };

  return (
    <StyledInputContainer>
      <ValidationContainer>
        <Text padding="0 0 10px 0" color={colors.neutral.darkGrayishCyan}>
          {title}
        </Text>
        {error && (
          <Text padding="0 0 10px 0" color={colors.error}>
            {error}
          </Text>
        )}
      </ValidationContainer>
      <IconContainer src={icon} />
      <StyledInput
        placeholder="0"
        type={type}
        onChange={handleInputChange}
        error={Boolean(error)}
        data-testid="input-field"
      />
    </StyledInputContainer>
  );
};

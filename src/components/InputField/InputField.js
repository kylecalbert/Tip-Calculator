import React, { useState } from 'react';
import {
  BillInput,
  BillInputContainer,
  IconContainer,
  ValidationContainer,
} from './InputField.styled';
import { Text } from '../Text/Text';
import colors from '../colors';

const InputField = ({ title, type, icon }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (inputValue === '0' || inputValue === '') {
      setError('Cannot be Zero');
    } else {
      setError('');
    }
  };

  return (
    <BillInputContainer onSubmit={handleSubmit}>
      <ValidationContainer>
        <Text padding="0 0 10px 0" color={colors.neutral.darkGrayishCyan}>
          {title}
        </Text>
        {submitted && error && (
          <Text padding="0 0 10px 0" color={colors.error}>
            {error}
          </Text>
        )}
      </ValidationContainer>
      <IconContainer src={icon} />
      <BillInput
        placeholder="Custom"
        type={type}
        step={'number'}
        defaultValue="0"
        onChange={handleInputChange}
        error={submitted && Boolean(error)}
      />
    </BillInputContainer>
  );
};

export default InputField;

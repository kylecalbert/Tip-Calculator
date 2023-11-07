import React, { useState } from 'react';
import {
  IconContainer,
  StyledInput,
  StyledInputContainer,
  ValidationContainer,
} from './InputField.styled';
import { Text } from '../Text/Text';
import colors from '../colors/colors';

const InputField = ({ title, type, icon }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  ///updating state of the input value
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  ///on enter click set submit to true, to show item has been clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (inputValue === '0' || inputValue === '') {
      setError('Cannot be Zero or Empty');
    } else {
      setError('');
    }
  };

  return (
    <StyledInputContainer onSubmit={handleSubmit}>
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
      <StyledInput
        placeholder="0"
        type={type}
        onChange={handleInputChange}
        error={submitted && Boolean(error)}
      />
    </StyledInputContainer>
  );
};

export default InputField;

import React from 'react';
import styled from 'styled-components';
import colors from '../colors/colors';
import { TipInputForm } from '../TipInputForm/TipInputForm';
import { Summary } from '../Summary/Summary';
export const TipCalculatorContainer = styled.div`
  display: flex;

  background: blue;
  width: 50rem;
  height: 25rem;
  border-radius: 2rem;
  padding: 4rem;

  @media (max-width: 950px) {
    display: flex;
    /* flex-direction: column; */
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 1rem;
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 1rem;
    margin-left: 1rem;
  }
`;

const TipCalculator = () => {
  return (
    <TipCalculatorContainer>
      <TipInputForm />
      <Summary />
    </TipCalculatorContainer>
  );
};

export default TipCalculator;

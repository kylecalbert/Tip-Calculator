import React, { useContext } from 'react';

import {
  BottomContainer,
  ResetButton,
  SummaryContainer,
  TipInfoContainer,
  TopContainer,
  TotalContainer,
} from './Summary.styled';

import { Text } from '../Text/Text';
import { TipInfo } from './TipInfo/TipInfo';
import { tipPerPerson, totalPerPerson } from '../Calculations/Calculations';
import { TipCalculatorContext } from '../TipCalculatorContext/TipCalculatorContext';

export const Summary = () => {
  const {
    bill,
    tip,
    noOfPersons,
    customTip,
    setCustomTip,
    setTip,
    setBill,
    setNoOfPersons,
  } = useContext(TipCalculatorContext);
  const tipAmountPerPerson = tipPerPerson(tip, customTip, noOfPersons, bill);
  const totalAmountPerPerson = totalPerPerson(
    tip,
    customTip,
    noOfPersons,
    bill
  );

  console.log(tipAmountPerPerson);

  const handleReset = () => {
    setCustomTip(0);
    setTip(0);
    setNoOfPersons(0);
    setBill(0);
  };

  return (
    <SummaryContainer>
      <TopContainer>
        <TotalContainer>
          <TipInfo
            title1={'Tip Amount'}
            title2={'/ person'}
            value={tipAmountPerPerson}
          />
          <TipInfo
            title1={'Total Amount'}
            title2={'/ person'}
            value={totalAmountPerPerson}
          />
        </TotalContainer>
      </TopContainer>

      <BottomContainer>
        <ResetButton data-testid="reset-button" onClick={handleReset}>
          <Text>Reset</Text>
        </ResetButton>
      </BottomContainer>
    </SummaryContainer>
  );
};

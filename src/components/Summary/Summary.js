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
  const { bill, tip, noOfPersons, customTip } =
    useContext(TipCalculatorContext);
  const tipAmountPerPerson = tipPerPerson(tip, customTip, noOfPersons, bill);
  const totalAmountPerPerson = totalPerPerson(
    tip,
    customTip,
    noOfPersons,
    bill
  );

  console.log(tipAmountPerPerson);
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
        <ResetButton>
          <Text>Reset</Text>
        </ResetButton>
      </BottomContainer>
    </SummaryContainer>
  );
};

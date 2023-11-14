import React from 'react';

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

export const Summary = () => {
  return (
    <SummaryContainer>
      <TopContainer>
        <TotalContainer>
          <TipInfo title1={'Tip Amount'} title2={'/ person'} />
          <TipInfo title1={'Tip Amount'} title2={'/ person'} />
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

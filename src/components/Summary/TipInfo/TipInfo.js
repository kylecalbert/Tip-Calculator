import React from 'react';
import styled from 'styled-components';
import { Text } from '../../Text/Text';

export const TipInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.5rem;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TipInfo = ({ title1, title2, value }) => {
  return (
    <TipInfoContainer>
      <TitleContainer>
        <Text>{title1}</Text>
        <Text size=".8rem">{title2}</Text>
      </TitleContainer>

      <Text size="2.5rem">${value}</Text>
    </TipInfoContainer>
  );
};

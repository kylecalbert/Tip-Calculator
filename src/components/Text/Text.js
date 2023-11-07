import React from 'react';
import styled from 'styled-components';

import colors from '../colors/colors';
const StyledText = styled.div`
  color: ${(props) => props.color || colors.neutral.white};
  font-size: ${(props) => props.size || '1rem'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;
export const Text = ({ ...props }) => {
  return <StyledText {...props}></StyledText>;
};

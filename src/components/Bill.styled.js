import styled from 'styled-components';
import colors from './colors';

export const BillContainer = styled.div`
  display: flex;
  background: ${colors.neutral.white};
  width: 60rem;
  height: 25rem;
  border-radius: 2rem;
  padding: 4rem;
`;

export const BillSelectionContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 2.5rem;
  width: 50%;
  background-color: yellow;
  padding: 0 16px 2px 2px;
`;

export const BillInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const BillInput = styled.input`
  display: flex;
  height: 3rem;
  background: ${colors.neutral.veryLightGrayishCyan};
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
`;

export const SelectTipContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectTipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background-color: green;
`;

export const SelectTipItems = styled.div``;

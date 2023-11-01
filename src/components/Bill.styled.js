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
  /* background-color: yellow; */
  padding: 0 16px 2px 2px;
`;

export const SelectTipContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectTipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* background-color: green; */
  gap: 10px;
`;

export const SelectTipItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 1rem;
  background-color: ${colors.neutral.veryDarkCyan};
  border-radius: 0.3rem;
  padding: 1rem;
`;

export const TipInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 1rem;
  background-color: ${colors.neutral.veryLightGrayishCyan};
  border-radius: 0.3rem;
  border: none;
  padding: 1rem;
`;

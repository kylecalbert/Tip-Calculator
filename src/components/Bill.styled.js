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

export const SelectTipItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.5;
  background-color: ${colors.neutral.veryDarkCyan};
  height: 2rem;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const IconContainer = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 10px;
  font-size: 25px;
  transform: translateY(40%);
`;

import styled from 'styled-components';
import colors from '../colors/colors';

export const BillContainer = styled.div`
  display: flex;
  background: ${colors.neutral.white};
  width: 50rem;

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
  gap: 10px;

  /* background-color: green; */
`;

export const SelectTipItems = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  border-radius: 0.3rem;
  border: none;
  padding: 1rem;
  background-color: ${(props) =>
    props.isSelected
      ? colors.neutral.grayishCyan
      : colors.neutral.veryDarkCyan};
`;

export const CustomTipInput = styled.input`
  display: flex;

  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  height: 1rem;
  font-size: 1.2rem;

  border-radius: 0.3rem;
  border: none;
  padding: 1rem 0 1rem 0;
  ::placeholder {
    margin-left: 10rem;
  }
`;

import styled from 'styled-components';
import colors from '../colors/colors';

export const TipInputFormContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 2.5rem;
  width: 50%;
  background-color: yellow;
  padding: 0 16px 2px 2px;
  @media (max-width: 768px) {
    width: 70%;
    gap: 0;
  }
`;

export const SelectTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: blue;
`;

export const SelectTipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;

  background-color: green;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
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

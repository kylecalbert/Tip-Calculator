import styled from 'styled-components';
import colors from '../colors/colors';

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  background-color: ${colors.neutral.veryDarkCyan};
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 90vw;
    height: auto;
    gap: 0;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 50%;
  background-color: red;
  margin-top: 2rem;
`;

export const TipInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomContainer = styled.div`
  //could potnetially remove this?
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 20%;
  background-color: green;
  margin-top: 4.5rem;
`;

export const TipAmountContainer = styled.div`
  width: 100%;
`;

export const TotalContainer = styled.div`
  width: 100%;
`;

export const ResetButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  border-radius: 0.3rem;
  border: none;
  padding: 1rem;
  background-color: ${(props) =>
    props.isSelected ? colors.neutral.selection : colors.neutral.selection};
`;

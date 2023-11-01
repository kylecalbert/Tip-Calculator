import styled from 'styled-components';
import colors from '../colors';

export const BillInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
  border-radius: 0.3rem;
  border: none;
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
  transform: translateY(10%);
`;

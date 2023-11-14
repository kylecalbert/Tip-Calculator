import styled from 'styled-components';
import colors from '../colors/colors';

export const StyledInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const ValidationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  display: flex;
  height: 3rem;
  background: ${colors.neutral.veryLightGrayishCyan};
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  border-radius: 0.3rem;
  border: 2px solid ${(props) => (props.error ? colors.error : 'transparent')};

  &:focus {
    outline: ${(props) =>
      props.error ? 'none' : `2px solid ${colors.primary}`};
  }
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
  margin-top: 0.25rem;
  @media (max-width: 768px) {
    top: 22.5%;
    left: 10px;
  }
`;

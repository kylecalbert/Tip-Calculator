// App.styled.js
import styled from 'styled-components';
import colors from './components/colors/colors';
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  background-color: ${colors.neutral.veryDarkCyan};

  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    height: 100%;

    align-items: center;
  }
`;

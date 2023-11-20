import './App.css';

import { AppContainer } from './App.styled';
import { TipCalculatorProvider } from './components/TipCalculatorContext/TipCalculatorContext';
import TipCalculator from './components/TipCalculator/TipCalculator';

import { Text } from './components/Text/Text';
import colors from './components/colors/colors';
function App() {
  return (
    <AppContainer>
      <Text
        margin="0 0 3rem 0"
        size="2rem"
        color={colors.neutral.veryLightGrayishCyan}
      >
        Splitter
      </Text>
      <TipCalculatorProvider>
        <TipCalculator />
      </TipCalculatorProvider>
    </AppContainer>
  );
}

export default App;

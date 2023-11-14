import './App.css';

import { AppContainer } from './App.styled';
import { TipCalculatorProvider } from './components/TipCalculatorContext/TipCalculatorContext';
import { TipInputForm } from './components/TipInputForm/TipInputForm';
import TipCalculator from './components/TipCalculator/TipCalculator';

import { Text } from './components/Text/Text';
function App() {
  return (
    <AppContainer>
      <Text margin="0 0 3rem 0" size="2rem">
        Splitter
      </Text>
      <TipCalculatorProvider>
        <TipCalculator />
      </TipCalculatorProvider>
    </AppContainer>
  );
}

export default App;

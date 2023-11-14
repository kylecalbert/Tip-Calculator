import './App.css';

import { AppContainer } from './App.styled';
import { TipCalculatorProvider } from './components/TipCalculatorContext/TipCalculatorContext';
import { TipInputForm } from './components/TipInputForm/TipInputForm';
import TipCalculator from './components/TipCalculator/TipCalculator';
function App() {
  return (
    <AppContainer>
      <TipCalculatorProvider>
        <TipCalculator />
      </TipCalculatorProvider>
    </AppContainer>
  );
}

export default App;

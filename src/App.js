import './App.css';
import { Bill } from './components/Bill/TipInputForm';
import { AppContainer } from './App.styled';
import { TipCalculatorProvider } from './components/TipCalculatorContext/TipCalculatorContext';
import { TipInputForm } from './components/Bill/TipInputForm';
function App() {
  return (
    <AppContainer>
      <TipCalculatorProvider>
        <TipInputForm />
      </TipCalculatorProvider>
    </AppContainer>
  );
}

export default App;

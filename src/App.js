import './App.css';
import { Bill } from './components/Bill/Bill';
import { AppContainer } from './App.styled';
import { BillProvider } from './components/BillContext/BillContext';

function App() {
  return (
    <AppContainer>
      <BillProvider>
        <Bill />
      </BillProvider>
    </AppContainer>
  );
}

export default App;

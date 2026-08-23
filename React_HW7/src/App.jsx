import { LanguageProvider } from './components/context/index';
import MainComponent from './components/mainComponent/index';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <MainComponent />
    </LanguageProvider>
  );
}

export default App;

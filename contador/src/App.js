import './App.css';
import Botoes from './Components/Botões';
import DisplayResult from './Components/displayResult';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayResult/>
        <Botoes/>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.scss';
import DemoUseEffect from './DemoUseEffect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoUseEffect />
      </header>
    </div>
  );
}

export default App;
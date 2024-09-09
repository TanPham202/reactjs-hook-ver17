import logo from './logo.svg';
import './App.scss';
import DemoStateUseState from './DemoStateUseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoStateUseState />
      </header>
    </div>
  );
}

export default App;
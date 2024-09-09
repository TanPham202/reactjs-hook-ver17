import logo from './logo.svg';
import './App.scss';
import DemoCustomHook from './DemoCustomHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoCustomHook />
      </header>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.scss';
import DemoProps from './DemoProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoProps />
      </header>
    </div>
  );
}

export default App;
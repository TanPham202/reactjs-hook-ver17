import logo from './logo.svg';
import './App.scss';
import DemoDOMEvents from './DemoDOMEvents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoDOMEvents />
      </header>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.scss';
import DemoFunctionsAsProps from './DemoFunctionsAsProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoFunctionsAsProps />
      </header>
    </div>
  );
}

export default App;
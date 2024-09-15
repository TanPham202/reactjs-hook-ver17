import logo from './logo.svg';
import './App.scss';
import DemoConditionalOutput from './DemoConditionalOutput';

function App() {
  return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <DemoConditionalOutput />
        </header>
      </div>
  );
}

export default App;
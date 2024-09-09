import logo from './logo.svg';
import './App.scss';
import DemoConditionalLoadingMessage from './DemoConditionalLoadingMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoConditionalLoadingMessage />
      </header>
    </div>
  );
}

export default App;
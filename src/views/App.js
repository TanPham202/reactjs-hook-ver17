import logo from './logo.svg';
import './App.scss';
import DemoAxios from './DemoAxios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoAxios />
      </header>
    </div>
  );
}

export default App;
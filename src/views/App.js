import logo from './logo.svg';
import './App.scss';
import DemoOutputtingLists from './DemoOutputtingLists';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoOutputtingLists />
      </header>
    </div>
  );
}

export default App;
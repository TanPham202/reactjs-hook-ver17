import logo from './logo.svg';
import './App.scss';
import DemoForm from './DemoForm';

function App() {
  return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <DemoForm />
        </header>
      </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.scss';
import DemoFunctionComponent_2 from './DemoFunctionComponent_2';
import DemoFunctionComponent_1 from './DemoFunctionComponent_1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoFunctionComponent_1 /> {/* Cách khai báo 1 */}
        <DemoFunctionComponent_2> </DemoFunctionComponent_2> {/* Cách khai báo 2 */}
      </header>
    </div>
  );
}

export default App;
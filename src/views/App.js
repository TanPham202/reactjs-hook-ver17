import logo from './logo.svg';
import './App.scss';
import Nav from './Nav/Nav'
import Home from './Home';
import Page1 from './Page-1';
import Page2 from './Page-2';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"; // Thêm từ thư viện React Router

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <header className="App-header">
            <Nav /> {/* Thanh navigation */}
            <img src={logo} className="App-logo" alt="logo" />
            {/* Gọi component theo Router */}
            {/* Các path liên kết với Nav.js */}
            <Switch>
                <Route path= "/" exact> <Home /> </Route>
                <Route path= "/page-1"> <Page1 /> </Route>
                <Route path="/page-2"> <Page2 /> </Route>
            </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
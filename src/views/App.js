import logo from './logo.svg';
import './App.scss';
import Nav from './Nav/Nav'
import Home from './Home';
import Blog from './Blog/Blog';
import DetailBlog from './Blog/DetailBlog';
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
                <Route path = "/blog" exact> <Blog /> </Route>
                <Route path = "/blog/:id"> <DetailBlog /> </Route> {/* :id đặt là gì cũng được */}
            </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
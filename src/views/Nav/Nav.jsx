import './Nav.scss';

const Nav = () => {
    return (
        <div className="topnav">
            {/* Các href của thẻ a phải giống path bên App.js */}
            <a className="active" href="/"> Home </a>
            <a href="/page-1"> Page 1 </a>
            <a href="/page-2"> Page 2 </a>
        </div>
    );
}
export default Nav;
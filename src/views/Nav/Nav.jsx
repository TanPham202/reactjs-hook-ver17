// Phiên bản React 18 sẽ bị lỗi, cần reload lại trang
import './Nav.scss';
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="topnav">
            {/* Các to của thẻ NavLink phải giống path bên App.js */}
            {/* exact=true là để xác định lúc đầu chọn tab nào */}
            <NavLink to="/" activeClassName="active" exact={true}> Home </NavLink>
            <NavLink to="/page-1" activeClassName="active"> Page 1 </NavLink>
            <NavLink to="/page-2" activeClassName="active"> Page 2 </NavLink>
        </div>
    );
}
export default Nav;
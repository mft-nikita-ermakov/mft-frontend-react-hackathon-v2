import '../../static/css/Header.css';
import { ReactComponent as MyBurger } from '../../svg/burger-right.svg';

function Header() {
    function HeaderChange() {
        const x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <div className="topnav" id="myTopnav">
            <a className="logo-a" href="/" onClick={() => window.location.reload()}>M.F.T.</a>
            <a className="login-a" href="/login" onClick={() => window.location.reload()}>Login</a>
            <a type="submit"  href="/login">M.F.T</a>
            <a type="submit" href="/login">M.F.T</a>
            <a type="submit" href="/login">M.F.T</a>
            <div className="dropdownHeader">
                <button className="dropbtnHeader">Additional
                </button>
                <div className="dropdown-content">
                    <a href="/about">M.F.T</a>
                    <a href="/FAQ">M.F.T</a>
                </div>
            </div>
            <a href="/login" className="header-username">Login</a>
            {/* eslint-disable-next-line no-script-url */}
            <a className="logo-a-burger" onClick={HeaderChange}><MyBurger/></a>
        </div>
    );
}
export default Header;
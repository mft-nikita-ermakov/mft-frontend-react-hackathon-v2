import '../../static/css/Header.css';
import { ReactComponent as MyLogo } from '../../svg/logo-dragon.svg';
import { ReactComponent as MyBurger } from '../../svg/burger-right.svg';
import { useLogout } from '../../api/v1/routes/auth/logout';

function HeaderHelloAdmin() {

    const currentUsername = localStorage.getItem('currentUsername');
    console.log("currentUsername in HeaderHelloAdmin:" + currentUsername); // Output: the current username

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
            <a className="logo-a" href="/hello" onClick={() => window.location.reload()}>M.F.T.</a>
            <a href="#" onClick={useLogout}>Logout</a>
            <a href="#" onClick="location.reload(); return false;">M.F.T.</a>
            <a type="submit" href="#">M.F.T.</a>
            <a type="submit" href="#">M.F.T.</a>
            <div className="dropdownHeader">
                <button className="dropbtnHeader">Additional</button>
                <div className="dropdown-content">
                    <a href="/profile">M.F.T.</a>
                    <a href="/hello-about">M.F.T.</a>
                    <a href="/hello-FAQ">M.F.T.</a>
                </div>
            </div>
            <p className="header-username">{currentUsername}</p>
            {/* eslint-disable-next-line no-script-url */}
            <a className="logo-a-burger" onClick={HeaderChange}><MyBurger/></a>
        </div>
    );
}
export default HeaderHelloAdmin;
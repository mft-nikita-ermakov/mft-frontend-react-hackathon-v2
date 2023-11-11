import '../../static/css/Footer.css';
import qrCode  from '../../img/qrv1.png'
function FooterHello() {
    return (
        <footer className="footer">
            <div className="div-qr">
                <img className="qr-code" src={qrCode}  alt="QR Code"/>
            </div>
            {/*<ul className="social-icon">*/}
            {/*    <li className="social-icon__item"><a className="social-icon__link" href="#">*/}
            {/*        <ion-icon name="logo-facebook"></ion-icon>*/}
            {/*    </a></li>*/}
            {/*    <li className="social-icon__item"><a className="social-icon__link" href="#">*/}
            {/*        <ion-icon name="logo-twitter"></ion-icon>*/}
            {/*    </a></li>*/}
            {/*    <li className="social-icon__item"><a className="social-icon__link" href="#">*/}
            {/*        <ion-icon name="logo-linkedin"></ion-icon>*/}
            {/*    </a></li>*/}
            {/*    <li className="social-icon__item"><a className="social-icon__link" href="#">*/}
            {/*        <ion-icon name="logo-instagram"></ion-icon>*/}
            {/*    </a></li>*/}
            {/*</ul>*/}
            {/*<ul className="menu">*/}
            {/*    <li className="menu__item"><a className="menu__link" href="#">M.F.T.</a></li>*/}
            {/*    <li className="menu__item"><a className="menu__link" href="#">M.F.T.</a></li>*/}
            {/*    <li className="menu__item"><a className="menu__link" href="#">M.F.T.</a></li>*/}
            {/*    <li className="menu__item"><a className="menu__link" href="#">M.F.T.</a></li>*/}

            {/*</ul>*/}
            <p className="p-footer">&copy;2023 M.F.T.</p>
        </footer>
    );
}

export default FooterHello;
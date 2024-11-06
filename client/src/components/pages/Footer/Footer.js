import './Footer.css';
import React from "react";

function Footer() {

    return (
        <footer className="footer">
            <ul className="inner-footer">
                <li><button type="button" data-menu="홈" className="btn ico0"></button></li>
                <li><button type="button" data-menu="검색" className="btn ico1"></button></li>
                <li><button type="button" data-menu="등록" className="btn"></button></li>
                <li><button type="button" data-menu="좋아요" className="btn ico2"></button></li>
                <li><button type="button" data-menu="마이페이지" className="btn ico3"></button></li>
            </ul>
        </footer>
    );
}

export default Footer;
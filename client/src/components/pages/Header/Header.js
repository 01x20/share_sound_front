import './Header.css';
import React from "react";
import logoImage from '../../../assets/images/logo.svg';
import iconKeySearch from '../../../assets/images/ico-keySearch.svg';

function Header() {

    return (
        <header className="header">
            <div className="inner-header">
                <h1><img src={logoImage} alt="share sound logo"/></h1>
                <div className="keyword-search-box">
                    <img src={iconKeySearch} alt="search button" />
                </div>
            </div>
        </header>
    );
}

export default Header;
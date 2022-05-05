import React from "react";
import cs from './Header.module.css';

export const Header = () => {
    return (
        <header className={cs.header}>
            <img src={require('../../img/header_img.jpg')} alt="header logo"/>
            Social Network Samurai Way
        </header>
    )
}
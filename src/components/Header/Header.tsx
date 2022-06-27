import React from "react";
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={require('../../img/header_img.jpg')} alt="header logo"/>
            Social Network SamuraiWay
        </header>
    )
}
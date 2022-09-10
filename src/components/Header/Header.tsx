import React from "react";
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <span>
                <img src={require('../../img/header_img.jpg')} alt="header logo"/>
            </span>
            <span><h2>Social Network SamuraiWay</h2></span>


        </header>
    )
}
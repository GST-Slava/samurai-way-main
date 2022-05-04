import React from "react";
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header className={classes.header}>
            <img src={require('../../img/header_img.jpg')} alt="header logo"/>
            Social Network Samurai Way
        </header>
    )
}
import React from "react";
import cs from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={cs.nav}>
            <div className={cs.item}>
                <NavLink to='/profile' data-text='Profile' activeClassName={cs.activeLink}>Profile</NavLink>
            </div>
            <div className={`${cs.item} ${cs.activeLink}`}>
                <NavLink to='/dialogs' data-text='Messages' activeClassName={cs.activeLink}>Messages</NavLink>
            </div>
            <div className={`${cs.item} ${cs.activeLink}`}>
                <NavLink to='/news' data-text='News' activeClassName={cs.activeLink}>News</NavLink>
            </div>
            <div className={`${cs.item} ${cs.activeLink}`}>
                <NavLink to='/music' data-text='Music' activeClassName={cs.activeLink}>Music</NavLink>
            </div>
            <div className={`${cs.item} ${cs.activeLink}`}>
                <NavLink to='/settings' data-text='Settings' activeClassName={cs.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
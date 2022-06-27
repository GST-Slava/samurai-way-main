import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' data-text='Profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.activeLink}`}>
                <NavLink to='/dialogs' data-text='Messages' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.activeLink}`}>
                <NavLink to='/news' data-text='News' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={`${s.item} ${s.activeLink}`}>
                <NavLink to='/music' data-text='Music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={`${s.item} ${s.activeLink}`}>
                <NavLink to='/settings' data-text='Settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
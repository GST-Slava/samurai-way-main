import React from "react";
import cs from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={cs.nav}>
            <div className={cs.item}>
                <NavLink to='/profile' activeClassName={cs.item} data-text='Profile'>Profile</NavLink>
            </div>
            <div className={`${cs.item} ${cs.activeLink}`}>
                <NavLink to='/dialogs' activeClassName={cs.item} data-text='Messages'>Messages</NavLink>
            </div>
            <div className={`${cs.item} ${cs.activeLink}`}>
                <NavLink to='/news' activeClassName={cs.item} data-text='News'>News</NavLink>
            </div>
            <div className={`${cs.item} ${cs.activeLink}`}>
                <NavLink to='/music' activeClassName={cs.item} data-text='Music'>Music</NavLink>
            </div>
            <div className={`${cs.item} ${cs.activeLink}`}>
                <NavLink to='/settings' activeClassName={cs.item} data-text='Settings'>Settings</NavLink>
            </div>
        </nav>
    )
}
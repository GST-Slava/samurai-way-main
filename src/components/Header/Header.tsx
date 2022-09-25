import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


export const Header = (props: any) => {
    return (
        <header className={s.header}>
            <span>
                <img src={require('../../assets/img/header_img.jpg')} alt="header logo"/>
            </span>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}
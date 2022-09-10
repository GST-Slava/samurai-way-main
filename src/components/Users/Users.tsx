import React from "react";
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPyunVnZm3C02kL49B-bFTEPHLJH8HM50XA&usqp=CAU',
                followed: false,
                fullName: 'Slava',
                status: 'I am a developer',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcHT4UvcVEZrvvfLk7K6sC5AcoRdcBMDetg&usqp=CAU',
                followed: true,
                fullName: 'Bill',
                status: 'I am a CEO Microsoft',
                location: {city: 'Seattle', country: 'USA'}
            },
            {
                id: 3,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzZKPKVRgMe32fX39yEL34jmFXx4nP6lcDw&usqp=CAU',
                followed: false,
                fullName: 'Elon',
                status: 'I am a CEO Tesla & SpaceX',
                location: {city: 'Texas', country: 'USA'}
            },
        ])
    }

    return <div className={s.usersContainer}>
        {
            props.usersPage.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatarImg} src={u.photoURL} alt={'Avatar Image'}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>)
        }
    </div>
}
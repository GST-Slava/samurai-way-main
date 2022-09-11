import React from "react";
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userDefaultAvatar from './../../assets/img/userDefaultAvatar.png'


export const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.usersPage.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

                props.setUsers(response.data.items)
            })
        }
    }


    return <div className={s.usersContainer}>
        <button onClick={getUsers}>Get Users</button>
        {
            props.usersPage.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatarImg} src={u.photos.small != null ? u.photos.small : userDefaultAvatar}
                             alt={'Avatar Image'}/>
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
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
        }
    </div>
}
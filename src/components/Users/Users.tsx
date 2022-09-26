import React from 'react';
import s from "./Users.module.css";
import userDefaultAvatar from "../../assets/img/userDefaultAvatar.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

export const Users = (props: { totalUsersCount: number; pageSize: number; currentPage: number; onPageChanged: (arg0: number) => void; usersPage: { users: any[]; }; unfollow: (arg0: any) => void; follow: (arg0: any) => void; }) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.usersContainer}>
        <div className={s.pages}>
            {pages.map((page, index) => {
                return <span key={index} className={props.currentPage === page ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(page);
                             }}>{page}
                    </span>
            })}
        </div>
        {
            props.usersPage.users.map((u) =>
                <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.avatarImg}
                                 src={u.photos.small != null ? u.photos.small : userDefaultAvatar}
                                 alt={'Avatar'}/>
                        </NavLink>

                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '80291f1b-6878-4e23-b059-4db43fa0234c'
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '80291f1b-6878-4e23-b059-4db43fa0234c'
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });
                            }}>Follow</button>
                        }
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
};
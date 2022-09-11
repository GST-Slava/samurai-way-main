import React from "react";
import s from './Users.module.css'
import axios from "axios";
import userDefaultAvatar from './../../assets/img/userDefaultAvatar.png'


class Users extends React.Component<any, any> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }


    render() {
        return <div className={s.usersContainer}>

            {
                this.props.usersPage.users.map((u: { id: React.Key | null | undefined; photos: { small: string | null | undefined; }; followed: any; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; status: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                    <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatarImg} src={u.photos.small != null ? u.photos.small : userDefaultAvatar}
                             alt={'Avatar Image'}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}

export default Users;


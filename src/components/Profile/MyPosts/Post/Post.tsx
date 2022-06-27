import React from "react";
import s from './Post.module.css';


type MessageType = {
    message: string
}

export const Post: React.FC<MessageType> = (props) => {
    return (
        <div className={s.item}>
            <img src={require('../../../../img/avatar_post.jpg')} alt="avatar_default"/>
            {props.message}
            <span>like </span>
            <span>send </span>
        </div>


    )
}
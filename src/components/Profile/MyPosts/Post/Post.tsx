import React from "react";
import cs from './Post.module.css';


type PostType = {
    message: string
    likesCount: number
}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={cs.item}>
            <img src={require('../../../../img/avatar_post.jpg')} alt="avatar_default"/>
            {props.message}
            <span>like </span>
            <span>send </span>
        </div>


    )
}
import React from "react";
import classes from './Post.module.css';

export const Post = () => {
    return (
        <div className={classes.item}>
            <img src={require('../../../../img/avatar_post.jpg')} alt="avatar_default"/>
            post 1
            <span>like </span>
            <span>send </span>
        </div>


    )
}
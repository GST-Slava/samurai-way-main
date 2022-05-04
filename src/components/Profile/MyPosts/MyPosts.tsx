import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div className={classes.item}>My Posts</div>
            <textarea></textarea>
            <button>Add post</button>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
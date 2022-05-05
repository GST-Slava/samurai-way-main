import React from "react";
import cs from './MyPosts.module.css';
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (

        <div className={cs.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button className={cs.button}>Add post</button>
                </div>
            </div>
            <div className={cs.posts}>
                <Post message='Hi '/>
                <Post message='Hello '/>
                <Post message='Hey '/>
            </div>
        </div>
    )
}
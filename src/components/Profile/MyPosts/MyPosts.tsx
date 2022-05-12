import React from "react";
import cs from './MyPosts.module.css';
import {Post} from "./Post/Post";


type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}

export const MyPosts: React.FC<postsDataType> = (props) => {

    let posts = [
        {message: 'Uh no', likesCount: 12},
        {message: 'Hi', likesCount: 10},
        {message: 'Hello', likesCount: 9}
    ]

    let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {postsElement}
            </div>
        </div>
    )
}
import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostAC} from "../../../redux/profile-reduser";
import {store} from "../../../redux/redux-store";

type MessageType = {
    message: string
    posts: Array<PostType>
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}


export const MyPosts: React.FC<MessageType> = (props) => {
    let postsElement = store.getState().profilePage.posts.map((p) =>
        <Post message={p.message}/>)

    const addPost = () => {
        props.addPostCallback(props.message)
        props.dispatch(addPostAC(props.message))
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>

            {props.message}
            <hr/>
            {props.posts.map(p => <div key={p.id}><b>{p.message}</b></div>)}
            <hr/>

            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.message}
                        onChange={newTextChangeHandler}>
                    </textarea>
                </div>
                <div>
                    <button className={s.button} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
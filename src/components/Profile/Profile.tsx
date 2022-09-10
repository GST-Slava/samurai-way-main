import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = (props: any) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.store.dispatch.bind(props.store)}
                posts={props.store.getState().profilePage.posts}
                message={props.store.getState().profilePage.messageForNewPost}
                addPostCallback={props.store.addPost.bind(props.store)}
                changeNewTextCallback={props.store.changeNewText.bind(props.store)}
            />
        </div>
    )
}

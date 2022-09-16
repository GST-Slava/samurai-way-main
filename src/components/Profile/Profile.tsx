import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {store} from "../../redux/redux-store";


export const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={store.dispatch}
                posts={store.getState().profilePage.posts}
                message={store.getState().profilePage.messageForNewPost}
                addPostCallback={store.dispatch.bind(props.post)}
                changeNewTextCallback={store.getState().profilePage.messageForNewPost}
            />
        </div>
    )
}

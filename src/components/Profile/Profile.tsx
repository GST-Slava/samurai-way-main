import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {StoreType} from "../../redux/state";

type PropsType = {
    store: StoreType
}

export const Profile: React.FC<PropsType> = (props) => {

    const state = props.store.getState();

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.store.dispatch.bind(props.store)}
                posts={state.profilePage.posts}
                message={state.profilePage.messageForNewPost}
                addPostCallback={props.store.addPost.bind(props.store)}
                changeNewTextCallback={props.store.changeNewText.bind(props.store)}
            />
        </div>
    )
}

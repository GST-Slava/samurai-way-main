import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                message={props.message}
                dispatch={props.id}
                addPostCallback={props.text}
            />
        </div>
    )
}

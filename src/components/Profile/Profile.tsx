import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {addPost, changeNewText, PostType, state} from "../../redux/state";


export const Profile: React.FC<PostType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts message={state.profilePage.messageForNewPost}
                     addPostCallback={addPost}
                     posts={state.profilePage.posts}
                     changeNewTextCallback={changeNewText}
            />
        </div>
    )
}
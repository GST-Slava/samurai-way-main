import React from "react";
import cs from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {Post} from "./MyPosts/Post/Post";


export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
import React from "react";
import cs from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
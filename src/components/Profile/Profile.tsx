import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div><img src={require('../../img/back_profile.jpg')} alt="fireSpot"/></div>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    )
}
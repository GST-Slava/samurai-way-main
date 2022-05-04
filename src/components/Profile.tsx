import React from "react";
import classes from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div><img src={require('./../img/back_profile.jpg')} alt="fireSpot"/></div>
            <div>ava+description</div>
            <div>My Posts</div>
            <div className={classes.item}>post 1</div>
            <div className={classes.item}>post 2</div>
            <div className={classes.item}>post 3</div>
        </div>
    )
}
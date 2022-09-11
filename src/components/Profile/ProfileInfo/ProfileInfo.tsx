import React from "react";
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.img}><img src={require('../../../assets/img/back_profile.jpg')} alt="fireSpot"/></div>
            <div className={s.descriptionBlock}>ava+description</div>
        </div>
    )
}
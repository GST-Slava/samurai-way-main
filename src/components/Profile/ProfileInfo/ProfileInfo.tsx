import React from "react";
import cs from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div className={cs.img}><img src={require('../../../img/back_profile.jpg')} alt="fireSpot"/></div>
            <div className={cs.descriptionBlock}>ava+description</div>

        </div>
    )
}
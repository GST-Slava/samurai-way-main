import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";


export const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.img}><img src={require('../../../assets/img/back_profile.jpg')} alt="fireSpot"/></div>
            <div className={s.descriptionBlock}>
                {/* <img src={props.profile.photos.large}/>*/}
                <div>
                    {props.profile.aboutMe}
                    {props.profile.lookingForAJobDescription}
                </div>
                description
            </div>
        </div>
    )
}
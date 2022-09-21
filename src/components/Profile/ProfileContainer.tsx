import React, {useEffect} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reduser";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

type PathParamsType = {
    userId: string
}
type ProfilePropsType = Array<{
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: Array<ContactPropsType>
    photos: Array<PhotosPropsType>
}>
type ContactPropsType = Array<{
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}>
type PhotosPropsType = Array<{
    small: string
    large: string
}>
type MapStateToProps = {
    profile: ProfilePropsType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfilePropsType) => void
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = MapStateToProps & MapDispatchPropsType


function ProfileContainer(props: PropsType) {

    useEffect(() => {

        let userId = props.match.params.userId;
        /* if (!userId) {
             userId = 2;
         }*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                props.setUserProfile(response.data)
            });
    }, [])

    return (
        <Profile profile={props.profile}/>
    )
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);

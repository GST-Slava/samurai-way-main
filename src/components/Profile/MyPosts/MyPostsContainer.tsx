import React from "react";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {addPostAC} from "../../../redux/profile-reduser";
import {store} from "../../../redux/store";

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = () => {
    return {
        changeNewTextCallback: (text: any) => {
            let action = addPostAC(text);
            store.dispatch(action)
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
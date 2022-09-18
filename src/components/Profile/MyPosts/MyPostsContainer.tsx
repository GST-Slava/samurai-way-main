import React from "react";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {store} from "../../../redux/redux-store";
import {updateNewMessageTextAC} from "../../../redux/dialogs-reduser";
import {addPostAC} from "../../../redux/profile-reduser";

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = () => {
    return {
        changeNewTextCallback: (text: any) => {
            let action = updateNewMessageTextAC(text);
            store.dispatch(action)
        },
        addPost: () => {
            store.dispatch(addPostAC(''))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
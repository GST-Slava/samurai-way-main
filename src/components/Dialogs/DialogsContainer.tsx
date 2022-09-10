import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reduser";

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageAC());
        },
        onNewMessageChange: (body: any) => {
            dispatch(updateNewMessageTextAC(body))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
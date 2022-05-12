import React from "react";
import cs from './../Dialogs.module.css';


type MessageType = {
    message: string
}

export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={cs.dialog}>{props.message}</div>
    )
}


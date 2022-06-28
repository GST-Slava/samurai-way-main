import React from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {store} from "../../redux/state";


let dialogsElements = store._state.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = store._state.dialogsPage.messages.map((m) => <Message message={m.message}/>)

class dialogsDataType {
}

let newMessageElement = React.createRef<HTMLTextAreaElement>();

const addMessage = () => {
    let text = newMessageElement.current?.value;
}

export const Dialogs: React.FC<dialogsDataType> = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem}>{dialogsElements}</div>
            <div className={s.messages}>{messagesElements}</div>
            <textarea onClick={addMessage}></textarea>
            <button className={s.button}>send message</button>
        </div>
    )
}
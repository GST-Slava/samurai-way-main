import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogPageType, store} from "../../redux/store";

export const Dialogs: React.FC<DialogPageType> = (props) => {

    let state = store._state.dialogsPage;

    let dialogsElements = store._state.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = store._state.dialogsPage.messages.map((m) => <Message message={m.message} key={m.id}/>)
    let newMessageBody = store._state.dialogsPage.newMessageText;

    let onSendMessageClick = () => {

    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;

    }

    return (
        <div className={s.dialogs}>
            <span>

            </span>
            <div className={s.dialogsItem}>{dialogsElements}</div>
            <div className={s.messages}>{messagesElements}</div>
            <textarea value={newMessageBody} onChange={onNewMessageChange}
                      placeholder='Enter your message'></textarea>
            <button className={s.button} onClick={onSendMessageClick}>send message</button>
        </div>
    )
}
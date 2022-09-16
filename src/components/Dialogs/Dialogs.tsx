import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/store";
import {store} from "../../redux/redux-store";

export const Dialogs: React.FC<DialogPageType> = () => {

    let state = store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        store.dispatch(onNewMessageChange)
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        store.dispatch(body)

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
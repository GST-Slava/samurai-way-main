import React from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import cs from './Dialogs.module.css';
import {Message} from "./Message/Message";

type dialogsDataType = {
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagesPropsType>
}
type DialogsPropsType = {
    id: number
    name: string
}
type MessagesPropsType = {
    id: number
    message: string
}

let dialogs = [
    {id: 1, name: 'Elon'},
    {id: 2, name: 'Frank'},
    {id: 3, name: 'Sam'},
    {id: 4, name: 'Dean'},
    {id: 5, name: 'Jason'}
]
let messages = [
    {id: 1, message: 'Uh no'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Hey'},
    {id: 4, message: 'Hello'},
    {id: 5, message: 'Welcome'}
]

let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = messages.map((m) => <Message message={m.message}/>)

export const Dialogs: React.FC<dialogsDataType> = (props) => {
    return (
        <div className={cs.dialogs}>
            <div className={cs.dialogsItem}>{dialogsElements}</div>
            <div className={cs.messages}>{messagesElements}</div>
        </div>
    )
}
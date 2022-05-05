import React from "react";
import cs from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    name: string
    id: string
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogsItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={cs.dialog + '' + cs.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return (
        <div className={cs.dialog}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={cs.dialogs}>
            <div className={cs.dialogsItem}>

                <DialogItem name='Elon' id="1"/>
                <DialogItem name='Frank' id="2"/>
                <DialogItem name='Sam' id="3"/>
                <DialogItem name='Dean' id="4"/>
                <DialogItem name='Jason' id="5"/>

            </div>

            <div className={cs.messages}>

                <Message message='Hello'/>
                <Message message='Yo'/>
                <Message message='Hey'/>


            </div>
        </div>
    )
}
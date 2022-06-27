import React from "react";
import cs from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsNameType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogsNameType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={cs.dialog + '' + cs.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


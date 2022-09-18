import React from 'react';
import preloader from "../../assets/img/loader.gif";
import s from "./Preloader.module.css"

export const Preloader = () => {
    return (
        <div className={s.preloaderGif}>
            <img src={preloader} alt={'preloader'}/>
        </div>
    );
};

export default Preloader;
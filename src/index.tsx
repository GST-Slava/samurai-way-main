import React from 'react';
import './index.css';
import {RootStateType, state, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

let renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(state);

subscribe(renderEntireTree);


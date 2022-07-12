import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";


let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree();
store.subscribe(renderEntireTree)


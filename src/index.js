import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Main} from "./layout/Main";
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Main/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);


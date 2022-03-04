import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Layout} from "./layout/Layout";
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Layout/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);


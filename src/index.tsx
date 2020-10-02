import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import "./Simple.scss";

import 'bootstrap/dist/css/bootstrap.min.css';

import {SimpleTodoApp} from "./apps/SimpleTodoApp/SimpleTodoApp";
import {StylesDemo} from "./styles/StylesDemo";
import {SimpleFormDemo} from "./apps/SimpleFormDemo/SimpleFormDemo";

ReactDOM.render(
    <React.StrictMode>
        <Fragment>
            <SimpleFormDemo/>
            <SimpleTodoApp/>
            <StylesDemo/>
        </Fragment>
    </React.StrictMode>,
    document.getElementById('root')
);

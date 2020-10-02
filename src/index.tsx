import React from 'react';
import ReactDOM from 'react-dom';

import "./Simple.scss";

import 'bootstrap/dist/css/bootstrap.min.css';

import {SimpleTodoApp} from "./apps/SimpleTodoApp/SimpleTodoApp";
import {StylesDemo} from "./styles/StylesDemo";
import {SimpleFormDemo} from "./apps/SimpleFormDemo/SimpleFormDemo";

ReactDOM.render(
    <React.StrictMode>
        <div className="SimpleTheme1">
            <SimpleFormDemo/>
            <SimpleTodoApp/>
            <StylesDemo/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

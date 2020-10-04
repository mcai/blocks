import React from 'react';
import ReactDOM from 'react-dom';

import "./Simple.scss";

import 'bootstrap/dist/css/bootstrap.min.css';

import {SimpleTodoApp} from "./apps/SimpleTodoApp/SimpleTodoApp";
import {StylesDemo} from "./apps/StylesDemo/StylesDemo";
import {SimpleFormDemo} from "./apps/SimpleFormDemo/SimpleFormDemo";

ReactDOM.render(
    <React.StrictMode>
        <div className="SimpleTheme3">
            <SimpleFormDemo/>
            <SimpleTodoApp/>
            <StylesDemo/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

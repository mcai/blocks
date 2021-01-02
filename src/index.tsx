import React from "react";
import ReactDOM from "react-dom";

import "./simple.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import { SimpleTodoApp } from "./apps/SimpleTodoApp/SimpleTodoApp";
import { SimpleFormDemo } from "./apps/SimpleFormDemo/SimpleFormDemo";

ReactDOM.render(
    <React.StrictMode>
        <div className="SimpleTheme3">
            <SimpleFormDemo />
            <SimpleTodoApp />
        </div>
    </React.StrictMode>,
    document.getElementById("root"),
);

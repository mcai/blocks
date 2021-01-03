import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./tailwind.output.css";

import { SimpleTodoApp } from "./apps/SimpleTodoApp/SimpleTodoApp";
import { SimpleFormDemo } from "./apps/SimpleFormDemo/SimpleFormDemo";
import { SimpleTestButton } from "./components/SimpleTestButton/SimpleTestButton";

ReactDOM.render(
    <React.StrictMode>
        <div>
            <SimpleTestButton />
            <SimpleFormDemo />
            <SimpleTodoApp />
        </div>
    </React.StrictMode>,
    document.getElementById("root"),
);

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./tailwind.output.css";

import { SimpleTodoApp } from "./apps/SimpleTodoApp/SimpleTodoApp";
import { SimpleFormDemo } from "./apps/SimpleFormDemo/SimpleFormDemo";

ReactDOM.render(
    <React.StrictMode>
        <div>
            <button className="bg-red-500 border-2 border-blue-400 px-3 py-2 m-4 hover:underline">hello</button>
            <SimpleFormDemo />
            <SimpleTodoApp />
        </div>
    </React.StrictMode>,
    document.getElementById("root"),
);

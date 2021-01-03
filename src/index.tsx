import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./tailwind.output.css";

import { SimpleTodoApp } from "./apps/SimpleTodoApp/SimpleTodoApp";
import { SimpleFormDemo } from "./apps/SimpleFormDemo/SimpleFormDemo";

export class SimpleTestButton extends React.Component {
    render() {
        return <button className="bg-red-500 border-2 border-blue-400 px-3 py-2 m-4 hover:underline">hello</button>;
    }
}

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

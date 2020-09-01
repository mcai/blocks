import React, {Component} from "react";
import {SimpleIfProps} from "./SimpleIfProps";
import {Spinner} from "react-bootstrap";

export class SimpleIf extends Component<SimpleIfProps, any> {
    render(): React.ReactNode {
        return this.props.condition ? this.props.children : <Spinner animation={"border"}/>;
    }
}

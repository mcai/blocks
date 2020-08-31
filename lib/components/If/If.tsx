import React, {Component} from "react";
import {IfProps} from "./IfProps";
import {Spinner} from "react-bootstrap";

export class If extends Component<IfProps, any> {
    render(): React.ReactNode {
        return this.props.isDataLoaded ? this.props.children : <Spinner animation={"border"}/>;
    }
}

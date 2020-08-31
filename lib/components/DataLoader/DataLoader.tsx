import React, {Component} from "react";
import {DataLoaderProps} from "./DataLoaderProps";
import {Spinner} from "react-bootstrap";

export class DataLoader extends Component<DataLoaderProps, any> {
    render(): React.ReactNode {
        return this.props.isDataLoaded ? this.props.children : <Spinner animation={"border"}/>;
    }
}

import React, {Component} from "react";
import {SimpleIfProps} from "./SimpleIfProps";
import {SimpleSpinner} from "../SimpleSpinner/SimpleSpinner";

export class SimpleIf extends Component<SimpleIfProps, any> {
    render(): React.ReactNode {
        return this.props.condition ? this.props.children : this.props.otherwiseComponent ?? <SimpleSpinner/>;
    }
}

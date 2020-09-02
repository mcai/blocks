import React, {Component} from "react";
import {SimpleTextFieldProps} from "./SimpleTextFieldProps";

export class SimpleTextField extends Component<SimpleTextFieldProps, any> {
    render() {
        return (this.props.record[this.props.source]);
    }
}

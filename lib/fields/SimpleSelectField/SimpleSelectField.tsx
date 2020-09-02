import React, {Component} from "react";
import {SimpleSelectFieldProps} from "./SimpleSelectFieldProps";
import Enumerable from "linq";

export class SimpleSelectField extends Component<SimpleSelectFieldProps, any> {
    render() {
        let value = this.props.record[this.props.source];
        return Enumerable.from(this.props.options).firstOrDefault(option => option.value == value)?.label;
    }
}

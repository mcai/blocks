import React, {Component} from "react";
import {SimpleFileFieldProps} from "./SimpleFileFieldProps";

export class SimpleFileField extends Component<SimpleFileFieldProps, any> {
    render() {
        return (
            <a href={this.props.record[this.props.source]}>{this.props.record[this.props.title]}</a>
        );
    }
}

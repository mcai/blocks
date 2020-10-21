import React, { Component } from "react";
import { SimpleFormUrlFieldProps } from "./SimpleFormUrlFieldProps";

export class SimpleFormUrlField extends Component<SimpleFormUrlFieldProps, any> {
    render() {
        return (
            <a href={this.props.values?.[this.props.name ?? ""]} target={"_blank"} rel="noopener noreferrer">
                {this.props.text}
            </a>
        );
    }
}

import React, { Component } from "react";
import { SimpleUrlFieldProps } from "./SimpleUrlFieldProps";

export class SimpleUrlField extends Component<SimpleUrlFieldProps, any> {
    render() {
        return (
            <a href={this.props.values?.[this.props.name ?? ""] ?? ""} target={"_blank"} rel="noopener noreferrer">
                {this.props.text ?? ""}
            </a>
        );
    }
}

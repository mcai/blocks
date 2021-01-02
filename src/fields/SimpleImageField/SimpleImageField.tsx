import React, { Component } from "react";
import { SimpleImageFieldProps } from "./SimpleImageFieldProps";

export class SimpleImageField extends Component<SimpleImageFieldProps, any> {
    render() {
        const src = this.props.values?.[this.props.name ?? ""] ?? "";
        return (
            <a href={src}>
                <img src={src} alt={this.props.text} className="img-thumbnail" />
            </a>
        );
    }
}

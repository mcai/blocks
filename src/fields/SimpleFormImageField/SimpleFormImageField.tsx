import React, { Component } from "react";
import { SimpleFormImageFieldProps } from "./SimpleFormImageFieldProps";
import { Image } from "react-bootstrap";

export class SimpleFormImageField extends Component<SimpleFormImageFieldProps, any> {
    render() {
        const src = this.props.values?.[this.props.name ?? ""];
        return (
            <a href={src}>
                <Image src={src} title={this.props.text} thumbnail={true} />
            </a>
        );
    }
}

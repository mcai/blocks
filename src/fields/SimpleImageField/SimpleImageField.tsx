import React, { Component } from "react";
import { SimpleImageFieldProps } from "./SimpleImageFieldProps";
import { Image } from "react-bootstrap";

export class SimpleImageField extends Component<SimpleImageFieldProps, any> {
    render() {
        const src = this.props.values?.[this.props.name ?? ""];
        return (
            <a href={src}>
                <Image src={src} title={this.props.text} thumbnail={true} />
            </a>
        );
    }
}

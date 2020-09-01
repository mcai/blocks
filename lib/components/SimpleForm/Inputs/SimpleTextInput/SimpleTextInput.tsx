import React, {Component} from "react";
import {SimpleTextInputProps} from "./SimpleTextInputProps";
import {Form} from "react-bootstrap";

export class SimpleTextInput extends Component<SimpleTextInputProps, any> {
    render() {
        return (
            <Form.Group controlId={this.props.source}>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control type={this.props.password ? "password" : "text"} name={this.props.source} value={this.props.record[this.props.source]} />
            </Form.Group>
        );
    }
}

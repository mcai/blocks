import React, {Component} from "react";
import {SimpleNumberInputProps} from "./SimpleNumberInputProps";
import {Form} from "react-bootstrap";

export class SimpleNumberInput extends Component<SimpleNumberInputProps, any> {
    render() {
        return (
            <Form.Group controlId={this.props.source}>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control type="number" name={this.props.source} value={this.props.record[this.props.source]} min={this.props.min} max={this.props.max} />
            </Form.Group>
        );
    }
}

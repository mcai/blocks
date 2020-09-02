import React, {Component} from "react";
import {SimpleSelectInputProps} from "./SimpleSelectInputProps";
import {Form} from "react-bootstrap";

export class SimpleSelectInput extends Component<SimpleSelectInputProps, any> {
    render() {
        return (
            <Form.Group controlId={this.props.source}>
                <Form.Label>{this.props.label}</Form.Label>

                <Form.Control as="select" name={this.props.source} value={this.props.record[this.props.source]}>
                    {
                        this.props.options.map(option => (
                            <option value={option.value}>{option.label}</option>
                        ))
                    }
                </Form.Control>
            </Form.Group>
        );
    }
}

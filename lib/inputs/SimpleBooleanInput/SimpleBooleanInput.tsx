import React, {Component} from "react";
import {SimpleBooleanInputProps} from "./SimpleBooleanInputProps";
import {Form} from "react-bootstrap";

export class SimpleBooleanInput extends Component<SimpleBooleanInputProps, any> {
    render() {
        return (
            <Form.Group controlId={this.props.source}>
                <Form.Check type="checkbox" name={this.props.source} checked={this.props.record[this.props.source]} label={this.props.label} />
            </Form.Group>
        );
    }
}

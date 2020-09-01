import React, {Component} from "react";
import {SimpleNumberFieldProps} from "./SimpleNumberFieldProps";
import {Form} from "react-bootstrap";

export class SimpleNumberField extends Component<SimpleNumberFieldProps, any> {
    render() {
        return (
            <Form.Group controlId={this.props.name}>
                <Form.Label>{this.props.title}</Form.Label>

                <Form.Control type="number" name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} />

                {
                    this.props.hint && <Form.Text className="text-muted">
                        {this.props.hint}
                    </Form.Text>
                }
            </Form.Group>
        );
    }
}

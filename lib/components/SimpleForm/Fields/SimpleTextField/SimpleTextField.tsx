import React, {Component} from "react";
import {SimpleTextFieldProps} from "./SimpleTextFieldProps";
import {Form} from "react-bootstrap";

export class SimpleTextField extends Component<SimpleTextFieldProps, any> {
    render() {
        return (
            <Form.Group controlId={this.props.name}>
                <Form.Label>{this.props.title}</Form.Label>

                <Form.Control type={this.props.password ? "password" : "text"} name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} />

                {
                    this.props.hint && <Form.Text className="text-muted">
                        {this.props.hint}
                    </Form.Text>
                }
            </Form.Group>
        );
    }
}

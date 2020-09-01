import React, {Component} from "react";
import {SimpleTextInputProps} from "./SimpleTextInputProps";
import {Form} from "react-bootstrap";

export class SimpleTextInput extends Component<SimpleTextInputProps, any> {
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

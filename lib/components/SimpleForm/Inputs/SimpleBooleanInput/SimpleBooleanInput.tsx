import React, {Component} from "react";
import {SimpleBooleanInputProps} from "./SimpleBooleanInputProps";
import {Form} from "react-bootstrap";

export class SimpleBooleanInput extends Component<SimpleBooleanInputProps, any> {
    render() {
        return (
            <Form.Group controlId={this.props.name}>
                <Form.Label>{this.props.title}</Form.Label>

                <Form.Check type="checkbox" name={this.props.name} checked={this.props.value} label={this.props.title} />

                {
                    this.props.hint && <Form.Text className="text-muted">
                        {this.props.hint}
                    </Form.Text>
                }
            </Form.Group>
        );
    }
}

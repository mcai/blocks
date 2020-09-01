import React, {Component} from "react";
import {SimpleNumberInputProps} from "./SimpleNumberInputProps";
import {Form} from "react-bootstrap";

export class SimpleNumberInput extends Component<SimpleNumberInputProps, any> {
    render() {
        return (
            <Form.Group controlId={this.props.name}>
                <Form.Label>{this.props.title}</Form.Label>

                <Form.Control type="number" name={this.props.name} value={this.props.value} min={this.props.min} max={this.props.max} placeholder={this.props.placeholder} />

                {
                    this.props.hint && <Form.Text className="text-muted">
                        {this.props.hint}
                    </Form.Text>
                }
            </Form.Group>
        );
    }
}

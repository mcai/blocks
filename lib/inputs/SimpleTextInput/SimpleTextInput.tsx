import React, {Component} from "react";
import {SimpleTextInputProps} from "./SimpleTextInputProps";
import {Form} from "react-bootstrap";
import {Field} from "react-final-form";

export class SimpleTextInput extends Component<SimpleTextInputProps, any> {
    render() {
        return (
            <Field
                name={this.props.name}
                render={({props, state}) => (
                    <Form.Group controlId={this.props.name}>
                        <Form.Label>{this.props.label}</Form.Label>
                        <Form.Control
                            {...props}
                            type={this.props.password ? "password" : "text"}
                            placeholder={this.props.placeholder}
                        />
                        {/*{state.touched && state.error && <span>{state.error}</span>}*/}
                    </Form.Group>
                )}
            >
            </Field>
        );
    }
}

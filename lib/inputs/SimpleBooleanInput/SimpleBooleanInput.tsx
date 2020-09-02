import React, {Component} from "react";
import {SimpleBooleanInputProps} from "./SimpleBooleanInputProps";
import {Form} from "react-bootstrap";
import {Field} from "react-final-form";

export class SimpleBooleanInput extends Component<SimpleBooleanInputProps, any> {
    render() {
        return (
            <Field
                name={this.props.name}
                render={({props, state}) => (
                    <Form.Group controlId={this.props.name}>
                        <Form.Label>{this.props.label}</Form.Label>
                        <Form.Control>
                            <input {...props} type="checkbox"/>
                        </Form.Control>
                        {/*{state.touched && state.error && <span>{state.error}</span>}*/}
                    </Form.Group>
                )}
            >
            </Field>
        );
    }
}

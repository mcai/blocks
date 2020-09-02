import React, {Component} from "react";
import {SimpleNumberInputProps} from "./SimpleNumberInputProps";
import {Form} from "react-bootstrap";
import {Field} from "react-final-form";

export class SimpleNumberInput extends Component<SimpleNumberInputProps, any> {
    render() {
        return (
            <Field name={this.props.name}>
                {({props, state}) => (
                    <Form.Group controlId={this.props.name}>
                        <Form.Label>{this.props.label}</Form.Label>
                        <Form.Control>
                            <input {...props} type={"number"} min={this.props.min} max={this.props.max}/>
                        </Form.Control>
                        {state.touched && state.error && <span>{state.error}</span>}
                    </Form.Group>
                )}
            </Field>
        );
    }
}

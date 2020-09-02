import React, {Component} from "react";
import {SimpleSelectInputProps} from "./SimpleSelectInputProps";
import {Form} from "react-bootstrap";
import {Field} from "react-final-form";

export class SimpleSelectInput extends Component<SimpleSelectInputProps, any> {
    render() {
        return (
            <Field
                name={this.props.name}
                render={({props, state}) => (
                    <Form.Group controlId={this.props.name}>
                        <Form.Label>{this.props.label}</Form.Label>
                        <Form.Control>
                            <select {...props} name={this.props.name}>
                                {
                                    this.props.options.map(option => (
                                        <option value={option.value}>{option.label}</option>
                                    ))
                                }
                            </select>
                        </Form.Control>
                        {/*{state.touched && state.error && <span>{state.error}</span>}*/}
                    </Form.Group>
                )}
            >
            </Field>
        );
    }
}

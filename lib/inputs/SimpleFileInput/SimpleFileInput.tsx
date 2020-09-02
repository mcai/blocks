import React from "react";
import {Component} from "react";
import {Form} from "react-bootstrap";
import {SimpleFileInputProps} from "./SimpleFileInputProps";
import {Field} from "react-final-form";

export class SimpleFileInput extends Component<SimpleFileInputProps, any> {
    render() {
        return (
            <Field
                name={this.props.name}
                render={({props, state}) => (
                    <Form.Group controlId={this.props.name}>
                        <Form.Label>{this.props.label}</Form.Label>
                        <Form.Control>
                            <input {...props} type={"file"}/>
                        </Form.Control>
                        {/*{state.touched && state.error && <span>{state.error}</span>}*/}
                    </Form.Group>
                )}
            >
            </Field>
        );
    }
}

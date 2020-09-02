import React, {ChangeEvent} from "react";
import {Component} from "react";
import { Form } from "react-bootstrap";
import {SimpleFileInputProps} from "./SimpleFileInputProps";
import {Field} from "react-final-form";

export class SimpleFileInput extends Component<SimpleFileInputProps, any> {
    render() {
        return (
            <Field name={this.props.name}>
                {({props, state}) => (
                    <Form.Group controlId={this.props.name}>
                        <Form.Label>{this.props.label}</Form.Label>
                        <Form.Control>
                            <input {...props} type={"file"} onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChange(e)}/>
                        </Form.Control>
                        {state.touched && state.error && <span>{state.error}</span>}
                    </Form.Group>
                )}
            </Field>
        );
    }

    private handleChange(e: ChangeEvent<HTMLInputElement>) {
        let files = Array.from(e.target.files ?? []);
        console.log("files:", files); // TODO
    }
}

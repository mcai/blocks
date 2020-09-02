import React, {Component} from "react";
import {SimpleTextInputProps} from "./SimpleTextInputProps";
import {Field} from "formik";
import { Form } from "react-bootstrap";

export class SimpleTextInput extends Component<SimpleTextInputProps, any> {
    render() {
        return (
            <Form.Group>
                <Form.Label>{this.props.label}</Form.Label>
                <Field type={this.props.password ? "password" : "text"} name={this.props.name} placeholder={this.props.placeholder}/>
            </Form.Group>
        );
    }
}

import React, {Component} from "react";
import {SimpleFormProps} from "./SimpleFormProps";
import {Form} from "react-bootstrap";

export class SimpleForm extends Component<SimpleFormProps, any> {
    render() {
        return (
            <Form>
                {this.props.children}
            </Form>
        );
    }
}

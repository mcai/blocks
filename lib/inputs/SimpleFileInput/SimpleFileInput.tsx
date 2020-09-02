import React, {ChangeEvent} from "react";
import {Component} from "react";
import { Form } from "react-bootstrap";
import {SimpleFileInputProps} from "./SimpleFileInputProps";

export class SimpleFileInput extends Component<SimpleFileInputProps, any> {
    render() {
        return (
            <Form.Group controlId={this.props.source}>
                <Form.File
                    name={this.props.source}
                    label={this.props.label}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChange(e)}
                />
            </Form.Group>
        );
    }

    private handleChange(e: ChangeEvent<HTMLInputElement>) {
        let files = Array.from(e.target.files ?? []);
        console.log("files:", files);
    }
}

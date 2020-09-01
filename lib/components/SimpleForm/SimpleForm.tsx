import React, {Component} from "react";
import {SimpleFormProps} from "./SimpleFormProps";
import {Form} from "react-bootstrap";
import {SimpleFormFieldType} from "./SimpleFormFieldType";

export class SimpleForm extends Component<SimpleFormProps, any> {
    render() {
        return (
            <Form>
                {
                    this.props.fields.map(field => (
                        <Form.Group controlId={field.name}>
                            <Form.Label>{field.title}</Form.Label>

                            {
                                field.type == SimpleFormFieldType.string && (
                                    <Form.Control type="text" name={field.name} value={field.value as string} placeholder={field.placeholder} />
                                )
                            }

                            {
                                field.type == SimpleFormFieldType.password && (
                                    <Form.Control type="password" name={field.name} value={field.value as string} placeholder={field.placeholder} />
                                )
                            }

                            {
                                field.type == SimpleFormFieldType.boolean && (
                                    <Form.Check type="checkbox" name={field.name} checked={field.value as boolean} label={field.title} />
                                )
                            }

                            {
                                field.hint != undefined && field.hint != "" && <Form.Text className="text-muted">
                                    {field.hint}
                                </Form.Text>
                            }
                        </Form.Group>
                    ))
                }
            </Form>
        );
    }
}

import React, { Component, Fragment } from "react";
import { SimpleSelectInputProps } from "./SimpleSelectInputProps";
import { Field } from "formik";
import { Col, Row } from "react-bootstrap";

export class SimpleSelectInput extends Component<SimpleSelectInputProps, any> {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col>
                        <b>{this.props.label}:</b>
                    </Col>
                </Row>
                <Row className={"mb-3"}>
                    <Col>
                        <Field as="select" name={this.props.name}>
                            {this.props.options.map((option) => (
                                <option key={option.key} value={option.value}>
                                    {option.text ?? option.value}
                                </option>
                            ))}
                        </Field>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

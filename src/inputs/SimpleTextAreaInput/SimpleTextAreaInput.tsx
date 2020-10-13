import React, { Component, Fragment } from "react";
import { SimpleTextAreaInputProps } from "./SimpleTextAreaInputProps";
import { Field } from "formik";
import { Col, Row } from "react-bootstrap";

export class SimpleTextAreaInput extends Component<SimpleTextAreaInputProps, any> {
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
                        <Field as="textarea" name={this.props.name} placeholder={this.props.placeholder} />
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

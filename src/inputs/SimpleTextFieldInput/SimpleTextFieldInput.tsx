import React, {Component, Fragment} from "react";
import {SimpleTextFieldInputProps} from "./SimpleTextFieldInputProps";
import {Field} from "formik";
import {Col, Row} from "react-bootstrap";

export class SimpleTextFieldInput extends Component<SimpleTextFieldInputProps, any> {
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
                        <Field as="textarea" name={this.props.name} placeholder={this.props.placeholder}/>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

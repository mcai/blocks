import React, {Component, Fragment} from "react";
import {SimpleTextInputProps} from "./SimpleTextInputProps";
import {Field} from "formik";
import {Col, Row} from "react-bootstrap";

export class SimpleTextInput extends Component<SimpleTextInputProps, any> {
    render() {
        return (
            <Fragment>
                <Row className={"mb-3"}>
                    <Col>
                        <label>{this.props.label}</label>
                    </Col>
                </Row>
                <Row className={"mb-3"}>
                    <Col>
                        <Field type={this.props.password ? "password" : "text"} name={this.props.name} placeholder={this.props.placeholder}/>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

import React, {Component, Fragment} from "react";
import {SimpleHexInputProps} from "./SimpleHexInputProps";
import {Field} from "formik";
import {Col, Row} from "react-bootstrap";

export class SimpleHexInput extends Component<SimpleHexInputProps, any> {
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
                        <Field type="text" name={this.props.name} placeholder={this.props.placeholder}/>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

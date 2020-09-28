import React, {Fragment} from "react";
import {Component} from "react";
import {SimpleFileInputProps} from "./SimpleFileInputProps";
import {Field} from "formik";
import {Col, Row} from "react-bootstrap";

export class SimpleFileInput extends Component<SimpleFileInputProps, any> {
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
                        <Field type="file" name={this.props.name}/>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

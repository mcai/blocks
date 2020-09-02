import React, {Component, Fragment} from "react";
import {SimpleBooleanInputProps} from "./SimpleBooleanInputProps";
import {Field} from "formik";
import {Col, Row} from "react-bootstrap";

export class SimpleBooleanInput extends Component<SimpleBooleanInputProps, any> {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col>
                        <label>{this.props.label}</label>
                    </Col>
                </Row>
                <Row className={"mb-3"}>
                    <Col>
                        <Field type="checkbox" name={this.props.name}/>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

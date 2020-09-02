import React, {Component, Fragment} from "react";
import {SimpleNumberInputProps} from "./SimpleNumberInputProps";
import {Field} from "formik";
import {Col, Row} from "react-bootstrap";

export class SimpleNumberInput extends Component<SimpleNumberInputProps, any> {
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
                        <Field type="number" name={this.props.name}/>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

import {Component} from "react";
import {SimpleToastProps} from "./SimpleToastProps";
import {Toast} from "react-bootstrap";
import React from "react";

export class SimpleToast extends Component<SimpleToastProps, any> {
    constructor(props: SimpleToastProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <Toast
                onClose={() => this.props.onClose()}
                show={this.props.visible}
                delay={this.props.delay ?? 3000}
                autohide={true}
            >
                <Toast.Header>
                    <strong className="mr-auto">{this.props.title}</strong>
                    <small>{this.props.subtitle}</small>
                </Toast.Header>
                <Toast.Body>{this.props.text}</Toast.Body>
            </Toast>
        );
    }
}

import {Component} from "react";
import {SimpleToastProps} from "./SimpleToastProps";
import {SimpleToastState} from "./SimpleToastState";
import {Toast} from "react-bootstrap";
import React from "react";

export class SimpleToast extends Component<SimpleToastProps, SimpleToastState> {
    constructor(props: SimpleToastProps) {
        super(props);

        this.state = {
            visible: this.props.visible
        };
    }

    render() {
        return (
            <Toast
                onClose={() => {this.setState({visible: false})}}
                show={this.state.visible}
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

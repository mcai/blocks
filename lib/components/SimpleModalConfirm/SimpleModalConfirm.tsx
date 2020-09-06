import React, {Component} from "react";
import {SimpleModalConfirmProps} from "./SimpleModalConfirmProps";
import {SimpleModalConfirmState} from "./SimpleModalConfirmState";
import {Button, Modal} from "react-bootstrap";

export class SimpleModalConfirm extends Component<SimpleModalConfirmProps, SimpleModalConfirmState> {
    constructor(props: SimpleModalConfirmProps) {
        super(props);

        this.state = {
            visible: false
        };
    }

    private showModal() {
        this.setState({
            visible: true
        });
    }

    private handleConfirm() {
        this.setState({
            visible: false
        });

        this.props.onConfirm?.();
    }

    private handleCancel() {
        this.setState({
            visible: false
        });

        this.props.onCancel?.();
    }

    render() {
        return (
            <div>
                <div onClick={() => this.showModal()}>
                    {this.props.children}
                </div>

                <Modal show={(this.props.visible == null || this.props.visible) && this.state.visible} onHide={() => this.handleCancel()}>
                    <Modal.Header closeButton={true}>
                        <Modal.Title>{this.props.title ?? "Untitled"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.subtitle ?? this.props.title ?? "Untitled"}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleCancel()}>
                            {this.props.cancelText ?? "Cancel"}
                        </Button>
                        <Button variant="primary" onClick={() => this.handleConfirm()}>
                            {this.props.okText ?? "OK"}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

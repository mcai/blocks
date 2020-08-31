import React, {Component} from "react";
import {ModalConfirmProps} from "./ModalConfirmProps";
import {ModalConfirmState} from "./ModalConfirmState";
import {Button, Modal} from "react-bootstrap";

export class ModalConfirm extends Component<ModalConfirmProps, ModalConfirmState> {
    constructor(props: ModalConfirmProps) {
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

        this.props.onConfirm();
    }

    private handleCancel() {
        this.setState({
            visible: false
        });

        this.props.onCancel();
    }

    render() {
        return (
            <div>
                <div onClick={() => this.showModal()}>
                    {this.props.children}
                </div>

                <Modal show={(this.props.visible == null || this.props.visible) && this.state.visible} onHide={() => this.handleCancel()}>
                    <Modal.Header closeButton={true}>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.subtitle ?? this.props.title}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleCancel()}>
                            {this.props.cancelText}
                        </Button>
                        <Button variant="primary" onClick={() => this.handleConfirm()}>
                            {this.props.okText}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

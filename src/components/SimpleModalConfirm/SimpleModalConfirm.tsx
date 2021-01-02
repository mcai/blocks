import React, { Component } from "react";
import { SimpleModalConfirmProps } from "./SimpleModalConfirmProps";
import { SimpleModalConfirmState } from "./SimpleModalConfirmState";
import { Modal } from "react-bootstrap";
import { SimpleModalConfirmType } from "./SimpleModalConfirmType";

export class SimpleModalConfirm extends Component<SimpleModalConfirmProps, SimpleModalConfirmState> {
    constructor(props: SimpleModalConfirmProps) {
        super(props);

        this.state = {
            visible: false,
        };
    }

    public showModal() {
        this.setState({
            visible: true,
        });
    }

    private handleConfirm() {
        this.setState({
            visible: false,
        });

        this.props.onConfirm?.();
    }

    private handleCancel() {
        this.setState({
            visible: false,
        });

        this.props.onCancel?.();
    }

    render() {
        let confirmButtonClass = "primary";

        if (this.props.type !== undefined) {
            switch (this.props.type) {
                case SimpleModalConfirmType.primary:
                    break;
                case SimpleModalConfirmType.danger:
                    confirmButtonClass = "danger";
                    break;
                case SimpleModalConfirmType.warning:
                    confirmButtonClass = "warning";
                    break;
            }
        }

        return (
            <div>
                {(this.props.buttonVisible == undefined || this.props.buttonVisible) && (
                    <div onClick={() => this.showModal()}>{this.props.children}</div>
                )}

                <Modal
                    show={(this.props.visible == null || this.props.visible) && this.state.visible}
                    onHide={() => this.handleCancel()}
                >
                    <Modal.Header closeButton={true}>
                        <Modal.Title>{this.props.title ?? "Untitled"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.subtitle ?? this.props.title ?? "Untitled"}</Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={() => this.handleCancel()}>
                            {this.props.cancelText ?? "Cancel"}
                        </button>
                        <button className={`btn btn-${confirmButtonClass}`} onClick={() => this.handleConfirm()}>
                            {this.props.okText ?? "OK"}
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

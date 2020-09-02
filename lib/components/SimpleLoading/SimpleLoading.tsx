import React, {Component} from "react";

// @ts-ignore
import LoadingOverlay from 'react-loading-overlay';
import {SimpleLoadingProps} from "./SimpleLoadingProps";
import {Spinner} from "react-bootstrap";

export class SimpleLoading extends Component<SimpleLoadingProps, any> {
    render() {
        return (
            <LoadingOverlay
                active={this.props.active}
                spinner={<Spinner animation={"border"}/>}
                text={this.props.text}
            >
                {
                    this.props.children
                }
            </LoadingOverlay>
        );
    }
}

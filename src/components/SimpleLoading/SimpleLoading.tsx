import React, {Component} from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LoadingOverlay from 'react-loading-overlay';
import {SimpleLoadingProps} from "./SimpleLoadingProps";
import {SimpleSpinner} from "../SimpleSpinner/SimpleSpinner";

export class SimpleLoading extends Component<SimpleLoadingProps, any> {
    render() {
        return (
            <LoadingOverlay
                active={this.props.active}
                spinner={<SimpleSpinner/>}
                text={this.props.text}
            >
                {
                    this.props.children
                }
            </LoadingOverlay>
        );
    }
}

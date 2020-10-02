import React, {Component} from "react";
import {SimpleButtonProps} from "./SimpleButtonProps";

export class SimpleButton extends Component<SimpleButtonProps, any> {
    render() {
        return (
            <button
                className="simple-button"
                onClick={() => this.props.onClick?.()}
                type={this.props.type}
                disabled={this.props.disabled}
            >
                {this.props.children}
            </button>
        );
    }
}

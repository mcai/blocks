import React, { Component, Fragment } from "react";
import { SimpleTextInputProps } from "./SimpleTextInputProps";

export class SimpleTextInput extends Component<SimpleTextInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const inline = this.props.inline != undefined && this.props.inline;

        const input = (
            <input
                className="simple-input"
                type={this.props.password != undefined && this.props.password(this.props.values) ? "password" : "text"}
                placeholder={this.props.placeholder}
                value={this.props.values?.[this.props.name ?? ""]}
                onChange={(e) => this.onUpdate(e.target.value)}
                readOnly={(this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false}
            />
        );

        return inline ? (
            <Fragment>
                <span>{this.props.label}: </span>
                &nbsp;{input}
            </Fragment>
        ) : (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>
                {input}
            </div>
        );
    }
}

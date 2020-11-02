import React, { Component, Fragment } from "react";
import { SimpleNumberInputProps } from "./SimpleNumberInputProps";

export class SimpleNumberInput extends Component<SimpleNumberInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const visible = this.props.visible === undefined || this.props.visible(this.props.values);
        const readOnly = (this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false;
        const inline = this.props.inline != undefined && this.props.inline;

        const input = (
            <input
                className="simple-input"
                type="number"
                value={this.props.values?.[this.props.name ?? ""]}
                onChange={(e) => this.onUpdate(e.target.value)}
                readOnly={readOnly}
            />
        );

        return (
            visible &&
            (inline ? (
                <Fragment>
                    <span>{this.props.label}: </span>
                    &nbsp;{input}
                </Fragment>
            ) : (
                <div className="simple-row">
                    <span className="simple-input-label">{this.props.label}: </span>
                    {input}
                </div>
            ))
        );
    }
}

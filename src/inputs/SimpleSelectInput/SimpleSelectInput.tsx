import React, { Component, Fragment } from "react";
import { SimpleSelectInputProps } from "./SimpleSelectInputProps";

export class SimpleSelectInput extends Component<SimpleSelectInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const inline = this.props.inline != undefined && this.props.inline;

        const select = (
            <select
                className={`${this.props.inline ? "" : "simple-input"}`}
                value={this.props.values?.[this.props.name ?? ""]}
                onChange={(e) => this.onUpdate(e.target.value)}
                disabled={(this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false}
            >
                {this.props.options?.map((option) => (
                    <option key={option.key} value={option.value}>
                        {option.text ?? option.value}
                    </option>
                ))}
            </select>
        );

        return inline ? (
            <Fragment>
                <span>{this.props.label}: </span>
                &nbsp;{select}
            </Fragment>
        ) : (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>
                {select}
            </div>
        );
    }
}

import React, { Component } from "react";
import { SimpleSelectInputProps } from "./SimpleSelectInputProps";
import { InputUtils } from "../InputUtils";

export class SimpleSelectInput extends Component<SimpleSelectInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const visible = this.props.visible === undefined || this.props.visible(this.props.values);
        const readOnly = (this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false;
        const inline = this.props.inline != undefined && this.props.inline;

        const select = (
            <select
                className={`${this.props.inline ? "" : "simple-input"}`}
                value={this.props.values?.[this.props.name ?? ""]}
                onChange={(e) => this.onUpdate(e.target.value)}
                disabled={readOnly}
            >
                {this.props.options?.map((option) => (
                    <option key={option.key} value={option.value}>
                        {option.text ?? option.value}
                    </option>
                ))}
            </select>
        );

        return InputUtils.render(this.props.label, select, visible, inline);
    }
}

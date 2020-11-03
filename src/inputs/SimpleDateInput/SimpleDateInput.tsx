import React, { Component } from "react";
import { SimpleDateInputProps } from "./SimpleDateInputProps";
import { SimpleFormatting } from "../../utils/SimpleFormatting";
import { InputUtils } from "../InputUtils";

export class SimpleDateInput extends Component<SimpleDateInputProps, any> {
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
                type="date"
                value={this.props.values?.[this.props.name ?? ""]}
                onChange={(e) => this.onUpdate(e.target.value)}
                readOnly={readOnly}
            />
        );

        return InputUtils.render(this.props.label, input, visible, inline);
    }
}

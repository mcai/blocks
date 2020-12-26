import React, { Component } from "react";
import { SimpleBooleanInputProps } from "./SimpleBooleanInputProps";
import { InputUtils } from "../InputUtils";

export class SimpleBooleanInput extends Component<SimpleBooleanInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value ? "true" : "false");
    }

    render() {
        const visible = this.props.visible === undefined || this.props.visible(this.props.values);
        const readOnly = (this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false;
        const inline = this.props.inline != undefined && this.props.inline;

        const input = (
            <input
                className="simple-input"
                type="checkbox"
                checked={this.props.values?.[this.props.name ?? ""] == "true"}
                onChange={(e) => this.onUpdate(e.target.checked)}
                readOnly={readOnly}
                style={this.props.style}
            />
        );

        return InputUtils.render(this.props.label, input, visible, inline);
    }
}

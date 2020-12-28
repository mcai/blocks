import React, { Component } from "react";
import { SimpleTextAreaInputProps } from "./SimpleTextAreaInputProps";
import { InputUtils } from "../InputUtils";

export class SimpleTextAreaInput extends Component<SimpleTextAreaInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const visible = this.props.visible === undefined || this.props.visible(this.props.values);
        const readOnly = (this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false;
        const inline = this.props.inline != undefined && this.props.inline;

        const textarea = (
            <textarea
                className="simple-input"
                placeholder={this.props.placeholder}
                value={this.props.values?.[this.props.name ?? ""]}
                onChange={(e) => this.onUpdate(e.target.value)}
                readOnly={readOnly}
                style={this.props.style}
            />
        );

        return InputUtils.render(this.props.label, textarea, visible, inline);
    }
}

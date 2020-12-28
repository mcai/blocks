import React, { Component } from "react";
import { SimpleTextInputProps } from "./SimpleTextInputProps";
import { InputUtils } from "../InputUtils";

export class SimpleTextInput extends Component<SimpleTextInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const visible = this.props.visible === undefined || this.props.visible(this.props.values);
        const readOnly = (this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false;

        const input = (
            <input
                type={this.props.password != undefined && this.props.password(this.props.values) ? "password" : "text"}
                placeholder={this.props.placeholder}
                value={this.props.values?.[this.props.name ?? ""]}
                onChange={(e) => this.onUpdate(e.target.value)}
                readOnly={readOnly}
                className={this.props.className}
                style={this.props.style}
            />
        );

        return InputUtils.render(input, visible);
    }
}

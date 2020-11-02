import React, { Component } from "react";
import { SimpleFuncInputProps } from "./SimpleFuncInputProps";
import { InputUtils } from "../InputUtils";

export class SimpleFuncInput extends Component<SimpleFuncInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const visible = this.props.visible === undefined || this.props.visible(this.props.values);
        const inline = this.props.inline != undefined && this.props.inline;

        const input = (
            <input
                className="simple-input"
                type="text"
                placeholder={this.props.placeholder}
                value={this.props.getValueFunc(this.props.values)}
                onChange={(e) => this.onUpdate(e.target.value)}
                readOnly={true}
            />
        );

        return InputUtils.render(this.props.label, input, visible, inline);
    }
}

import React, { Component } from "react";
import { SimpleHiddenInputProps } from "./SimpleHiddenInputProps";

export class SimpleHiddenInput extends Component<SimpleHiddenInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const visible = this.props.visible === undefined || this.props.visible(this.props.values);

        return (
            visible && (
                <input
                    type="hidden"
                    value={this.props.values?.[this.props.name ?? ""]}
                    onChange={(e) => this.onUpdate(e.target.value)}
                />
            )
        );
    }
}

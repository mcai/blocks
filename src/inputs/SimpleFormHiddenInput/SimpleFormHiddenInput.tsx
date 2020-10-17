import React, { Component } from "react";
import { SimpleFormHiddenInputProps } from "./SimpleFormHiddenInputProps";

export class SimpleFormHiddenInput extends Component<SimpleFormHiddenInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);

        console.log(`SimpleFormHiddenInput.onUpdate: name=${this.props.name}, value=${value}`);
    }

    render() {
        console.log(
            `SimpleFormHiddenInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(
                this.props.values,
            )}, value=${this.props.values?.[this.props.name ?? ""]}`,
        );

        return (
            <input
                type="hidden"
                value={this.props.values?.[this.props.name ?? ""]}
                onChange={(e) => this.onUpdate(e.target.value)}
            />
        );
    }
}
import React, { Component } from "react";
import { SimpleTextAreaInputProps } from "./SimpleTextAreaInputProps";

export class SimpleTextAreaInput extends Component<SimpleTextAreaInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);

        console.log(`SimpleFormTextAreaInput.onUpdate: name=${this.props.name}, value=${value}`);
    }

    render() {
        console.log(
            `SimpleFormTextAreaInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(
                this.props.values,
            )}, value=${this.props.values?.[this.props.name ?? ""]}`,
        );

        return (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>

                <textarea
                    className="simple-input"
                    placeholder={this.props.placeholder}
                    value={this.props.values?.[this.props.name ?? ""]}
                    onChange={(e) => this.onUpdate(e.target.value)}
                    readOnly={(this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false}
                />
            </div>
        );
    }
}

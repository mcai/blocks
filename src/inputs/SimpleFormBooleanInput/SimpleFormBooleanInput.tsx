import React, { Component } from "react";
import { SimpleFormBooleanInputProps } from "./SimpleFormBooleanInputProps";

export class SimpleFormBooleanInput extends Component<SimpleFormBooleanInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);

        console.log(`SimpleFormBooleanInput.onUpdate: name=${this.props.name}, value=${value}`);
    }

    render() {
        console.log(
            `SimpleFormBooleanInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(
                this.props.values,
            )}, value=${this.props.values?.[this.props.name ?? ""]}`,
        );

        return (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>

                <input
                    className="simple-input"
                    type="checkbox"
                    checked={this.props.values?.[this.props.name ?? ""]}
                    onChange={(e) => this.onUpdate(e.target.checked)}
                    readOnly={this.props.readOnly !== undefined && this.props.readOnly(this.props.values)}
                />
            </div>
        );
    }
}

import React, { Component } from "react";
import { SimpleNumberInputProps } from "./SimpleNumberInputProps";

export class SimpleNumberInput extends Component<SimpleNumberInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);

        console.log(`SimpleFormNumberInput.onUpdate: name=${this.props.name}, value=${value}`);
    }

    render() {
        console.log(
            `SimpleFormNumberInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(
                this.props.values,
            )}, value=${this.props.values?.[this.props.name ?? ""]}`,
        );

        return (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>

                <input
                    className="simple-input"
                    type="number"
                    value={this.props.values?.[this.props.name ?? ""]}
                    onChange={(e) => this.onUpdate(e.target.value)}
                    readOnly={(this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false}
                />
            </div>
        );
    }
}

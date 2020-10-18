import React, { Component } from "react";
import { SimpleFormSelectInputProps } from "./SimpleFormSelectInputProps";

export class SimpleFormSelectInput extends Component<SimpleFormSelectInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);

        console.log(`SimpleFormSelectInput.onUpdate: name=${this.props.name}, value=${value}`);
    }

    render() {
        console.log(
            `SimpleFormSelectInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(
                this.props.values,
            )}, value=${this.props.values?.[this.props.name ?? ""]}`,
        );

        return (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>

                <select
                    className="simple-input"
                    value={this.props.values?.[this.props.name ?? ""]}
                    onChange={(e) => this.onUpdate(e.target.value)}
                    disabled={(this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false}
                >
                    {this.props.options.map((option) => (
                        <option key={option.key} value={option.value}>
                            {option.text ?? option.value}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

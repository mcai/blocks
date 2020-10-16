import React, { Component } from "react";
import { SimpleFormFuncInputProps } from "./SimpleFormFuncInputProps";

export class SimpleFormFuncInput extends Component<SimpleFormFuncInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);

        console.log(`SimpleFormFuncInput.onUpdate: name=${this.props.name}, value=${value}`);
    }

    render() {
        console.log(
            `SimpleFormFuncInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(
                this.props.values,
            )}, value=${this.props.values?.[this.props.name ?? ""]}`,
        );

        return (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>

                <input
                    className="simple-input"
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.props.getValueFunc(this.props.values)}
                    onChange={(e) => this.onUpdate(e.target.value)}
                    readOnly={true}
                />
            </div>
        );
    }
}

import React, {Component} from "react";
import {SimpleFormBooleanInputProps} from "./SimpleFormBooleanInputProps";

export class SimpleFormBooleanInput extends Component<SimpleFormBooleanInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name, value);

        console.log(`SimpleFormBooleanInput.onUpdate: name=${this.props.name}, value=${value}`);
    }

    render() {
        console.log(`SimpleFormBooleanInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(this.props.values)}, value=${this.props.values?.[this.props.name]}`);

        return (
            <div className="simple-row">
                <div className="simple-center">
                    <span>{this.props.label}: </span>

                    <input
                        type="checkbox"
                        checked={this.props.values?.[this.props.name]}
                        onChange={(e) => this.onUpdate(e.target.checked)}
                    />
                </div>
            </div>
        );
    }
}
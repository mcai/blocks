import React, {Component} from "react";
import {SimpleFormSelectInputProps} from "./SimpleFormSelectInputProps";

export class SimpleFormSelectInput extends Component<SimpleFormSelectInputProps, any> {
    onUpdate(value: string) {
        this.props.onUpdate?.(this.props.name, value);

        console.log(`SimpleFormSelectInput.onUpdate: name=${this.props.name}, value=${value}`);
    }

    render() {
        console.log(`SimpleFormSelectInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(this.props.values)}, value=${this.props.values?.[this.props.name]}`);

        return (
            <div className="simple-row">
                <div className="simple-center">
                    <span>{this.props.label}: </span>

                    <select
                        value={this.props.values?.[this.props.name]}
                        onChange={(e) => this.onUpdate(e.target.value)}
                    >
                        {
                            this.props.options.map(option => (
                                <option key={option.value} value={option.value}>{option.text ?? option.value}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        );
    }
}

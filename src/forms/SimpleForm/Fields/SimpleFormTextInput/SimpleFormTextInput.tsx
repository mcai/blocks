import React, {Component, Fragment} from "react";
import {SimpleFormTextInputProps} from "./SimpleFormTextInputProps";

export class SimpleFormTextInput extends Component<SimpleFormTextInputProps, any> {
    onUpdate(value: string) {
        this.props.onUpdate?.(this.props.name, value);

        console.log(`SimpleFormTextInput.onUpdate: name=${this.props.name}, value=${value}`);
    }

    render() {
        console.log(`SimpleFormTextInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(this.props.values)}, value=${this.props.values?.[this.props.name]}`);

        return (
            <Fragment
                key={this.props.name}
            >
                <span>{this.props.label}: </span>

                <input
                    type={this.props.password ? "password" : "text"}
                    placeholder={this.props.placeholder}
                    value={this.props.values?.[this.props.name]}
                    onChange={(e) => this.onUpdate(e.target.value)}
                />
            </Fragment>
        );
    }
}

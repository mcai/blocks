import React, { Component, Fragment } from "react";
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

        const inline = this.props.inline != undefined && this.props.inline;

        const select = (
            <select
                className={`${this.props.inline ? "" : "simple-input"}`}
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
        );

        return inline ? (
            <Fragment>
                <span>{this.props.label}: </span>
                &nbsp;{select}
            </Fragment>
        ) : (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>
                {select}
            </div>
        );
    }
}

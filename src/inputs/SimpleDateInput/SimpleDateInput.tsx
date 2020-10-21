import React, { Component } from "react";
import { SimpleDateInputProps } from "./SimpleDateInputProps";
import { SimpleFormatting } from "../../utils/SimpleFormatting";

export class SimpleDateInput extends Component<SimpleDateInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);

        console.log(`SimpleFormDateInput.onUpdate: name=${this.props.name}, value=${value}`);
    }

    render() {
        console.log(
            `SimpleFormDateInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(
                this.props.values,
            )}, value=${this.props.values?.[this.props.name ?? ""]}`,
        );

        return (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>

                <input
                    className="simple-input"
                    type="date"
                    value={SimpleFormatting.toFormattedDateString(this.props.values?.[this.props.name ?? ""])}
                    onChange={(e) => this.onUpdate(SimpleFormatting.toFormattedDateTimeString(e.target.value))}
                    readOnly={(this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false}
                />
            </div>
        );
    }
}

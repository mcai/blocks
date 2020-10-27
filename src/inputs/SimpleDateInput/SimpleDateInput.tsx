import React, { Component } from "react";
import { SimpleDateInputProps } from "./SimpleDateInputProps";
import { SimpleFormatting } from "../../utils/SimpleFormatting";

export class SimpleDateInput extends Component<SimpleDateInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const readOnly = (this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false;

        return (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>

                <input
                    className="simple-input"
                    type="date"
                    value={SimpleFormatting.toFormattedDateString(this.props.values?.[this.props.name ?? ""])}
                    onChange={(e) => this.onUpdate(SimpleFormatting.toFormattedDateTimeString(e.target.value))}
                    readOnly={readOnly}
                />
            </div>
        );
    }
}

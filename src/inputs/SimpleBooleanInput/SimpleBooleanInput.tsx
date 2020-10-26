import React, { Component } from "react";
import { SimpleBooleanInputProps } from "./SimpleBooleanInputProps";

export class SimpleBooleanInput extends Component<SimpleBooleanInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value ? "true" : "false");
    }

    render() {
        return (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>

                <input
                    className="simple-input"
                    type="checkbox"
                    checked={this.props.values?.[this.props.name ?? ""] == "true"}
                    onChange={(e) => this.onUpdate(e.target.checked)}
                    readOnly={(this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false}
                />
            </div>
        );
    }
}

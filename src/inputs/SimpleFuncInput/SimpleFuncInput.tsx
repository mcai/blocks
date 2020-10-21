import React, { Component } from "react";
import { SimpleFuncInputProps } from "./SimpleFuncInputProps";

export class SimpleFuncInput extends Component<SimpleFuncInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
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

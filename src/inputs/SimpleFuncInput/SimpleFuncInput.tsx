import React, { Component } from "react";
import { SimpleFuncInputProps } from "./SimpleFuncInputProps";

export class SimpleFuncInput extends Component<SimpleFuncInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const visible = this.props.visible === undefined || this.props.visible(this.props.values);

        return (
            visible && (
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
            )
        );
    }
}

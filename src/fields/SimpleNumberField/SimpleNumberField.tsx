import { Component } from "react";
import { SimpleNumberFieldProps } from "./SimpleNumberFieldProps";

export class SimpleNumberField extends Component<SimpleNumberFieldProps, any> {
    render() {
        const value = this.props.values?.[this.props.name ?? ""];

        if (value !== undefined && typeof value === "number") {
            return value.toFixed(this.props.fractionDigits) ?? "";
        }
        return "";
    }
}

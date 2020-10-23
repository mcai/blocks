import { Component } from "react";
import { SimpleNumberFieldProps } from "./SimpleNumberFieldProps";

export class SimpleNumberField extends Component<SimpleNumberFieldProps, any> {
    render() {
        const value = this.props.values?.[this.props.name ?? ""];
        return Number(value ?? 0).toFixed(this.props.fractionDigits);
    }
}

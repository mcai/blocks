import { Component } from "react";
import { SimpleNumberFieldProps } from "./SimpleNumberFieldProps";

export class SimpleNumberField extends Component<SimpleNumberFieldProps, any> {
    render() {
        return (this.props.values?.[this.props.name ?? ""] as number)?.toFixed(this.props.fractionDigits) ?? "";
    }
}

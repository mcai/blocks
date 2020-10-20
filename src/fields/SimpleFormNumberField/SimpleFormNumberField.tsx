import { Component } from "react";
import { SimpleFormNumberFieldProps } from "./SimpleFormNumberFieldProps";

export class SimpleFormNumberField extends Component<SimpleFormNumberFieldProps, any> {
    render() {
        return (this.props.values?.[this.props.name ?? ""] as number)?.toFixed(this.props.fractionDigits);
    }
}

import { Component } from "react";
import { SimpleTextFieldProps } from "./SimpleTextFieldProps";

export class SimpleTextField extends Component<SimpleTextFieldProps, any> {
    render() {
        return this.props.values?.[this.props.name ?? ""] ?? "";
    }
}

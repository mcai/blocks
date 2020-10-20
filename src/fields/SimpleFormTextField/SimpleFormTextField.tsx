import { Component } from "react";
import { SimpleFormTextFieldProps } from "./SimpleFormTextFieldProps";

export class SimpleFormTextField extends Component<SimpleFormTextFieldProps, any> {
    render() {
        return this.props.values?.[this.props.name ?? ""];
    }
}

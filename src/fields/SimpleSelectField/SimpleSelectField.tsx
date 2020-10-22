import { Component } from "react";
import { SimpleSelectFieldProps } from "./SimpleSelectFieldProps";

export class SimpleSelectField extends Component<SimpleSelectFieldProps, any> {
    render() {
        const value = this.props.values?.[this.props.name ?? ""];
        return this.props.options?.filter((option) => option.value == value)?.[0]?.text ?? "";
    }
}

import { Component } from "react";
import { SimpleSelectFieldProps } from "./SimpleSelectFieldProps";
import Enumerable from "linq";

export class SimpleSelectField extends Component<SimpleSelectFieldProps, any> {
    render() {
        const value = this.props.values?.[this.props.name ?? ""];
        return Enumerable.from(this.props.options ?? []).firstOrDefault((option) => option.value == value)?.text;
    }
}

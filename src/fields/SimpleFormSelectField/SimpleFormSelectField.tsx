import { Component } from "react";
import { SimpleFormSelectFieldProps } from "./SimpleFormSelectFieldProps";
import Enumerable from "linq";

export class SimpleFormSelectField extends Component<SimpleFormSelectFieldProps, any> {
    render() {
        const value = this.props.values?.[this.props.name ?? ""];
        return Enumerable.from(this.props.options ?? []).firstOrDefault((option) => option.value == value)?.text;
    }
}

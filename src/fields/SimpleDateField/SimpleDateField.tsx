import { Component } from "react";
import { SimpleDateFieldProps } from "./SimpleDateFieldProps";
import { SimpleFormatting } from "../../utils/SimpleFormatting";

export class SimpleDateField extends Component<SimpleDateFieldProps, any> {
    render() {
        const value = this.props.values?.[this.props.name ?? ""];
        return value ? SimpleFormatting.toFormattedDateString(value) : "";
    }
}

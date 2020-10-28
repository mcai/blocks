import { Component } from "react";
import { SimpleDateTimeFieldProps } from "./SimpleDateTimeFieldProps";
import { SimpleFormatting } from "../../utils/SimpleFormatting";

export class SimpleDateTimeField extends Component<SimpleDateTimeFieldProps, any> {
    render() {
        const value = this.props.values?.[this.props.name ?? ""];
        return value ? SimpleFormatting.toFormattedDateTimeString(value) : "";
    }
}

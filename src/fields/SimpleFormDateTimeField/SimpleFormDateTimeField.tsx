import { Component } from "react";
import { SimpleFormDateTimeFieldProps } from "./SimpleFormDateTimeFieldProps";
import { SimpleFormatting } from "../../utils/SimpleFormatting";

export class SimpleFormDateTimeField extends Component<SimpleFormDateTimeFieldProps, any> {
    render() {
        return SimpleFormatting.toFormattedDateTimeString(this.props.values?.[this.props.name ?? ""]);
    }
}

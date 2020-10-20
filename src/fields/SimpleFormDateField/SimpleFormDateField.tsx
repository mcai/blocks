import { Component } from "react";
import { SimpleFormDateFieldProps } from "./SimpleFormDateFieldProps";
import { SimpleFormatting } from "../../utils/SimpleFormatting";

export class SimpleFormDateField extends Component<SimpleFormDateFieldProps, any> {
    render() {
        return SimpleFormatting.toFormattedDateString(this.props.values?.[this.props.name ?? ""]);
    }
}

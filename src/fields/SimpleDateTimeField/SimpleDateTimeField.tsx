import { Component } from "react";
import { SimpleDateTimeFieldProps } from "./SimpleDateTimeFieldProps";
import { SimpleFormatting } from "../../utils/SimpleFormatting";

export class SimpleDateTimeField extends Component<SimpleDateTimeFieldProps, any> {
    render() {
        return SimpleFormatting.toFormattedDateTimeString(this.props.values?.[this.props.name ?? ""]);
    }
}

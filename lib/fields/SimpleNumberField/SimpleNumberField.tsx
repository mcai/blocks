import {Component} from "react";
import {SimpleNumberFieldProps} from "./SimpleNumberFieldProps";

export class SimpleNumberField extends Component<SimpleNumberFieldProps, any> {
    render() {
        return (this.props.record[this.props.source] as number).toFixed(2);
    }
}

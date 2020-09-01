import {Component} from "react";
import {SimpleBooleanFieldProps} from "./SimpleBooleanFieldProps";

export class SimpleBooleanField extends Component<SimpleBooleanFieldProps, any> {
    render() {
        return this.props.record[this.props.source] ? "是" : "否";
    }
}

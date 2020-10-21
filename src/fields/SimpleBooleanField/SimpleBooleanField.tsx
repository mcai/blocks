import { Component } from "react";
import { SimpleBooleanFieldProps } from "./SimpleBooleanFieldProps";

export class SimpleBooleanField extends Component<SimpleBooleanFieldProps, any> {
    render() {
        return this.props.values?.[this.props.name ?? ""] ? "是" : "否";
    }
}

import { Component } from "react";
import { SimpleFormBooleanFieldProps } from "./SimpleFormBooleanFieldProps";

export class SimpleFormBooleanField extends Component<SimpleFormBooleanFieldProps, any> {
    render() {
        return this.props.values?.[this.props.name ?? ""] ? "是" : "否";
    }
}

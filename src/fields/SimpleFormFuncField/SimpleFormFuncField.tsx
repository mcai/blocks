import { Component } from "react";
import { SimpleFormFuncFieldProps } from "./SimpleFormFuncFieldProps";

export class SimpleFormFuncField extends Component<SimpleFormFuncFieldProps, any> {
    render() {
        return this.props.renderFunc?.(this.props.values);
    }
}

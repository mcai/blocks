import React, { Component } from "react";
import { SimpleFuncFieldProps } from "./SimpleFuncFieldProps";

export class SimpleFuncField extends Component<SimpleFuncFieldProps, any> {
    render() {
        return this.props.renderFunc?.(this.props.values) ?? <span />;
    }
}

import React, {Component} from "react";
import {SimpleSpacingProps} from "./SimpleSpacingProps";

export class SimpleSpacing extends Component<SimpleSpacingProps, any> {
    render() {
        return (
            <div className={`mb-${this.props.value ?? 3}`}/>
        );
    }
}

import React, { Component } from "react";
import { SimplePageHeaderProps } from "./SimplePageHeaderProps";

export class SimplePageHeader extends Component<SimplePageHeaderProps, any> {
    render() {
        return (
            <div className={"d-flex flex-row"}>
                <div className={"p-2 h5"}>{this.props.title}</div>
                <div className={"p-2 ml-auto row"}>{this.props.extra}</div>
            </div>
        );
    }
}

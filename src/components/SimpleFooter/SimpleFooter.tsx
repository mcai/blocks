import React, {Component} from "react";
import {SimpleFooterProps} from "./SimpleFooterProps";

export class SimpleFooter extends Component<SimpleFooterProps, any> {
    render(): React.ReactNode {
        return (
            <div className="simple-center">
                {this.props.brand.title}

                {
                    this.props.brand.href && <span>- {this.props.brand.href}</span>
                }

                {this.props.extra}
            </div>
        );
    }
}

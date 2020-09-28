import React, {Component} from "react";
import {SimpleFooterProps} from "./SimpleFooterProps";
import {SimpleCenter} from "../../styles/SimpleTheme/SimpleTheme";

export class SimpleFooter extends Component<SimpleFooterProps, any> {
    render(): React.ReactNode {
        return (
            <SimpleCenter>
                {this.props.brand.title}

                {
                    this.props.brand.href && <span>- {this.props.brand.href}</span>
                }

                {this.props.extra}
            </SimpleCenter>
        );
    }
}

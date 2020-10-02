import React, {Component} from "react";
import {SimpleRowProps} from "./SimpleRowProps";

// TODO: to be removed
export class SimpleRow extends Component<SimpleRowProps, any> {
    render() {
        return (
            <div className="simple-row">
                <div className="simple-left">
                    {this.props.left}
                </div>

                <div className="simple-right">
                    {this.props.right}
                </div>

                <div className="simple-center">
                    {this.props.children ?? <span>&nbsp;&nbsp;</span>}
                </div>
            </div>
        );
    }
}

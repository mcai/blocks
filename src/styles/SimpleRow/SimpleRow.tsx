import React, {Component} from "react";
import {SimpleCenter, SimpleLeft, SimpleRight} from "../SimpleTheme/SimpleTheme";
import {SimpleRowProps} from "./SimpleRowProps";

export class SimpleRow extends Component<SimpleRowProps, any> {
    render() {
        return (
            <div style={{
                padding: "0.5em",
                margin: "0.5em"
            }}>
                <SimpleLeft>
                    {this.props.left}
                </SimpleLeft>

                <SimpleRight>
                    {this.props.right}
                </SimpleRight>

                <SimpleCenter>
                    {this.props.children ?? <span>&nbsp;&nbsp;</span>}
                </SimpleCenter>
            </div>
        );
    }
}

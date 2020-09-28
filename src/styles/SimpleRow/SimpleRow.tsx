import React, {Component, Fragment} from "react";
import {SimpleCenter, SimpleLeft, SimpleRight} from "../SimpleTheme/SimpleTheme";
import {SimpleRowProps} from "./SimpleRowProps";

export class SimpleRow extends Component<SimpleRowProps, any> {
    render() {
        return (
            <Fragment>
                <SimpleLeft>
                    {this.props.left}
                </SimpleLeft>

                <SimpleRight>
                    {this.props.right}
                </SimpleRight>

                <SimpleCenter>
                    {this.props.children}
                </SimpleCenter>
            </Fragment>
        );
    }
}

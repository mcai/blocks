import React, {Component, Fragment} from "react";
import {Center, Left, Right} from "./SimpleTheme";

export interface SimpleRowProps {
    left?: React.ReactNode
    right?: React.ReactNode
}

export class SimpleRow extends Component<SimpleRowProps, any> {
    render() {
        return (
            <Fragment>
                <Left>
                    {this.props.left}
                </Left>

                <Right>
                    {this.props.right}
                </Right>

                <Center>
                    {this.props.children}
                </Center>
            </Fragment>
        );
    }
}

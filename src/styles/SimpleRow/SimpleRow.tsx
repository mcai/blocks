import React, {Component} from "react";
import {SimpleCenter, SimpleLeft, SimpleRight} from "../SimpleTheme/SimpleTheme";
import {SimpleRowProps} from "./SimpleRowProps";
import styled from "styled-components";

export class SimpleRow extends Component<SimpleRowProps, any> {
    render() {
        let RowClass = styled.div`
          padding: 0.5em;
          margin: 0.5em;
        `;

        return (
            <RowClass>
                <SimpleLeft>
                    {this.props.left}
                </SimpleLeft>

                <SimpleRight>
                    {this.props.right}
                </SimpleRight>

                <SimpleCenter>
                    {this.props.children ?? <span>&nbsp;&nbsp;</span>}
                </SimpleCenter>
            </RowClass>
        );
    }
}

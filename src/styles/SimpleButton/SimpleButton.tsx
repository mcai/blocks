import React, {Component} from "react";
import {SimpleTheme} from "../SimpleTheme/SimpleTheme";
import styled from "styled-components";
import {SimpleButtonProps} from "./SimpleButtonProps";

export class SimpleButton extends Component<SimpleButtonProps, any> {
    render() {
        let ButtonClass = styled.button`
            color: ${props => (props.theme as SimpleTheme).black};
            background: ${props => (props.theme as SimpleTheme).white};
            border: 1px solid ${props => (props.theme as SimpleTheme).black};
            
            margin: 0.5em;
            padding: 0.25em 0.5em;
            border-radius: 5px;
        `;

        return (
            <ButtonClass onClick={() => this.props.onClick?.()}>
                {this.props.children}
            </ButtonClass>
        );
    }
}

import React, {Component} from "react";
import {SimpleTheme} from "../SimpleTheme/SimpleTheme";
import styled from "styled-components";
import {SimpleButtonProps} from "./SimpleButtonProps";

export class SimpleButton extends Component<SimpleButtonProps, any> {
    render() {
        let ButtonClass = styled.button`
            color: ${props => (props.theme as SimpleTheme).LightBackground};
            background: ${props => (props.theme as SimpleTheme).LightForeground};
            border: 1px solid ${props => (props.theme as SimpleTheme).LightBackground};
            
            margin: 0.5em;
            padding: 0.25em 0.5em;
            border-radius: 5px;
        `;

        return (
            <ButtonClass onClick={() => this.props.onClick?.()} type={this.props.type} disabled={this.props.disabled}>
                {this.props.children}
            </ButtonClass>
        );
    }
}

import React, {Component} from "react";
import styled from "styled-components";
import {SimpleTheme} from "../../styles/SimpleTheme/SimpleTheme";
import {SimpleNavbarProps} from "./SimpleNavbarProps";

export class SimpleNavbar extends Component<SimpleNavbarProps, any> {
    constructor(props: SimpleNavbarProps) {
        super(props);
    }

    render() {
        let SimpleNavbarClass = styled.ul`
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: ${props => (props.theme as SimpleTheme).DarkBackground};
        `;

        let SimpleNavbarBrandClass = styled.li`
          float: left;
          text-decoration: none!important;
        `;

        let SimpleNavDropDownItemClass = styled.div`
          display: inline-block;
          color: ${props => (props.theme as SimpleTheme).LightBackground};
          text-align: center;
          padding: 14px 16px;
          text-decoration: none!important;
        `;

        let SimpleDropDownContentClass = styled.div`
          display: none;
          position: absolute;
          background-color: ${props => (props.theme as SimpleTheme).LightBackground};
          min-width: 160px;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          z-index: 1;
        `;

        let SimpleNavDropdownClass = styled.li`
          float: left;
          display: inline-block;
          &:hover {
            color: ${props => (props.theme as SimpleTheme).LightBackground};
            background-color: ${props => (props.theme as SimpleTheme).DarkForeground};
          }
          &:hover ${SimpleDropDownContentClass} {
            display: block;
          }
        `;

        let SimpleNavbarBrandItemClass = styled.a`
          display: inline-block;
          color: ${props => (props.theme as SimpleTheme).LightBackground};
          text-align: center;
          padding: 14px 16px;
          text-decoration: none!important;
          &:hover {
            color: ${props => (props.theme as SimpleTheme).LightBackground};
            background-color: ${props => (props.theme as SimpleTheme).DarkForeground};
          }
        `;

        let SimpleDropDownContentItemClass = styled.a`
          display: block;
          color: ${props => (props.theme as SimpleTheme).DarkBackground};
          text-align: left;
          padding: 12px 16px;
          text-decoration: none!important;
          &:hover {
            color: ${props => (props.theme as SimpleTheme).LightBackground};
            background-color: ${props => (props.theme as SimpleTheme).LightForeground};
          }
        `;

        return (
            <SimpleNavbarClass>
                <SimpleNavbarBrandClass>
                    <SimpleNavbarBrandItemClass href={this.props.brand.href}>{this.props.brand.title}</SimpleNavbarBrandItemClass>
                </SimpleNavbarBrandClass>

                {
                    this.props.sections
                        .filter(section => section.visible == undefined || section.visible)
                        .map(section => (
                            <SimpleNavDropdownClass key={section.id}>
                                <SimpleNavDropDownItemClass>
                                    {section.title}
                                </SimpleNavDropDownItemClass>
                                <SimpleDropDownContentClass>
                                    {
                                        section.items
                                            .filter(item => item.visible == undefined || item.visible)
                                            .map(item => (
                                                <SimpleDropDownContentItemClass
                                                    href={item.href}
                                                    onClick={item.onClick}
                                                    key={item.key}
                                                >
                                                    {item.title}
                                                </SimpleDropDownContentItemClass>
                                            ))
                                    }
                                </SimpleDropDownContentClass>
                            </SimpleNavDropdownClass>
                        ))
                }

                {this.props.extra}
            </SimpleNavbarClass>
        );
    }
}

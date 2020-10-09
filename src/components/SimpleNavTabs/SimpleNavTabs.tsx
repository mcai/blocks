import {Component} from "react";
import {Nav} from "react-bootstrap";
import React from "react";
import {SimpleNavTabsProps} from "./SimpleNavTabsProps";

export class SimpleNavTabs extends Component<SimpleNavTabsProps, any> {
    render() {
        return (
            <Nav variant={"tabs"}>
                {
                    this.props.options.map(option => (
                            <Nav.Item>
                                <Nav.Link
                                    active={option.value == this.state.value}
                                    onSelect={() => {
                                        this.props.onChange?.(option.value);
                                    }}
                                >
                                    {option.text}
                                </Nav.Link>
                            </Nav.Item>
                        )
                    )
                }
            </Nav>
        );
    }
}

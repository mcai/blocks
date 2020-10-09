import {Component} from "react";
import {Nav} from "react-bootstrap";
import React from "react";
import {SimpleTabsProps} from "./SimpleTabsProps";

export class SimpleTabs extends Component<SimpleTabsProps, any> {
    render() {
        return (
            <Nav variant={"tabs"}>
                {
                    this.props.options.map(option => (
                            <Nav.Item>
                                <Nav.Link
                                    active={option.value == this.props.value}
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

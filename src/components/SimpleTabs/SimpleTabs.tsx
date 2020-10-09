import {Component} from "react";
import {Nav} from "react-bootstrap";
import React from "react";
import {SimpleTabsProps} from "./SimpleTabsProps";

export class SimpleTabs extends Component<SimpleTabsProps, any> {
    render() {
        return (
            <Nav variant={"tabs"} defaultActiveKey={this.props.value == undefined ? "" : this.props.value}>
                {
                    this.props.options.map(option => (
                            <Nav.Item>
                                <Nav.Link
                                    eventKey={option.value == undefined ? "" : option.value}
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

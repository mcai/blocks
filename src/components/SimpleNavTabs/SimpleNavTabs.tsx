import {Component} from "react";
import {Nav} from "react-bootstrap";
import React from "react";
import {SimpleNavTabsProps} from "./SimpleNavTabsProps";
import {SimpleNavTabsState} from "./SimpleNavTabsState";

export class SimpleNavTabs extends Component<SimpleNavTabsProps, SimpleNavTabsState> {
    constructor(props: SimpleNavTabsProps) {
        super(props);

        this.state = {
            value: this.props.value
        }
    }

    render() {
        return (
            <Nav variant={"tabs"}>
                {
                    this.props.options.map(option => (
                            <Nav.Item>
                                <Nav.Link
                                    active={option.value == this.state.value}
                                    onSelect={() => {
                                        this.setState({
                                            value: option.value
                                        });

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

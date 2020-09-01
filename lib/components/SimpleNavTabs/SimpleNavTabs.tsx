import {Component} from "react";
import {Badge, Nav} from "react-bootstrap";
import React from "react";
import {SimpleNavTabsProps} from "./SimpleNavTabsProps";
import {SimpleNavTabsItem} from "./SimpleNavTabsItem";
import {SimpleNavTabsState} from "./SimpleNavTabsState";

export class SimpleNavTabs extends Component<SimpleNavTabsProps, SimpleNavTabsState> {
    constructor(props: SimpleNavTabsProps) {
        super(props);

        this.state = {
            items: this.props.items
        }
    }

    render() {
        return (
            <Nav variant={"tabs"}>
                {
                    this.state.items.map(item => <Nav.Item>
                        <Nav.Link active={item.active} href={item.href} onSelect={() => this.setActive(item)}>
                            {item.text}

                            {
                                item.badgeText.text != "" && (
                                    item.badgeText.visible
                                        ? <Badge variant={"primary"}>{item.badgeText.text}</Badge>
                                        : <span>{item.badgeText.text}</span>
                                )
                            }
                        </Nav.Link>
                    </Nav.Item>)
                }
            </Nav>
        );
    }

    private setActive(item: SimpleNavTabsItem) {
        item.onClick();
        this.state.items.forEach(x => x.active = x == item);
    }
}

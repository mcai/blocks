import React, {Component} from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {SimpleNavbarProps} from "./SimpleNavbarProps";

export class SimpleNavbar extends Component<SimpleNavbarProps, any> {
    constructor(props: SimpleNavbarProps) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="primary" variant="dark" className={"mb-3"}>
                <Navbar.Brand href={this.props.brand.href}>{this.props.brand.title}</Navbar.Brand>
                <Nav className="mr-auto mr-3">
                    {
                        this.props.sections
                            .filter(section => section.visible == undefined || section.visible)
                            .map(section => (
                                <NavDropdown title={section.title} id={section.id}>
                                    {
                                        section.items
                                            .filter(item => item.visible == undefined || item.visible)
                                            .map(item => (
                                                <NavDropdown.Item
                                                    href={item.href}
                                                    onClick={item.onClick}
                                                    key={item.key}
                                                >
                                                    {item.title}
                                                </NavDropdown.Item>
                                            ))
                                    }
                                </NavDropdown>
                            ))
                    }
                </Nav>
                {this.props.extra}
            </Navbar>
        );
    }
}

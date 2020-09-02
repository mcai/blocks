import React, {Component} from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {SimpleNavbarProps} from "./SimpleNavbarProps";

export class SimpleNavbar extends Component<SimpleNavbarProps, any> {
    constructor(props: SimpleNavbarProps) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href={this.props.brand.href}>{this.props.brand.title}</Navbar.Brand>
                <Nav className="mr-auto">
                    {
                        this.props.sections.map(section => (
                            <NavDropdown title={section.title} id={section.id}>
                                {
                                    section.items.map(item => (
                                        <NavDropdown.Item
                                            href={item.href}
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
            </Navbar>
        );
    }
}

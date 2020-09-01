import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
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
                        this.props.links.map(link => (
                            <Nav.Link href={link.href}>{link.title}</Nav.Link>
                        ))
                    }
                </Nav>
            </Navbar>
        );
    }
}

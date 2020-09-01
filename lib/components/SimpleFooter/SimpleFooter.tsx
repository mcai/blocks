import React, {Component} from "react";
import {FooterProps} from "./FooterProps";
import {Container} from "react-bootstrap";

export class SimpleFooter extends Component<FooterProps, any> {
    render(): React.ReactNode {
        return (
            <footer>
                <Container>
                    <div className="row h-100 justify-content-center align-items-center">
                        <p>{this.props.brand.title} - {this.props.brand.href} {this.props.extra}</p>
                    </div>
                </Container>
            </footer>
        );
    }
}

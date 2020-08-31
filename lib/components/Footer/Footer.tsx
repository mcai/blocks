import React, {Component} from "react";
import {FooterProps} from "./FooterProps";
import {FooterState} from "./FooterState";
import {Container} from "react-bootstrap";

export class Footer extends Component<FooterProps, FooterState> {
    render(): React.ReactNode {
        return (
            <footer>
                <Container>
                    <div className="row h-100 justify-content-center align-items-center">
                        <p>{this.props.siteName} - {this.props.siteUrl} {this.props.extra}</p>
                    </div>
                </Container>
            </footer>
        );
    }
}

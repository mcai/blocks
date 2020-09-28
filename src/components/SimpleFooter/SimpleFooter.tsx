import React, {Component} from "react";
import {SimpleFooterProps} from "./SimpleFooterProps";
import {Container} from "react-bootstrap";

export class SimpleFooter extends Component<SimpleFooterProps, any> {
    render(): React.ReactNode {
        return (
            <footer>
                <Container>
                    <div className="row h-100 justify-content-center align-items-center">
                        <p>
                            {this.props.brand.title}

                            {
                                this.props.brand.href && <span>- {this.props.brand.href}</span>
                            }

                            {this.props.extra}
                        </p>
                    </div>
                </Container>
            </footer>
        );
    }
}

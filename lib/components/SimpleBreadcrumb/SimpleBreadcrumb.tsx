import React, {Component} from "react";
import {Breadcrumb} from "react-bootstrap";
import {SimpleBreadcrumbProps} from "./SimpleBreadcrumbProps";

export class SimpleBreadcrumb extends Component<SimpleBreadcrumbProps, any> {
    render() {
        return (
            <Breadcrumb>
                {
                    this.props.items.map(item => (
                        <Breadcrumb.Item href={item.href} active={item.active}>
                            {item.title}
                        </Breadcrumb.Item>
                    ))
                }
            </Breadcrumb>
        );
    }
}

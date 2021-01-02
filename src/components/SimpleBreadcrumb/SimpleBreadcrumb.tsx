import React, { Component, Fragment } from "react";
import { SimpleBreadcrumbProps } from "./SimpleBreadcrumbProps";

export class SimpleBreadcrumb extends Component<SimpleBreadcrumbProps, any> {
    render() {
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {this.props.items.map((item) => (
                        <Fragment key={item.key}>
                            {!item.active && (
                                <li className="breadcrumb-item">
                                    <a href={item.href}>{item.title}</a>
                                </li>
                            )}

                            {item.active && (
                                <li className="breadcrumb-item active" aria-current="page">
                                    {item.title}
                                </li>
                            )}
                        </Fragment>
                    ))}
                </ol>
            </nav>
        );
    }
}

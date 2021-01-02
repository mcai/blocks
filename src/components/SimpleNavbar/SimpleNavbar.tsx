import React, { Component } from "react";
import { SimpleNavbarProps } from "./SimpleNavbarProps";

export class SimpleNavbar extends Component<SimpleNavbarProps, any> {
    render() {
        const sectionsFunc = (rightAligned: boolean) =>
            this.props.sections
                .filter(
                    (section) =>
                        (section.visible === undefined || section.visible) &&
                        (section.rightAligned !== undefined && section.rightAligned) === rightAligned,
                )
                .map((section) => {
                    return (
                        <li key={section.id} className="nav-item active dropdown">
                            <span
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                {section.title}
                            </span>
                            <div className="dropdown-menu">
                                {section.items
                                    .filter((item) => item.visible === undefined || item.visible)
                                    .map((item) =>
                                        item.href ? (
                                            <a className="dropdown-item" href={item.href} key={item.key}>
                                                {item.title}
                                            </a>
                                        ) : (
                                            <button
                                                className="dropdown-item"
                                                onClick={() => item.onClick?.()}
                                                key={item.key}
                                            >
                                                {item.title}
                                            </button>
                                        ),
                                    )}
                            </div>
                        </li>
                    );
                });

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <a className="navbar-brand" href={this.props.brand.href}>
                    {this.props.brand.title}
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav">{sectionsFunc(false)}</ul>
                    <ul className="navbar-nav ml-auto">{sectionsFunc(true)}</ul>
                </div>

                {this.props.extra}
            </nav>
        );
    }
}

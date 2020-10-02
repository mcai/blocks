import React, {Component} from "react";
import {SimpleNavbarProps} from "./SimpleNavbarProps";

export class SimpleNavbar extends Component<SimpleNavbarProps, any> {
    render() {
        return (
            <ul className="simple-navbar">
                <li className="simple-navbar-brand">
                    <a className="simple-navbar-brand-item" href={this.props.brand.href}>{this.props.brand.title}</a>
                </li>

                {
                    this.props.sections
                        .filter(section => section.visible === undefined || section.visible)
                        .map(section => {
                            return (
                                <li className="simple-nav-dropdown" key={section.id} style={{
                                    float: section.rightAligned ? "right" : "left"
                                }}>
                                    <div className="simple-dropdown-item">
                                        {section.title}
                                    </div>
                                    <div className="simple-dropdown-content">
                                        {
                                            section.items
                                                .filter(item => item.visible === undefined || item.visible)
                                                .map(item => (
                                                    <a className="simple-dropdown-content-item"
                                                        href={item.href}
                                                        onClick={item.onClick}
                                                        key={item.key}
                                                    >
                                                        {item.title}
                                                    </a>
                                                ))
                                        }
                                    </div>
                                </li>
                            );
                        })
                }

                {this.props.extra}
            </ul>
        );
    }
}

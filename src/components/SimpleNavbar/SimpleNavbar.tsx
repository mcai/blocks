import React, {Component} from "react";
import {SimpleNavbarProps} from "./SimpleNavbarProps";

import "./SimpleNavbar.scss";

export class SimpleNavbar extends Component<SimpleNavbarProps, any> {
    render() {
        return (
            <ul className={"SimpleNavbar"}>
                <li className={"SimpleNavbarBrand"}>
                    <a className={"SimpleNavbarBrandItem"} href={this.props.brand.href}>{this.props.brand.title}</a>
                </li>

                {
                    this.props.sections
                        .filter(section => section.visible === undefined || section.visible)
                        .map(section => {
                            return (
                                <li className={"SimpleNavDropdown"} key={section.id} style={{
                                    float: section.rightAligned ? "right" : "left"
                                }}>
                                    <div className={"SimpleNavDropDownItem"}>
                                        {section.title}
                                    </div>
                                    <div className={"SimpleDropDownContent"}>
                                        {
                                            section.items
                                                .filter(item => item.visible === undefined || item.visible)
                                                .map(item => (
                                                    <a className={"SimpleDropDownContentItem"}
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

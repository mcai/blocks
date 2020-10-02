import React, {Component} from "react";
import {SimpleNavbarProps} from "./SimpleNavbarProps";

import "./SimpleNavbar.scss";

function SimpleNavbarClass(props: any) {
    return (
        <ul className={"SimpleNavbar"}>
            {props.children}
        </ul>
    );
}

function SimpleNavbarBrandClass(props: any) {
    return (
        <li className={"SimpleNavbarBrand"}>
            {props.children}
        </li>
    );
}

class SimpleNavDropDownItemClass extends Component<any> {
    render() {
        return (
            <div className={"SimpleNavDropDownItem"}>
                {this.props.children}
            </div>
        );
    }
}

function SimpleDropDownContentClass(props: any) {
    return (
        <div className={"SimpleDropDownContent"}>
            {props.children}
        </div>
    );
}

function SimpleNavDropdownClass(props: any) {
    return (
        <li className={"SimpleNavDropdown"}>
            {props.children}
        </li>
    );
}

function SimpleNavbarBrandItemClass(props: any) {
    return (
        <a className={"SimpleNavbarBrandItem"}>
            {props.children}
        </a>
    );
}

function SimpleDropDownContentItemClass(props: any) {
    return (
        <a className={"SimpleDropDownContentItem"}>
            {props.children}
        </a>
    );
}

export class SimpleNavbar extends Component<SimpleNavbarProps, any> {
    render() {
        return (
            <SimpleNavbarClass>
                <SimpleNavbarBrandClass>
                    <SimpleNavbarBrandItemClass href={this.props.brand.href}>{this.props.brand.title}</SimpleNavbarBrandItemClass>
                </SimpleNavbarBrandClass>

                {
                    this.props.sections
                        .filter(section => section.visible === undefined || section.visible)
                        .map(section => {
                            return (
                                <SimpleNavDropdownClass key={section.id} style={{
                                    float: section.rightAligned ? "right" : "left"
                                }}>
                                    <SimpleNavDropDownItemClass>
                                        {section.title}
                                    </SimpleNavDropDownItemClass>
                                    <SimpleDropDownContentClass>
                                        {
                                            section.items
                                                .filter(item => item.visible === undefined || item.visible)
                                                .map(item => (
                                                    <SimpleDropDownContentItemClass
                                                        href={item.href}
                                                        onClick={item.onClick}
                                                        key={item.key}
                                                    >
                                                        {item.title}
                                                    </SimpleDropDownContentItemClass>
                                                ))
                                        }
                                    </SimpleDropDownContentClass>
                                </SimpleNavDropdownClass>
                            );
                        })
                }

                {this.props.extra}
            </SimpleNavbarClass>
        );
    }
}

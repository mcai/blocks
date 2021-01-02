import React, { Component, Fragment } from "react";
import { SimpleButtonBarProps } from "./SimpleButtonBarProps";

export class SimpleButtonBar extends Component<SimpleButtonBarProps, any> {
    render() {
        return (
            <Fragment>
                {this.props.items.map((item) => (
                    <Fragment key={item.key}>
                        {item.href ? (
                            <a className="btn btn-primary mr-3" href={item.href}>
                                {item.title}
                            </a>
                        ) : (
                            <button className="btn btn-primary mr-3" onClick={() => item.onClick?.()}>
                                {item.title}
                            </button>
                        )}
                    </Fragment>
                ))}
            </Fragment>
        );
    }
}

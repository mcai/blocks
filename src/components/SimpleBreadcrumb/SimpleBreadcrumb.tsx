import React, {Component, Fragment} from "react";
import {SimpleBreadcrumbProps} from "./SimpleBreadcrumbProps";

export class SimpleBreadcrumb extends Component<SimpleBreadcrumbProps, any> {
    render() {
        return (
            <div className="simple-row">
                <div className="simple-left">
                    {
                        this.props.items.map((item, index) => (
                            <Fragment key={item.key}>
                                {
                                    !item.active && <a href={item.href}>{item.title}</a>
                                }

                                {
                                    item.active && item.title
                                }

                                {
                                    index !== this.props.items.length - 1 ? " / " : ""
                                }
                            </Fragment>
                        ))
                    }
                </div>
                <div className="simple-center">
                    &nbsp;&nbsp;
                </div>
            </div>
        );
    }
}

import React, {Component, Fragment} from "react";
import {SimpleBreadcrumbProps} from "./SimpleBreadcrumbProps";
import {SimpleRow} from "../../styles/SimpleRow/SimpleRow";
import {SimpleContainer} from "../../styles/SimpleTheme/SimpleTheme";

export class SimpleBreadcrumb extends Component<SimpleBreadcrumbProps, any> {
    render() {
        return (
            <SimpleContainer>
                <SimpleRow left={
                    this.props.items.map((item, index) => (
                        <Fragment key={item.key}>
                            {
                                !item.active && <a href={item.href}>{item.title}</a>
                            }

                            {
                                item.active && item.title
                            }

                            {
                                index != this.props.items.length - 1 ? " / " : ""
                            }
                        </Fragment>
                    ))
                }/>
            </SimpleContainer>
        );
    }
}

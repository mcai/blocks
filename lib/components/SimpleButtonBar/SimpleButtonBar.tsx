import React, {Component, Fragment} from "react";
import {Button} from "react-bootstrap";
import {SimpleButtonBarProps} from "./SimpleButtonBarProps";

export class SimpleButtonBar extends Component<SimpleButtonBarProps, any> {
    render() {
        return (
            <Fragment>
                {
                    this.props.items.map(item => (
                        <Button variant="primary" href={item.href} onClick={() => item.onClick?.()} className={"ml-3"}>{item.title}</Button>
                    ))
                }
            </Fragment>
        );
    }
}

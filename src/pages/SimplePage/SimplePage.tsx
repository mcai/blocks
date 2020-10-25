import React, { Component, Fragment } from "react";
import { SimplePageProps } from "./SimplePageProps";
import { SimplePageState } from "./SimplePageState";
import { SimpleBreadcrumb } from "../../components/SimpleBreadcrumb/SimpleBreadcrumb";

export class SimplePage extends Component<SimplePageProps, SimplePageState> {
    constructor(props: SimplePageProps) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <SimpleBreadcrumb items={this.props.breadCrumbItems ?? []} />

                {this.props.children}
            </Fragment>
        );
    }
}

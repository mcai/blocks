import React, { Component, Fragment } from "react";
import { SimpleReferenceFieldContainerProps } from "./SimpleReferenceFieldContainerProps";
import { SimpleReferenceFieldContainerState } from "./SimpleReferenceFieldContainerState";

export class SimpleReferenceFieldContainer extends Component<
    SimpleReferenceFieldContainerProps,
    SimpleReferenceFieldContainerState
> {
    constructor(props: SimpleReferenceFieldContainerProps) {
        super(props);

        this.state = {
            options: undefined,
        };
    }

    async componentDidMount() {
        const items = await this.props.dataProvider.all(this.props.resource, this.props.action, {
            ordering: this.props.ordering,
            filter: this.props.filter,
        });

        this.setState({
            options: items?.map((item) => this.props.toOptionFunc(item)),
        });
    }

    render() {
        return (
            <Fragment>
                {React.Children.map(this.props.children, (input) =>
                    React.isValidElement(input)
                        ? React.cloneElement(input, {
                              options: this.state.options,
                              values: this.props.values,
                              title: this.props.title,
                          })
                        : input,
                )}
            </Fragment>
        );
    }
}

import React, { Component, Fragment } from "react";
import { SimpleReferenceContainerProps } from "./SimpleReferenceContainerProps";
import { SimpleReferenceContainerState } from "./SimpleReferenceContainerState";

export class SimpleReferenceContainer extends Component<SimpleReferenceContainerProps, SimpleReferenceContainerState> {
    constructor(props: SimpleReferenceContainerProps) {
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

    onUpdate(name: string, value: any) {
        this.props.onUpdate?.(name, value);
    }

    render() {
        return (
            <Fragment>
                {React.Children.map(this.props.children, (input) =>
                    React.isValidElement(input)
                        ? React.cloneElement(input, {
                              values: this.props.values,
                              options: this.state.options,
                              onUpdate: (name: string, value: any) => {
                                  this.onUpdate(name, value);
                              },
                          })
                        : input,
                )}
            </Fragment>
        );
    }
}

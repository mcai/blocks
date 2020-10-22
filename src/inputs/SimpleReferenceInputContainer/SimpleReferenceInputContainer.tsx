import React, { Component, Fragment } from "react";
import { SimpleReferenceInputContainerProps } from "./SimpleReferenceInputContainerProps";
import { SimpleReferenceInputContainerState } from "./SimpleReferenceInputContainerState";

export class SimpleReferenceInputContainer extends Component<
    SimpleReferenceInputContainerProps,
    SimpleReferenceInputContainerState
> {
    constructor(props: SimpleReferenceInputContainerProps) {
        super(props);

        this.state = {
            options: undefined,
        };
    }

    async componentDidMount() {
        const result = await this.props.dataProvider.getAll(this.props.resource, this.props.action, {
            ordering: this.props.ordering,
            filter: this.props.filter,
        });

        this.setState({
            options: result.data.map((item) => this.props.toOptionFunc(item)),
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
                              options: this.state.options,
                              values: this.props.values,
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

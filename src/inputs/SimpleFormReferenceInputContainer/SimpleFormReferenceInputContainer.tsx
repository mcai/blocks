import React, { Component, Fragment } from "react";
import { SimpleFormReferenceInputContainerProps } from "./SimpleFormReferenceInputContainerProps";
import { SimpleFormReferenceInputContainerState } from "./SimpleFormReferenceInputContainerState";

export class SimpleFormReferenceInputContainer extends Component<
    SimpleFormReferenceInputContainerProps,
    SimpleFormReferenceInputContainerState
> {
    constructor(props: SimpleFormReferenceInputContainerProps) {
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

        console.log(`SimpleFormReferenceInputContainer.onUpdate: name=${name}, value=${value}`);
    }

    render() {
        console.log(`SimpleFormReferenceInputContainer.render: this.props.values=${JSON.stringify(this.props.values)}`);

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

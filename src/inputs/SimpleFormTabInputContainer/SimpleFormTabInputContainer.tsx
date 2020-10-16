import React, { Component, Fragment } from "react";
import { SimpleFormTabInputContainerProps } from "./SimpleFormTabInputContainerProps";
import { SimpleTabs } from "../../components/SimpleTabs/SimpleTabs";
import { SimpleFormTabInputContainerState } from "./SimpleFormTabInputContainerState";

export class SimpleFormTabInputContainer extends Component<
    SimpleFormTabInputContainerProps,
    SimpleFormTabInputContainerState
> {
    constructor(props: SimpleFormTabInputContainerProps) {
        super(props);

        this.state = {
            selectedTabKey: this.props.selectedTabKey,
        };
    }

    onUpdate(name: string, value: any) {
        this.props.onUpdate?.(name, value);

        console.log(`SimpleFormTabInputContainer.onUpdate: name=${name}, value=${value}`);
    }

    render() {
        console.log(`SimpleFormTabInputContainer.render: this.props.values=${JSON.stringify(this.props.values)}`);

        return (
            <Fragment>
                <SimpleTabs
                    options={this.props.tabs.map((tab, index) => ({
                        key: `${tab.key}`,
                        text: tab.description,
                        value: tab.key,
                    }))}
                    value={this.state.selectedTabKey}
                    onChange={(value) =>
                        this.setState({
                            selectedTabKey: value,
                        })
                    }
                />

                {this.props.tabs.map(
                    (tab) =>
                        tab.key == this.state.selectedTabKey && (
                            <Fragment>
                                {tab.inputs.map((input) =>
                                    React.isValidElement(input)
                                        ? React.cloneElement(input, {
                                              values: this.props.values,
                                              onUpdate: (name: string, value: any) => {
                                                  this.onUpdate(name, value);
                                              },
                                              readOnly: input.props.readOnly || this.props.readOnly,
                                          })
                                        : input,
                                )}
                            </Fragment>
                        ),
                )}
            </Fragment>
        );
    }
}

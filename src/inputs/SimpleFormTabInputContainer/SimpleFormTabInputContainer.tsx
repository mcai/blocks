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
            selectedTabName: this.props.selectedTabName,
        };
    }

    onUpdate(tabName: any, name: string, value: any) {
        const values = this.props.values?.[tabName ?? ""] ?? {};

        values[name] = value;

        this.props.onUpdate?.(tabName, values);

        console.log(`SimpleFormTabInputContainer.onUpdate: tabName=${tabName}, name=${name}, value=${value}`);
    }

    render() {
        console.log(`SimpleFormTabInputContainer.render: this.props.values=${JSON.stringify(this.props.values)}`);

        return (
            <Fragment>
                <SimpleTabs
                    options={this.props.tabs.map((tab) => ({
                        key: `${tab.name}`,
                        text: tab.description,
                        value: tab.name,
                    }))}
                    value={this.state.selectedTabName}
                    onChange={(value) =>
                        this.setState({
                            selectedTabName: value,
                        })
                    }
                />

                {this.props.tabs.map(
                    (tab) =>
                        tab.name == this.state.selectedTabName && (
                            <Fragment>
                                {tab.inputs.map((input) =>
                                    React.isValidElement(input)
                                        ? React.cloneElement(input, {
                                              values: this.props.values?.[tab.name],
                                              onUpdate: (name: string, value: any) => {
                                                  this.onUpdate(tab.name, name, value);
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

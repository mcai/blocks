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
            selectedTabId: this.props.selectedTabId,
        };
    }

    onUpdate(tabId: any, name: string, value: any) {
        const values = this.props.values?.[tabId ?? ""] ?? {};

        values[name] = value;

        this.props.onUpdate?.(tabId, values);

        console.log(`SimpleFormTabInput.onUpdate: tabId=${tabId}, name=${name}, value=${value}`);
    }

    render() {
        console.log(`SimpleFormTabInput.render: this.props.values=${JSON.stringify(this.props.values)}`);

        return (
            <Fragment>
                <SimpleTabs
                    options={this.props.tabs.map((tab) => ({
                        key: `${tab.id}`,
                        text: tab.description,
                        value: tab.id,
                    }))}
                    value={this.state.selectedTabId}
                    onChange={(value) =>
                        this.setState({
                            selectedTabId: value,
                        })
                    }
                />

                {this.props.tabs.map(
                    (tab) =>
                        tab.id == this.state.selectedTabId && (
                            <Fragment>
                                {tab.inputs.map((input) =>
                                    React.isValidElement(input)
                                        ? React.cloneElement(input, {
                                              values: this.props.values?.[tab.id],
                                              onUpdate: (name: string, value: any) => {
                                                  this.onUpdate(tab.id, name, value);
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

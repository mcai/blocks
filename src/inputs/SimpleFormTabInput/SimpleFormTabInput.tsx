import React, { Component, Fragment } from "react";
import { SimpleFormTabInputProps } from "./SimpleFormTabInputProps";
import { SimpleTabs } from "../../components/SimpleTabs/SimpleTabs";
import { SimpleFormTabInputState } from "./SimpleFormTabInputState";

export class SimpleFormTabInput extends Component<SimpleFormTabInputProps, SimpleFormTabInputState> {
    constructor(props: SimpleFormTabInputProps) {
        super(props);

        this.state = {
            selectedTabId: this.props.selectedTabId,
        };
    }

    onUpdate(tabId: any, name: string, value: any) {
        const values = this.props.values?.[this.props.name ?? ""] ?? {};

        if (values[tabId] == undefined) {
            values[tabId] = {};
        }

        values[tabId][name] = value;

        this.props.onUpdate?.(this.props.name ?? "", values);

        console.log(`SimpleFormTabInput.onUpdate: tabId=${tabId}, name=${name}, value=${value}`);
    }

    render() {
        console.log(
            `SimpleFormTabInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(
                this.props.values,
            )}, value=${this.props.values?.[this.props.name ?? ""]}`,
        );

        return (
            <Fragment>
                <div className="simple-row">
                    <span className="simple-input-label">{this.props.label}: </span>
                </div>

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
                                              values: this.props.values?.[this.props.name ?? ""]?.[tab.id],
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

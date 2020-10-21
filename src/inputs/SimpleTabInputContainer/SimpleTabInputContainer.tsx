import React, { Component, Fragment } from "react";
import { SimpleTabInputContainerProps } from "./SimpleTabInputContainerProps";
import { SimpleTabs } from "../../components/SimpleTabs/SimpleTabs";
import { SimpleTabInputContainerState } from "./SimpleTabInputContainerState";

export class SimpleTabInputContainer extends Component<SimpleTabInputContainerProps, SimpleTabInputContainerState> {
    constructor(props: SimpleTabInputContainerProps) {
        super(props);

        this.state = {
            selectedTabKey: this.props.selectedTabKey,
        };
    }

    onUpdate(name: string, value: any) {
        this.props.onUpdate?.(name, value);
    }

    render() {
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
                                              readOnly: (values: any) =>
                                                  (input.props.readOnly !== undefined &&
                                                      input.props.readOnly?.(values)) ||
                                                  (this.props.readOnly !== undefined &&
                                                      this.props.readOnly?.(values)) ||
                                                  false,
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

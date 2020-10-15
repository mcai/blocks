import React, { Fragment } from "react";
import { SimpleListItemProps } from "./SimpleListItemProps";

export class SimpleListItem extends React.Component<SimpleListItemProps, any> {
    onUpdate(name: string, value: any) {
        this.props.onUpdate?.(this.props.index, name, value);

        console.log(`SimpleListItem.onUpdate: index=${this.props.index}, name=${name}, value=${value}`);
    }

    render() {
        const values: any = {};

        Object.keys(this.props.values).forEach((name) => {
            const value = this.props.values[name];
            values[name] = typeof value === "function" ? value(values) : value;
        });

        return (
            <Fragment>
                <div className="simple-section">
                    <div className="simple-left">
                        {this.props.index + 1}. {this.props.description}
                        &nbsp;
                        {this.props.readOnly === undefined || !this.props.readOnly ? (
                            <button
                                className="simple-button"
                                type="button"
                                onClick={() => this.props.onRemove?.(this.props.index)}
                            >
                                删除
                            </button>
                        ) : (
                            <span>&nbsp;</span>
                        )}
                    </div>
                    <div className="simple-center">&nbsp;&nbsp;</div>
                </div>

                <div className="simple-section">
                    {React.Children.map(this.props.inputs, (input) =>
                        React.isValidElement(input)
                            ? React.cloneElement(input, {
                                  values: values,
                                  onUpdate: (name: string, value: any) => {
                                      this.onUpdate(name, value);
                                  },
                                  readOnly: input.props.readOnly || this.props.readOnly,
                              })
                            : input,
                    )}
                </div>
            </Fragment>
        );
    }
}

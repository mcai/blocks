import React, { Fragment } from "react";
import { SimpleListItemProps } from "./SimpleListItemProps";

export class SimpleListItem extends React.Component<SimpleListItemProps, any> {
    onUpdate(name: string, value: any) {
        this.props.onUpdate?.(this.props.index, name, value);

        console.log(`SimpleListItem.onUpdate: index=${this.props.index}, name=${name}, value=${value}`);
    }

    render() {
        const values = { ...this.props.item.values };

        for (const name in Object.keys(values)) {
            const value = values[name];

            if (typeof value === "function") {
                values[name] = value(values);
            }
        }

        return (
            <Fragment>
                <div className="simple-row">
                    <b className="simple-section-label">
                        {this.props.index + 1}. {this.props.item.description}
                    </b>

                    <div className="simple-section-items">
                        {this.props.readonly === undefined || !this.props.readonly ? (
                            <button className="simple-button" onClick={() => this.props.onRemove?.(this.props.index)}>
                                删除
                            </button>
                        ) : (
                            <span>&nbsp;</span>
                        )}
                    </div>
                </div>

                {Object.keys(this.props.item.inputs).map((name) => {
                    const input = this.props.item.inputs[name];

                    return React.isValidElement(input)
                        ? React.cloneElement(input, {
                              key: name,
                              name: name,
                              values: values,
                              onUpdate: (name: string, value: any) => {
                                  this.onUpdate(name, value);
                              },
                              readonly: input.props.readonly || this.props.readonly,
                          })
                        : input;
                })}
            </Fragment>
        );
    }
}

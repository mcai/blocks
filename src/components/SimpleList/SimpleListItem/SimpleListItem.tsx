import React, { Fragment } from "react";
import { SimpleListItemProps } from "./SimpleListItemProps";

export class SimpleListItem extends React.Component<SimpleListItemProps, any> {
    onUpdate(key: string, value: any) {
        this.props.onUpdate?.(this.props.index, key, value);

        console.log(`SimpleListItem.onUpdate: index=${this.props.index}, key=${key}, value=${value}`);
    }

    render() {
        const keyValueArray = Object.keys(this.props.item.fields).map((key) => ({
            key: key,
            value: this.props.item.fields[key].value,
        }));

        const values: any = {};

        keyValueArray.forEach((pair: { key: string; value?: any }) => {
            values[pair.key] = pair.value;
        });

        keyValueArray.forEach((pair: { key: string; value?: any }) => {
            const value = pair.value;

            if (typeof value === "function") {
                values[pair.key] = value(values);
            }
        });

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

                {Object.keys(this.props.item.fields).map((key) => {
                    const input = this.props.item.fields[key].input;

                    return React.isValidElement(input)
                        ? React.cloneElement(input, {
                              key: key,
                              name: key,
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

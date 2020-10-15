import React, { Fragment } from "react";
import { SimpleListItemProps } from "./SimpleListItemProps";

export class SimpleListItem extends React.Component<SimpleListItemProps, any> {
    onUpdate(name: string, value: any) {
        this.props.onUpdate?.(this.props.index, name, value);

        console.log(`SimpleListItem.onUpdate: index=${this.props.index}, name=${name}, value=${value}`);
    }

    render() {
        const nameValueArray = Object.keys(this.props.item.fields).map((name) => ({
            name: name,
            value: this.props.item.fields[name].value,
        }));

        const values: any = {};

        nameValueArray.forEach((pair: { name: string; value?: any }) => {
            values[pair.name] = pair.value;
        });

        nameValueArray.forEach((pair: { name: string; value?: any }) => {
            const value = pair.value;

            if (typeof value === "function") {
                values[pair.name] = value(values);
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

                {Object.keys(this.props.item.fields).map((name) => {
                    const input = this.props.item.fields[name].input;

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

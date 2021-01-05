import React, { Fragment } from "react";
import { SimpleListItemProps } from "./SimpleListItemProps";

export class SimpleListItem extends React.Component<SimpleListItemProps, any> {
    onUpdate(name: string, value: any) {
        this.props.onUpdate?.(this.props.index, name, value);

        console.debug(`SimpleListItem.onUpdate: index=${this.props.index}, name=${name}, value=${value}`);
    }

    render() {
        const values: any = {};

        Object.keys(this.props.values).forEach((name) => {
            const value = this.props.values[name];
            values[name] = typeof value === "function" ? value(values) : value;
        });

        const readOnly = this.props.readOnly !== undefined && this.props.readOnly;

        const props = {
            values: values,
            onUpdate: (name: string, value: any) => {
                this.onUpdate(name, value);
            },
            readOnly: () => readOnly,
        };

        const input = this.props.inputFunc?.(props);

        return (
            <Fragment>
                <div className="mt-2">
                    <span>
                        {this.props.index + 1}. {this.props.description}
                    </span>

                    {!readOnly && (
                        <button
                            className="btn btn-danger ml-2"
                            type="button"
                            onClick={() => this.props.onRemove?.(this.props.index)}
                        >
                            删除
                        </button>
                    )}
                </div>

                <div className="mt-2">{React.isValidElement(input) ? React.cloneElement(input) : input}</div>
            </Fragment>
        );
    }
}

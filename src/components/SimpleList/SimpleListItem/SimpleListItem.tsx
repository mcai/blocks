import React, { Fragment } from "react";
import { SimpleListItemProps } from "./SimpleListItemProps";
import { Button } from "react-bootstrap";

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

        const readOnly = this.props.readOnly !== undefined && !this.props.readOnly;

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
                <div className="simple-section">
                    <div className="simple-left">
                        {this.props.index + 1}. {this.props.description}
                        &nbsp;
                        {!readOnly ? (
                            <Button
                                variant={"danger"}
                                type="button"
                                onClick={() => this.props.onRemove?.(this.props.index)}
                            >
                                删除
                            </Button>
                        ) : (
                            <span>&nbsp;</span>
                        )}
                    </div>
                    <div className="simple-center">&nbsp;&nbsp;</div>
                </div>

                <div className="simple-section">{React.isValidElement(input) ? React.cloneElement(input) : input}</div>
            </Fragment>
        );
    }
}

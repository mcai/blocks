import React, { Fragment } from "react";
import {SimpleListItemProps} from "./SimpleListItemProps";

export class SimpleListItem extends React.Component<SimpleListItemProps, any> {
    onUpdate(key: string, value: any) {
        this.props.onUpdate(this.props.index, key, value);

        console.log(`SimpleListItem.onUpdate: index=${this.props.index}, key=${key}, value=${value}`);
    }

    render() {
        return (
            <Fragment>
                <div className="simple-row">
                    <b className="simple-input-label">
                        {this.props.index + 1}. {this.props.item.description}
                    </b>

                    <div className="simple-input">
                        <button
                            className="simple-button"
                            onClick={() => this.props.onRemove(this.props.index)}
                        >
                            删除
                        </button>
                    </div>
                </div>

                {
                    Object.keys(this.props.item.values).map(key => {
                            let input = this.props.item.values[key].input;

                            return React.isValidElement(input)
                                ? React.cloneElement(input, {
                                    key: key,
                                    name: key,
                                    values: {
                                        key: this.props.item.values[key].value
                                    },
                                    onUpdate: (name: string, value: any) => {
                                        this.onUpdate(name, value);
                                    }
                                })
                                : input;
                        }
                    )
                }
            </Fragment>
        );
    }
}

import React, { Fragment } from "react";
import {SimpleListItemProps} from "./SimpleListItemProps";

export class SimpleListItem extends React.Component<SimpleListItemProps, any> {
    onUpdate(key: string, value: string) {
        this.props.onUpdate(this.props.index, key, value);

        console.log(`SimpleListItem.onUpdate: index=${this.props.index}, key=${key}, value=${value}`);
    }

    render() {
        return (
            <div className="simple-row">
                <b className="simple-input-label">
                    {this.props.index + 1}. {this.props.item.description} {this.props.item.values ? ": " : ""}
                </b>

                <div className="simple-input">
                    {
                        Object.keys(this.props.item.values).map(key =>
                            <Fragment
                                key={key}
                            >
                                <span>{this.props.item.values[key].label}: </span>

                                <input
                                    type="text"
                                    placeholder={this.props.item.values[key].label}
                                    value={this.props.item.values[key].value}
                                    onChange={(e) => this.onUpdate(key, e.target.value)}
                                />

                                &nbsp;&nbsp;
                            </Fragment>
                        )
                    }

                    <button
                        className="simple-button"
                        onClick={() => this.props.onRemove(this.props.index)}
                    >
                        删除
                    </button>
                </div>
            </div>
        );
    }
}

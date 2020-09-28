import React, { Fragment } from "react";
import {SimpleListItemProps} from "./SimpleListItemProps";
import {SimpleRow} from "../../../styles/SimpleRow/SimpleRow";
import {SimpleButton} from "../../../styles/SimpleButton/SimpleButton";

export class SimpleListItem extends React.Component<SimpleListItemProps, any> {
    onUpdate(key: string, value: string) {
        this.props.onUpdate(this.props.index, key, value);

        console.log(`SimpleListItem.onUpdate: index=${this.props.index}, key=${key}, value=${value}`);
    }

    render() {
        return (
            <SimpleRow>
                <b>{this.props.index + 1}. {this.props.item.description} {this.props.item.values ? ": " : ""}</b>

                {
                    Object.keys(this.props.item.values).map(key =>
                        <Fragment
                            key={key}
                        >
                            <span>{key}: </span>

                            <input
                                type="text"
                                placeholder={key}
                                value={this.props.item.values[key]}
                                onChange={(e) => this.onUpdate(key, e.target.value)}
                            />

                            &nbsp;&nbsp;
                        </Fragment>
                    )
                }

                <SimpleButton onClick={() => this.props.onRemove(this.props.index)}>
                    删除
                </SimpleButton>
            </SimpleRow>
        );
    }
}

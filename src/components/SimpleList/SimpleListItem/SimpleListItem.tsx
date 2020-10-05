import React, { Fragment } from "react";
import {SimpleListItemProps} from "./SimpleListItemProps";
import {SimpleFormTextInput} from "../../../forms/SimpleForm/Fields/SimpleFormTextInput/SimpleFormTextInput";

export class SimpleListItem extends React.Component<SimpleListItemProps, any> {
    onUpdate(key: string, value: string) {
        this.props.onUpdate(this.props.index, key, value);

        console.log(`SimpleListItem.onUpdate: index=${this.props.index}, key=${key}, value=${value}`);
    }

    render() {
        return (
            <Fragment>
                <div className="simple-row">
                    <b className="simple-input-label">
                        {this.props.index + 1}. {this.props.item.description} {this.props.item.values ? ": " : ""}
                    </b>

                    <div className="simple-input">
                        &nbsp;
                    </div>
                </div>

                {
                    Object.keys(this.props.item.values).map(key =>
                        <SimpleFormTextInput
                            key={key}
                            label={this.props.item.values[key].label}
                            name={key}
                            placeholder={this.props.item.values[key].label}
                            password={false}
                            values={{
                                key: this.props.item.values[key].value
                            }}
                            onUpdate={((name, value) => {
                                this.onUpdate(key, value);
                            })}
                        />
                    )
                }

                <div className="simple-row">
                    <span className="simple-input-label">&nbsp;</span>

                    <div className="simple-input">
                        <button
                            className="simple-button"
                            onClick={() => this.props.onRemove(this.props.index)}
                        >
                            删除
                        </button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

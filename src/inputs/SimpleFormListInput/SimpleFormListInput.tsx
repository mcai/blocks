import React, { Component, Fragment } from "react";
import { SimpleFormListInputProps } from "./SimpleFormListInputProps";
import { SimpleList } from "../../components/SimpleList/SimpleList";

export class SimpleFormListInput extends Component<SimpleFormListInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);

        console.log(`SimpleFormListInput.onUpdate: name=${this.props.name}, value=${value}`);
    }

    render() {
        console.log(
            `SimpleFormListInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(
                this.props.values,
            )}, value=${this.props.values?.[this.props.name ?? ""]}`,
        );

        return (
            <Fragment>
                <div className="simple-row">
                    <span className="simple-input-label">{this.props.label}: </span>
                </div>

                <SimpleList
                    options={this.props.options}
                    rows={this.props.values?.[this.props.name ?? ""]}
                    onUpdate={(rows?: any) => this.onUpdate(rows)}
                    readOnly={this.props.readOnly !== undefined && this.props.readOnly}
                />
            </Fragment>
        );
    }
}

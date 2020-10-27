import React, { Component, Fragment } from "react";
import { SimpleListInputProps } from "./SimpleListInputProps";
import { SimpleList } from "../../components/SimpleList/SimpleList";

export class SimpleListInput extends Component<SimpleListInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const readOnly = (this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false;

        return (
            <SimpleList
                options={this.props.options}
                rows={this.props.values?.[this.props.name ?? ""]}
                onUpdate={(rows?: any) => this.onUpdate(rows)}
                readOnly={readOnly}
            />
        );
    }
}

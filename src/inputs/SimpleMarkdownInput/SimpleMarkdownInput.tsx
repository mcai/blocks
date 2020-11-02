import React, { Component } from "react";
import { SimpleMarkdownInputProps } from "./SimpleMarkdownInputProps";
import MDEditor from "@uiw/react-md-editor";
import { InputUtils } from "../InputUtils";

export class SimpleMarkdownInput extends Component<SimpleMarkdownInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const visible = this.props.visible === undefined || this.props.visible(this.props.values);
        const readOnly = (this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false;

        const input = (
            <>
                {readOnly ? (
                    <MDEditor.Markdown className="simple-input" source={this.props.values?.[this.props.name ?? ""]} />
                ) : (
                    <MDEditor
                        className="simple-input"
                        value={this.props.values?.[this.props.name ?? ""]}
                        onChange={(value) => this.onUpdate(value)}
                        height={this.props.height != undefined ? this.props.height(this.props.values) : 350}
                    />
                )}
            </>
        );

        return InputUtils.render(this.props.label, input, visible, false);
    }
}

import React, { Component } from "react";
import { SimpleMarkdownInputProps } from "./SimpleMarkdownInputProps";
import MDEditor from "@uiw/react-md-editor";

export class SimpleMarkdownInput extends Component<SimpleMarkdownInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        return (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>

                {this.props.readOnly !== undefined && this.props.readOnly(this.props.values) ? (
                    <MDEditor.Markdown className="simple-input" source={this.props.values?.[this.props.name ?? ""]} />
                ) : (
                    <MDEditor
                        className="simple-input"
                        value={this.props.values?.[this.props.name ?? ""]}
                        onChange={(value) => this.onUpdate(value)}
                        height={this.props.height != undefined ? this.props.height(this.props.values) : 350}
                    />
                )}
            </div>
        );
    }
}

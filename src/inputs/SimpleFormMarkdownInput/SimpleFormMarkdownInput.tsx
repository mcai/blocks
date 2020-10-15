import React, { Component } from "react";
import { SimpleFormMarkdownInputProps } from "./SimpleFormMarkdownInputProps";
import MDEditor from "@uiw/react-md-editor";

export class SimpleFormMarkdownInput extends Component<SimpleFormMarkdownInputProps, any> {
    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);

        console.log(`SimpleFormMarkdownInput.onUpdate: name=${this.props.name}, value=${value}`);
    }

    render() {
        console.log(
            `SimpleFormMarkdownInput.render: name=${this.props.name}, this.props.values=${JSON.stringify(
                this.props.values,
            )}, value=${this.props.values?.[this.props.name ?? ""]}`,
        );

        return (
            <div className="simple-row">
                <span className="simple-input-label">{this.props.label}: </span>

                {this.props.readOnly !== undefined && this.props.readOnly ? (
                    <MDEditor.Markdown className="simple-input" source={this.props.values?.[this.props.name ?? ""]} />
                ) : (
                    <MDEditor
                        className="simple-input"
                        value={this.props.values?.[this.props.name ?? ""]}
                        onChange={(value) => this.onUpdate(value)}
                        height={this.props.height ?? 350}
                    />
                )}
            </div>
        );
    }
}

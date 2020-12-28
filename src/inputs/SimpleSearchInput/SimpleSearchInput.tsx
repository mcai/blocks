import React, { Component } from "react";
import { SimpleSearchInputProps } from "./SimpleSearchInputProps";
import { Button } from "react-bootstrap";
import { SimpleSearchInputState } from "./SimpleSearchInputState";
import { InputUtils } from "../InputUtils";

export class SimpleSearchInput extends Component<SimpleSearchInputProps, SimpleSearchInputState> {
    constructor(props: SimpleSearchInputProps) {
        super(props);

        this.state = {
            value: this.props.values?.[this.props.name ?? ""],
        };
    }

    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const visible = this.props.visible === undefined || this.props.visible(this.props.values);
        const readOnly = (this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false;

        const input = (
            <input
                type="text"
                placeholder={this.props.placeholder}
                value={this.state.value}
                onChange={(e) => {
                    this.setState({
                        value: e.target.value,
                    });
                }}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        this.onUpdate(this.state.value);
                    }
                }}
                readOnly={readOnly}
            />
        );

        const buttonSearch = (
            <Button
                variant={"primary"}
                onClick={() => {
                    this.onUpdate(this.state.value);
                }}
            >
                搜索
            </Button>
        );

        const buttonClear = (
            <Button
                variant={"secondary"}
                onClick={() => {
                    this.setState({
                        value: "",
                    });

                    this.onUpdate("");
                }}
            >
                重置
            </Button>
        );

        return InputUtils.render(
            <div className={this.props.className} style={this.props.style}>
                &nbsp;{input}
                &nbsp;{buttonSearch}
                &nbsp;{buttonClear}
            </div>,
            visible,
        );
    }
}

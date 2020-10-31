import React, { Component, Fragment } from "react";
import { SimpleSearchInputProps } from "./SimpleSearchInputProps";
import { Button } from "react-bootstrap";
import { SimpleSearchInputState } from "./SimpleSearchInputState";

export class SimpleSearchInput extends Component<SimpleSearchInputProps, SimpleSearchInputState> {
    constructor(props: SimpleSearchInputProps) {
        super(props);

        this.state = {};
    }

    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        const visible = this.props.visible === undefined || this.props.visible(this.props.values);
        const readOnly = (this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false;
        const inline = this.props.inline != undefined && this.props.inline;

        const input = (
            <input
                className="simple-input"
                type="search"
                placeholder={this.props.placeholder}
                value={this.props.values?.[this.props.name ?? ""]}
                onChange={(e) => {
                    this.setState({
                        value: e.target.value,
                    });
                }}
                onKeyPress={(e) => {
                    this.onUpdate(this.state.value);
                }}
                readOnly={readOnly}
            />
        );

        return (
            visible &&
            (inline ? (
                <Fragment>
                    <span>{this.props.label}: </span>
                    &nbsp;{input}
                </Fragment>
            ) : (
                <div className="simple-row">
                    <span className="simple-input-label">{this.props.label}: </span>
                    {input}
                    &nbsp;
                    <Button
                        variant={"primary"}
                        onClick={() => {
                            this.onUpdate(this.state.value);
                        }}
                    >
                        搜索
                    </Button>
                </div>
            ))
        );
    }
}

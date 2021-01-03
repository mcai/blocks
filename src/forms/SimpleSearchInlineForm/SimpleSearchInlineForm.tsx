import React, { Component } from "react";
import { SimpleSearchInlineFormProps } from "./SimpleSearchInlineFormProps";
import { SimpleSearchInlineFormState } from "./SimpleSearchInlineFormState";

export class SimpleSearchInlineForm extends Component<SimpleSearchInlineFormProps, SimpleSearchInlineFormState> {
    constructor(props: SimpleSearchInlineFormProps) {
        super(props);

        this.state = {
            value: this.props.values?.[this.props.name ?? ""],
        };
    }

    onUpdate(value: any) {
        this.props.onUpdate?.(this.props.name ?? "", value);
    }

    render() {
        return (
            <div className="form-inline">
                <label>{this.props.label}: </label>

                <input
                    type="text"
                    className="form-control ml-2"
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
                />

                <button
                    className="btn btn-primary form-control ml-2"
                    onClick={() => {
                        this.onUpdate(this.state.value);
                    }}
                >
                    搜索
                </button>

                <button
                    className="btn btn-secondary form-control ml-2"
                    onClick={() => {
                        this.setState({
                            value: "",
                        });

                        this.onUpdate("");
                    }}
                >
                    重置
                </button>
            </div>
        );
    }
}

import React, { Component } from "react";
import { SimpleFormProps } from "./SimpleFormProps";
import { SimpleFormState } from "./SimpleFormState";
import { Button } from "react-bootstrap";

export class SimpleForm extends Component<SimpleFormProps, SimpleFormState> {
    constructor(props: SimpleFormProps) {
        super(props);

        this.state = {
            ...this.props.initialValues,
            submitting: "false",
        };
    }

    async componentDidUpdate(
        prevProps: Readonly<SimpleFormProps>,
        prevState: Readonly<SimpleFormState>,
        snapshot?: any,
    ) {
        if (prevProps.initialValues != this.props.initialValues) {
            this.setState({
                ...this.props.initialValues,
            });
        }
    }

    private onUpdate(name: string, value: any) {
        const newValues = { ...this.state };

        newValues[name] = value;

        const extraValues = this.props.onGetExtraValues?.(newValues) ?? {};

        for (const key in Object.keys(extraValues)) {
            newValues[key] = extraValues[key];
        }

        this.setState(newValues);
    }

    private async onSubmit(e: React.FormEvent<HTMLFormElement>) {
        this.setState({
            submitting: "true",
        });

        e.preventDefault();
        await this.props.onSubmit?.(this.state);

        this.setState({
            submitting: "false",
        });
    }

    render() {
        const props = {
            values: this.state,
            onUpdate: (name: string, value: any) => {
                this.onUpdate(name, value);
            },
        };

        return (
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => this.onSubmit(e)}>
                {this.props.inputsFunc?.(props).map((input) => {
                    if (typeof input === "function") {
                        input = input(this.state);
                    }

                    return React.isValidElement(input) ? React.cloneElement(input, props) : input;
                })}

                <div className="simple-row">
                    <span className="simple-input-label">&nbsp;</span>

                    <div className="simple-input">
                        {this.state.submitting === "true" ? (
                            <Button variant={"primary"} type="submit" disabled={true}>
                                正在{this.props.submitButtonText ?? "提交"},请稍候...
                            </Button>
                        ) : (
                            <Button variant={"primary"} type="submit">
                                {this.props.submitButtonText ?? "提交"}
                            </Button>
                        )}
                    </div>
                </div>
            </form>
        );
    }
}

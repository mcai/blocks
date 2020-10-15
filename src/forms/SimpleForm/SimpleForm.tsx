import React, { Component } from "react";
import { SimpleFormProps } from "./SimpleFormProps";
import { SimpleFormState } from "./SimpleFormState";

export class SimpleForm extends Component<SimpleFormProps, SimpleFormState> {
    constructor(props: SimpleFormProps) {
        super(props);

        this.state = {
            ...this.props.initialValues,
        };
    }

    private onUpdate(name: string, value: any) {
        this.setState({
            [name]: value,
        });
    }

    private async onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await this.props.onSubmit?.(this.state);
    }

    render() {
        return (
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => this.onSubmit(e)}>
                {React.Children.map(this.props.children, (input) =>
                    React.isValidElement(input)
                        ? React.cloneElement(input, {
                              values: this.state,
                              onUpdate: (name: string, value: any) => {
                                  this.onUpdate(name, value);
                              },
                          })
                        : input,
                )}

                <div className="simple-row">
                    <span className="simple-input-label">&nbsp;</span>

                    <div className="simple-input">
                        <button className="simple-button" type="submit">
                            {this.props.submitButtonText ?? "提交"}
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

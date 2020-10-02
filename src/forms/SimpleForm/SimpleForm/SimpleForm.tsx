import React, {Component, Fragment} from "react";
import {SimpleFormProps} from "./SimpleFormProps";
import {SimpleFormState} from "./SimpleFormState";
import {SimpleButton} from "../../../styles/SimpleButton/SimpleButton";
import {SimpleRow} from "../../../styles/SimpleRow/SimpleRow";

export class SimpleForm extends Component<SimpleFormProps, SimpleFormState> {
    constructor(props: SimpleFormProps) {
        super(props);

        this.state = {
            ...this.props.initialValues
        };

        console.log(`SimpleForm.constructor: this.props.state=${JSON.stringify(this.state)}`);
    }

    private onUpdate(name: string, value: string) {
        this.setState({
            [name]: value
        });
    }

    private async onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await this.props.onSubmit?.(this.state);
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => this.onSubmit(e)}>
                    {
                        React.Children.map(this.props.children, input => React.isValidElement(input)
                            ? React.cloneElement(input, {
                                values: this.state,
                                onUpdate: (name: string, value: string) => {
                                    this.onUpdate(name, value);
                                }
                            })
                            : input
                        )
                    }

                    <SimpleRow>
                        <SimpleButton type="submit">{this.props.submitButtonText ?? "提交"}</SimpleButton>
                    </SimpleRow>
                </form>
            </Fragment>
        );
    }
}

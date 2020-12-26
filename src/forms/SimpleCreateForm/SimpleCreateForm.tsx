import React, { Component, Fragment } from "react";
import { SimpleCreateFormProps } from "./SimpleCreateFormProps";
import { SimpleCreateFormState } from "./SimpleCreateFormState";
import { Redirect } from "react-router-dom";
import { SimpleForm } from "../SimpleForm/SimpleForm";

export class SimpleCreateForm extends Component<SimpleCreateFormProps, SimpleCreateFormState> {
    constructor(props: SimpleCreateFormProps) {
        super(props);

        this.state = {};
    }

    private async onSubmit(values: any) {
        if (this.props.onBeforeSubmit) {
            values = await this.props.onBeforeSubmit(values);
        }

        const result = await this.props.dataProvider.create(this.props.resource, this.props.createAction, {
            data: {
                ...this.props.createExtraData,
                ...values,
            },
        });

        if (result !== undefined) {
            this.props.onSuccess?.(result);

            if (this.props.onSuccessRedirect) {
                this.setState({
                    redirect: this.props.onSuccessRedirect?.(result),
                });
            }
        } else {
            this.props.onFailure?.();
        }
    }

    render(): React.ReactNode {
        return (
            <Fragment>
                {this.state.redirect && <Redirect to={this.state.redirect} />}

                <SimpleForm
                    initialValues={{
                        ...this.props.initialValues,
                    }}
                    onSubmit={(values) => this.onSubmit(values)}
                    submitButtonText={this.props.submitButtonText}
                    inputsFunc={this.props.inputsFunc}
                />
            </Fragment>
        );
    }
}

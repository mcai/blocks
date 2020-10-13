import React, { Component } from "react";
import { SimpleUpdateFormProps } from "./SimpleUpdateFormProps";
import { SimpleUpdateFormState } from "./SimpleUpdateFormState";
import { SimpleIf } from "../../components/SimpleIf/SimpleIf";
import { Redirect } from "react-router-dom";
import { SimpleForm } from "../SimpleForm/SimpleForm/SimpleForm";

export class SimpleUpdateForm extends Component<SimpleUpdateFormProps, SimpleUpdateFormState> {
    constructor(props: SimpleUpdateFormProps) {
        super(props);

        this.state = {
            item: undefined,
        };
    }

    async componentDidMount() {
        const item = await this.props.dataProvider.one(this.props.resource, this.props.getByIdAction, {
            filter: {
                ...this.props.getByIdExtraData,
                id: this.props.id,
            },
        });

        this.props.onGetIdResult?.(item);

        this.setState({
            item: item,
        });
    }

    private async onSubmit(values: any) {
        const result = await this.props.dataProvider.update(this.props.resource, this.props.updateAction, {
            id: this.props.id,
            data: {
                ...this.props.updateExtraData,
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

    render() {
        return (
            <SimpleIf condition={this.state.item !== undefined}>
                {this.state.redirect && <Redirect to={this.state.redirect} />}

                <SimpleForm
                    initialValues={{
                        ...this.props.initialValues,
                        ...this.state.item,
                    }}
                    onSubmit={(values) => this.onSubmit(values)}
                    submitButtonText={this.props.submitButtonText}
                >
                    {this.props.inputs}
                </SimpleForm>
            </SimpleIf>
        );
    }
}

import React, { Component } from "react";
import { SimpleUpdateFormProps } from "./SimpleUpdateFormProps";
import { SimpleUpdateFormState } from "./SimpleUpdateFormState";
import { SimpleIf } from "../../components/SimpleIf/SimpleIf";
import { Redirect } from "react-router-dom";
import { SimpleForm } from "../SimpleForm/SimpleForm";

export class SimpleUpdateForm extends Component<SimpleUpdateFormProps, SimpleUpdateFormState> {
    constructor(props: SimpleUpdateFormProps) {
        super(props);

        this.state = {
            item: undefined,
        };
    }

    async componentDidMount() {
        const result = await this.props.dataProvider.getOne(this.props.resource, this.props.getOneAction, {
            filter: this.props.filter,
        });

        const item = result.data;

        this.props.onGetOneResult?.(item);

        this.setState({
            item: item,
        });
    }

    private async onSubmit(values: any) {
        if (this.props.onBeforeSubmit) {
            values = await this.props.onBeforeSubmit(values);
        }

        const result = await this.props.dataProvider.update(this.props.resource, this.props.updateAction, {
            filter: this.props.filter,
            data: {
                ...this.props.updateExtraData,
                ...values,
            },
        });

        const item = result.data;

        if (item !== undefined) {
            this.props.onSuccess?.(item);

            if (this.props.onSuccessRedirect) {
                this.setState({
                    redirect: this.props.onSuccessRedirect?.(item),
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

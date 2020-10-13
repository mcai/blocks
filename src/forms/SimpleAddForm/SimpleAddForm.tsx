import React, {Component, Fragment} from "react";
import {SimpleAddFormProps} from "./SimpleAddFormProps";
import {SimpleAddFormState} from "./SimpleAddFormState";
import {Redirect} from "react-router-dom";
import {SimpleForm} from "../SimpleForm/SimpleForm/SimpleForm";

export class SimpleAddForm extends Component<SimpleAddFormProps, SimpleAddFormState> {
    constructor(props: SimpleAddFormProps) {
        super(props);

        this.state = {
        }
    }

    private async onSubmit(values: any) {
        let result = await this.props.dataProvider.create(this.props.resource, this.props.addAction, {
            data: {
                ...this.props.addExtraData,
                ...values
            }
        });

        if (result !== undefined) {
            this.props.onSuccess?.(result);

            if (this.props.onSuccessRedirect) {
                this.setState({
                    redirect: this.props.onSuccessRedirect?.(result)
                })
            }
        } else {
            this.props.onFailure?.();
        }
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.redirect && <Redirect to={this.state.redirect}/>
                }

                <SimpleForm
                    initialValues={{
                        ...this.props.initialValues
                    }}
                    onSubmit={values => this.onSubmit(values)}
                    submitButtonText={this.props.submitButtonText}
                >
                    {
                        this.props.inputs
                    }
                </SimpleForm>
            </Fragment>
        );
    }
}

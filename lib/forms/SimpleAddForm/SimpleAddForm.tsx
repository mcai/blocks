import React, {Component, Fragment} from "react";
import {SimpleAddFormProps} from "./SimpleAddFormProps";
import {SimpleAddFormState} from "./SimpleAddFormState";
import {Button} from "react-bootstrap";
import {Form, Formik, FormikProps} from "formik";
import {Redirect} from "react-router-dom";

export class SimpleAddForm extends Component<SimpleAddFormProps, SimpleAddFormState> {
    constructor(props: SimpleAddFormProps) {
        super(props);

        this.state = {
        }
    }

    private async onSubmit(values: any) {
        let result = await this.props.dataProvider.add(this.props.resource, this.props.addAction, {
            data: {
                ...this.props.addExtraData,
                ...values
            }
        });

        if (result != undefined) {
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

                <Formik
                    initialValues={{}}
                    onSubmit={values => this.onSubmit(values)}
                >
                    {(props: FormikProps<any>) => (
                        <Form>
                            {
                                this.props.inputs
                            }
                            <Button variant={"primary"} type="submit">{this.props.submitButtonText ?? "提交"}</Button>
                        </Form>
                    )}
                </Formik>
            </Fragment>
        );
    }
}

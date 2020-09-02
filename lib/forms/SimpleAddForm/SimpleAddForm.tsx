import React, {Component} from "react";
import {SimpleAddFormProps} from "./SimpleAddFormProps";
import {SimpleAddFormState} from "./SimpleAddFormState";
import {Button} from "react-bootstrap";
import {Form, Formik, FormikProps} from "formik";

export class SimpleAddForm extends Component<SimpleAddFormProps, SimpleAddFormState> {
    constructor(props: SimpleAddFormProps) {
        super(props);

        this.state = {
        }
    }

    private async onSubmit(values: any) {
        await this.props.dataProvider.add(this.props.resource, this.props.addAction, {
            data: {
                ...this.props.addExtraData,
                ...values
            }
        });
    }

    render() {
        return (
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
        );
    }
}

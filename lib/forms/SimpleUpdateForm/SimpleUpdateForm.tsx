import React, {Component} from "react";
import {SimpleUpdateFormProps} from "./SimpleUpdateFormProps";
import {SimpleUpdateFormState} from "./SimpleUpdateFormState";
import {SimpleIf} from "../../components/SimpleIf/SimpleIf";
import {Button} from "react-bootstrap";
import {Form, Formik, FormikProps} from "formik";

export class SimpleUpdateForm extends Component<SimpleUpdateFormProps, SimpleUpdateFormState> {
    constructor(props: SimpleUpdateFormProps) {
        super(props);

        this.state = {
            item: undefined
        }
    }

    async componentDidMount() {
        let item = await this.props.dataProvider.getOne(this.props.resource, this.props.getByIdAction, {
            ...this.props.getByIdExtraData,
            id: this.props.id
        });

        this.setState({
            item: item
        });
    }

    private async onSubmit(values: any) {
        let result = await this.props.dataProvider.update(this.props.resource, this.props.updateAction, {
            id: this.props.id,
            data: {
                ...this.props.updateExtraData,
                ...values
            }
        });

        if (result != undefined) {
            this.props.onSuccess?.(result);
        } else {
            this.props.onFailure?.();
        }
    }

    render() {
        return (
            <SimpleIf condition={this.state.item != undefined}>
                <Formik
                    initialValues={this.state.item}
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
            </SimpleIf>
        );
    }
}

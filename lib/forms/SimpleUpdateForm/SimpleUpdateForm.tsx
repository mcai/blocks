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
        let item = await this.props.dataProvider.getById(this.props.resource, this.props.getByIdAction, {
            id: this.props.id
        });

        this.setState({
            item: item
        });
    }

    private async onSubmit(values: any) {
        await this.props.dataProvider.update(this.props.resource, this.props.updateAction, {
            id: this.props.id,
            data: values
        });
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

import React, {Component} from "react";
import {SimpleFormProps} from "./SimpleFormProps";
import {Form} from "react-final-form";
import {SimpleFormState} from "./SimpleFormState";
import {SimpleIf} from "../SimpleIf/SimpleIf";

export class SimpleForm extends Component<SimpleFormProps, SimpleFormState> {
    constructor(props: SimpleFormProps) {
        super(props);

        this.state = {
            item: undefined
        }
    }

    async componentDidMount() {
        let item = await this.props.dataProvider.getById(this.props.resource, this.props.action, {
            id: this.props.id
        });

        this.setState({
            item: item
        });
    }

    private async onSubmit(values: any) {
        await this.props.dataProvider.update(this.props.resource, this.props.action, {
            id: this.props.id,
            data: values
        });
    }

    render() {
        return (
            <SimpleIf condition={this.state.item != undefined}>
                <Form
                    onSubmit={values => this.onSubmit(values)}
                    initialValues={this.state.item}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            {
                                this.props.inputs.map(input => input)
                            }

                            <button type="submit">{this.props.submitButtonText ?? "提交"}</button>
                        </form>
                    )}
                />
            </SimpleIf>
        );
    }
}

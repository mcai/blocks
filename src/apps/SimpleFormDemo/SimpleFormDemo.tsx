import React, {Component} from "react";
import {SimpleForm} from "../../forms/SimpleForm/SimpleForm/SimpleForm";
import {SimpleFormTextInput} from "../../forms/SimpleForm/Fields/SimpleFormTextInput/SimpleFormTextInput";
import {SimpleFormDemoState} from "./SimpleFormDemoState";
import {SimpleFormDemoProps} from "./SimpleFormDemoProps";

export class SimpleFormDemo extends Component<SimpleFormDemoProps, SimpleFormDemoState> {
    constructor(props: SimpleFormDemoProps) {
        super(props);

        this.state = {
            ...this.props.initialValues
        };
    }

    render() {
        return (
            <SimpleForm initialValues={this.state} onSubmit={values => {
                this.setState(values);

                alert(`SimpleFormDemo.onSubmit: values=${JSON.stringify(values)}`);
            }}>
                <SimpleFormTextInput label={"User ID"} name={"userId"}/>
                <SimpleFormTextInput label={"Nickname"} name={"nickName"}/>
            </SimpleForm>
        );
    }
}

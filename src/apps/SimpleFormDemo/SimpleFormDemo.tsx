import React, {Component} from "react";
import {SimpleForm} from "../../forms/SimpleForm/SimpleForm/SimpleForm";
import {SimpleFormTextInput} from "../../forms/SimpleForm/Fields/SimpleFormTextInput/SimpleFormTextInput";
import {SimpleFormDemoProps} from "./SimpleFormDemoProps";

export class SimpleFormDemo extends Component<SimpleFormDemoProps, any> {
    render() {
        return (
            <SimpleForm initialValues={this.props.initialValues} onSubmit={values => {
                alert(`SimpleFormDemo.onSubmit: values=${JSON.stringify(values)}`);
            }}>
                <SimpleFormTextInput label={"User ID"} name={"userId"}/>
                <SimpleFormTextInput label={"Nickname"} name={"nickName"}/>
            </SimpleForm>
        );
    }
}

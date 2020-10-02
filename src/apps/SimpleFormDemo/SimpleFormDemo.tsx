import React, {Component} from "react";
import {SimpleForm} from "../../forms/SimpleForm/SimpleForm/SimpleForm";
import {SimpleFormTextInput} from "../../forms/SimpleForm/Fields/SimpleFormTextInput/SimpleFormTextInput";

export class SimpleFormDemo extends Component<any, any> {
    render() {
        return (
            <SimpleForm
                initialValues={{
                    "userId": "test1",
                    "nickName": "Hello world"
                }}
                onSubmit={values => {
                    alert(`SimpleFormDemo.onSubmit: values=${JSON.stringify(values)}`);
                }}
            >
                <SimpleFormTextInput label={"User ID"} name={"userId"}/>
                <SimpleFormTextInput label={"Nickname"} name={"nickName"}/>
            </SimpleForm>
        );
    }
}

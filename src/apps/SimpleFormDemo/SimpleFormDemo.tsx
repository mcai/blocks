import React, {Component} from "react";
import {SimpleForm} from "../../forms/SimpleForm/SimpleForm/SimpleForm";
import {SimpleFormTextInput} from "../../forms/SimpleForm/Fields/SimpleFormTextInput/SimpleFormTextInput";
import {SimpleFormBooleanInput} from "../../forms/SimpleForm/Fields/SimpleFormBooleanInput/SimpleFormBooleanInput";
import {SimpleFormNumberInput} from "../../forms/SimpleForm/Fields/SimpleFormNumberInput/SimpleFormNumberInput";

export class SimpleFormDemo extends Component<any, any> {
    render() {
        return (
            <SimpleForm
                initialValues={{
                    "userId": "test1",
                    "nickName": "Hello world",
                    "rememberPassword": true,
                    "count": 3
                }}
                onSubmit={values => {
                    alert(`SimpleFormDemo.onSubmit: values=${JSON.stringify(values)}`);
                }}
            >
                <SimpleFormTextInput label={"User ID"} name={"userId"}/>
                <SimpleFormTextInput label={"Nickname"} name={"nickName"}/>
                <SimpleFormBooleanInput label={"Remember Password"} name={"rememberPassword"}/>
                <SimpleFormNumberInput label={"Count"} name={"count"}/>
            </SimpleForm>
        );
    }
}

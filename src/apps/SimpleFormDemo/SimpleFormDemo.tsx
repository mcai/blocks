import React, {Component} from "react";
import {SimpleForm} from "../../forms/SimpleForm/SimpleForm/SimpleForm";
import {SimpleFormTextInput} from "../../forms/SimpleForm/Fields/SimpleFormTextInput/SimpleFormTextInput";
import {SimpleFormBooleanInput} from "../../forms/SimpleForm/Fields/SimpleFormBooleanInput/SimpleFormBooleanInput";
import {SimpleFormNumberInput} from "../../forms/SimpleForm/Fields/SimpleFormNumberInput/SimpleFormNumberInput";
import {SimpleFormTextAreaInput} from "../../forms/SimpleForm/Fields/SimpleFormTextAreaInput/SimpleFormTextAreaInput";
import {SimpleFormSelectInput} from "../../forms/SimpleForm/Fields/SimpleFormSelectInput/SimpleFormSelectInput";
import {SimpleFormFileInput} from "../../forms/SimpleForm/Fields/SimpleFormFileInput/SimpleFormFileInput";

export class SimpleFormDemo extends Component<any, any> {
    render() {
        return (
            <SimpleForm
                initialValues={{
                    "userId": "test1",
                    "nickName": "Hello world",
                    "rememberPassword": true,
                    "count": 3,
                    "description": "sample description",
                    "gender": "female"
                }}
                onSubmit={values => {
                    alert(`SimpleFormDemo.onSubmit: values=${JSON.stringify(values)}`);
                }}
            >
                <SimpleFormTextInput label={"User ID"} name={"userId"}/>
                <SimpleFormTextInput label={"Nickname"} name={"nickName"}/>
                <SimpleFormBooleanInput label={"Remember Password"} name={"rememberPassword"}/>
                <SimpleFormNumberInput label={"Count"} name={"count"}/>
                <SimpleFormTextAreaInput label={"Description"} name={"description"}/>
                <SimpleFormSelectInput label={"Gender"} name={"gender"} options={[
                    {
                        value: "male",
                        text: "Male"
                    },
                    {
                        value: "female",
                        text: "Female"
                    }
                ]}/>
                <SimpleFormFileInput label={"Avatar"} name={"avatar"}/>
            </SimpleForm>
        );
    }
}

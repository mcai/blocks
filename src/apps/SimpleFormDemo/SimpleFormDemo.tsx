import React, { Component } from "react";
import { SimpleForm } from "../../forms/SimpleForm/SimpleForm";
import { SimpleFormTextInput } from "../../inputs/SimpleFormTextInput/SimpleFormTextInput";
import { SimpleFormBooleanInput } from "../../inputs/SimpleFormBooleanInput/SimpleFormBooleanInput";
import { SimpleFormNumberInput } from "../../inputs/SimpleFormNumberInput/SimpleFormNumberInput";
import { SimpleFormTextAreaInput } from "../../inputs/SimpleFormTextAreaInput/SimpleFormTextAreaInput";
import { SimpleFormSelectInput } from "../../inputs/SimpleFormSelectInput/SimpleFormSelectInput";
import { SimpleFormFileInput } from "../../inputs/SimpleFormFileInput/SimpleFormFileInput";

export class SimpleFormDemo extends Component<any, any> {
    render() {
        return (
            <SimpleForm
                initialValues={{
                    userId: "test1",
                    nickName: "Hello world",
                    rememberPassword: true,
                    count: 3,
                    description: "sample description",
                    gender: "female",
                }}
                onSubmit={(values) => {
                    alert(`SimpleFormDemo.onSubmit: values=${JSON.stringify(values)}`);
                }}
            >
                <SimpleFormTextInput label={"User ID"} name={"userId"} />
                <SimpleFormTextInput label={"Nickname"} name={"nickName"} />
                <SimpleFormBooleanInput label={"Remember Password"} name={"rememberPassword"} />
                <SimpleFormNumberInput label={"Count"} name={"count"} />
                <SimpleFormTextAreaInput label={"Description"} name={"description"} />
                <SimpleFormSelectInput
                    label={"Gender"}
                    name={"gender"}
                    options={[
                        {
                            value: "male",
                            text: "Male",
                        },
                        {
                            value: "female",
                            text: "Female",
                        },
                    ]}
                />
                <SimpleFormFileInput label={"Avatar"} name={"avatar"} />
            </SimpleForm>
        );
    }
}

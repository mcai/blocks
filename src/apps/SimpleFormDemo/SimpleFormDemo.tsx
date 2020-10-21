import React, { Component } from "react";
import { SimpleForm } from "../../forms/SimpleForm/SimpleForm";
import { SimpleTextInput } from "../../inputs/SimpleTextInput/SimpleTextInput";
import { SimpleBooleanInput } from "../../inputs/SimpleBooleanInput/SimpleBooleanInput";
import { SimpleNumberInput } from "../../inputs/SimpleNumberInput/SimpleNumberInput";
import { SimpleTextAreaInput } from "../../inputs/SimpleTextAreaInput/SimpleTextAreaInput";
import { SimpleSelectInput } from "../../inputs/SimpleSelectInput/SimpleSelectInput";
import { SimpleFileInput } from "../../inputs/SimpleFileInput/SimpleFileInput";

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
                <SimpleTextInput label={"User ID"} name={"userId"} />
                <SimpleTextInput label={"Nickname"} name={"nickName"} />
                <SimpleBooleanInput label={"Remember Password"} name={"rememberPassword"} />
                <SimpleNumberInput label={"Count"} name={"count"} />
                <SimpleTextAreaInput label={"Description"} name={"description"} />
                <SimpleSelectInput
                    label={"Gender"}
                    name={"gender"}
                    options={[
                        {
                            key: "male",
                            value: "male",
                            text: "Male",
                        },
                        {
                            key: "female",
                            value: "female",
                            text: "Female",
                        },
                    ]}
                />
                <SimpleFileInput label={"Avatar"} name={"avatar"} />
            </SimpleForm>
        );
    }
}

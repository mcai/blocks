import React, { Component, Fragment } from "react";
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
                inputFunc={(props) => (
                    <Fragment>
                        <span key={"userIdLabel"}>User ID: </span>
                        <SimpleTextInput name={"userId"} key={"userId"} />
                        <span key={"nickNameLabel"}>Nickname: </span>
                        <SimpleTextInput name={"nickName"} key={"nickName"} />
                        <span key={"rememberPasswordLabel"}>Remember Password: </span>
                        <SimpleBooleanInput name={"rememberPassword"} key={"rememberPassword"} />,
                        <span key={"countLabel"}>Count: </span>,
                        <SimpleNumberInput name={"count"} key={"count"} />,
                        <span key={"descriptionLabel"}>Description: </span>,
                        <SimpleTextAreaInput name={"description"} key={"description"} />,
                        <span key={"genderLabel"}>Gender: </span>,
                        <SimpleSelectInput
                            name={"gender"}
                            key={"gender"}
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
                        ,<span key={"avatarLabel"}>Avatar: </span>,
                        <SimpleFileInput name={"avatar"} key={"avatar"} />
                    </Fragment>
                )}
            />
        );
    }
}

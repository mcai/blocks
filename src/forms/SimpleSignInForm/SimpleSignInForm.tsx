import React, { Component } from "react";
import { SimpleSignInFormProps } from "./SimpleSignInFormProps";
import { Toastify } from "../../components/SimpleToast/SimpleToast";
import { SimpleToastType } from "../../components/SimpleToast/SimpleToastType";
import { SimpleAddForm } from "../SimpleAddForm/SimpleAddForm";
import { SimpleFormTextInput } from "../SimpleForm/Fields/SimpleFormTextInput/SimpleFormTextInput";

export class SimpleSignInForm extends Component<SimpleSignInFormProps, any> {
    constructor(props: Readonly<any>) {
        super(props);

        this.state = {};
    }

    render(): React.ReactNode {
        return (
            <SimpleAddForm
                dataProvider={this.props.dataProvider}
                resource={this.props.resource}
                addAction={this.props.signInAction}
                inputs={[
                    <SimpleFormTextInput key={"name"} label={"用户名"} name={"name"} />,
                    <SimpleFormTextInput key={"password"} label={"密码"} name={"password"} password={true} />,
                ]}
                submitButtonText={"登陆"}
                onSuccess={(item) => {
                    this.props.cookie.signIn(item.guid);

                    Toastify(SimpleToastType.Success, "登陆成功!");
                }}
                onFailure={() => {
                    Toastify(SimpleToastType.Error, "登陆失败!");
                }}
            />
        );
    }
}

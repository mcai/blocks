import React, { Component } from "react";
import { SimpleSignInFormProps } from "./SimpleSignInFormProps";
import { Toastify } from "../../components/SimpleToast/SimpleToast";
import { SimpleToastType } from "../../components/SimpleToast/SimpleToastType";
import { SimpleCreateForm } from "../SimpleCreateForm/SimpleCreateForm";
import { SimpleTextInput } from "../../inputs/SimpleTextInput/SimpleTextInput";

export class SimpleSignInForm extends Component<SimpleSignInFormProps, any> {
    constructor(props: Readonly<any>) {
        super(props);

        this.state = {};
    }

    render(): React.ReactNode {
        return (
            <SimpleCreateForm
                dataProvider={this.props.dataProvider}
                resource={this.props.resource}
                createAction={this.props.signInAction}
                onBeforeSubmit={(values) => (this.props.onBeforeSubmit ? this.props.onBeforeSubmit(values) : values)}
                onSuccess={(item) => {
                    this.props.cookie.signIn(item.guid);

                    Toastify(SimpleToastType.Success, "登陆成功!");
                }}
                onSuccessRedirect={(item) => this.props.onSuccessRedirect?.(item) ?? ""}
                onFailure={() => {
                    Toastify(SimpleToastType.Error, "登陆失败!");
                }}
                inputs={[
                    <SimpleTextInput key={"name"} label={"用户名"} name={"name"} />,
                    <SimpleTextInput key={"password"} label={"密码"} name={"password"} password={() => true} />,
                ]}
                submitButtonText={"登陆"}
            />
        );
    }
}

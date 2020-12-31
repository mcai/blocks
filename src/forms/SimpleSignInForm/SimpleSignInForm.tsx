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
                onBeforeSubmit={async (values) =>
                    this.props.onBeforeSubmit ? await this.props.onBeforeSubmit(values) : Promise.resolve(values)
                }
                onSuccess={(item) => {
                    this.props.cookie.signIn(item.guid);

                    Toastify(SimpleToastType.Success, "登陆成功!");
                }}
                onSuccessRedirect={(item) => this.props.onSuccessRedirect?.(item) ?? ""}
                onFailure={() => {
                    Toastify(SimpleToastType.Error, "登陆失败!");
                }}
                inputFunc={(props: any) => (
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>用户名</label>

                            <SimpleTextInput name={"name"} className="form-control" {...props} />
                        </div>

                        <div className="form-group col-md-6">
                            <label>密码</label>

                            <SimpleTextInput
                                name={"password"}
                                className="form-control"
                                password={() => true}
                                {...props}
                            />
                        </div>
                    </div>
                )}
                submitButtonText={"登陆"}
            />
        );
    }
}

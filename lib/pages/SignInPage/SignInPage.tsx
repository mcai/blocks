import React, {Component} from "react";
import {SignInPageProps} from "./SignInPageProps";
import {SignInPageState} from "./SignInPageState";
import {SimpleCookie} from "../../utils/SimpleCookie";
import {Toastify} from "../../components/SimpleToast/SimpleToast";
import {SimpleToastType} from "../../components/SimpleToast/SimpleToastType";
import {SimpleAddForm} from "../../forms/SimpleAddForm/SimpleAddForm";
import {SimpleTextInput} from "../../inputs/SimpleTextInput/SimpleTextInput";

export class SignInPage extends Component<SignInPageProps, SignInPageState> {
    private refInputMobile: any;

    private cookie: SimpleCookie;

    constructor(props: Readonly<any>) {
        super(props);

        this.state = {
        };

        this.cookie = new SimpleCookie(
            guid => this.props.dataProvider.getOne(this.props.resource, this.props.getUserByGuidAction, {
                filter: {
                    guid: guid
                }
            }),
            this.props.sessionKeyUserGuid
        );
    }

    componentDidMount() {
        this.refInputMobile?.focus();
    }

    render(): React.ReactNode {
        return (
            <SimpleAddForm
                dataProvider={this.props.dataProvider}
                resource={this.props.resource}
                addAction={this.props.signInAction}
                inputs={
                    [
                        <SimpleTextInput label={"用户名"} name={"name"}/>,
                        <SimpleTextInput label={"密码"} name={"password"} password={true}/>
                    ]
                }
                submitButtonText={"登陆"}
                onSuccess={item => {
                    this.cookie.signIn(item.guid);

                    Toastify(
                        SimpleToastType.Success,
                        "登陆成功!"
                    );
                }}
                onFailure={() => {
                    Toastify(
                        SimpleToastType.Error,
                        "登陆失败!"
                    );
                }}
            />
        );
    }
}

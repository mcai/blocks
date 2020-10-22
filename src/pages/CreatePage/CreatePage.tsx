import React, { Component, Fragment } from "react";
import { CreatePageProps } from "./CreatePageProps";
import { CreatePageState } from "./CreatePageState";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import { SimpleRestDataProvider } from "../../data/SimpleRestDataProvider";
import { SimpleAddForm } from "../../forms/SimpleAddForm/SimpleAddForm";
import { SimpleBreadcrumb } from "../../components/SimpleBreadcrumb/SimpleBreadcrumb";
import { Toastify } from "../../components/SimpleToast/SimpleToast";
import { SimpleToastType } from "../../components/SimpleToast/SimpleToastType";
import urljoin from "url-join";

export class CreatePage extends Component<CreatePageProps, CreatePageState> {
    dataProvider: SimpleDataProvider;

    constructor(props: CreatePageProps) {
        super(props);

        this.state = {
            signedInOperator: undefined,
        };

        this.dataProvider = new SimpleRestDataProvider(this.props.baseUrl);
    }

    async componentDidMount() {
        await this.loadData();
    }

    private async loadData() {}

    render() {
        return (
            <Fragment>
                <SimpleBreadcrumb
                    items={
                        this.props.breadCrumbItems ?? [
                            {
                                key: "home",
                                title: "主页",
                                href: "/",
                            },
                            {
                                key: "list",
                                title: `${this.props.resource.title}管理`,
                                href: urljoin("/", this.props.resource.name, "list"),
                            },
                            {
                                key: "create",
                                title: `添加${this.props.resource.title}`,
                                active: true,
                            },
                        ]
                    }
                />

                {this.props.children}

                <SimpleAddForm
                    dataProvider={this.dataProvider}
                    resource={this.props.resource.name}
                    initialValues={{
                        ...this.props.resource.initialValues,
                        ...this.props.initialValues,
                    }}
                    addAction={"create"}
                    addExtraData={{}}
                    inputs={this.props.resource.inputs}
                    submitButtonText={"添加"}
                    onSuccess={() => {
                        Toastify(SimpleToastType.Success, `添加${this.props.resource.title}成功!`);
                    }}
                    onSuccessRedirect={() => urljoin("/", this.props.resource.name, "list")}
                    onFailure={() => {
                        Toastify(SimpleToastType.Error, `添加${this.props.resource.title}失败!`);
                    }}
                />
            </Fragment>
        );
    }
}

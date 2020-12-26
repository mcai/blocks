import React, { Component } from "react";
import { SimpleCreatePageProps } from "./SimpleCreatePageProps";
import { SimpleCreatePageState } from "./SimpleCreatePageState";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import { SimpleRestDataProvider } from "../../data/SimpleRestDataProvider";
import { SimpleCreateForm } from "../../forms/SimpleCreateForm/SimpleCreateForm";
import { Toastify } from "../../components/SimpleToast/SimpleToast";
import { SimpleToastType } from "../../components/SimpleToast/SimpleToastType";
import urljoin from "url-join";
import { SimplePage } from "../SimplePage/SimplePage";

export class SimpleCreatePage extends Component<SimpleCreatePageProps, SimpleCreatePageState> {
    dataProvider: SimpleDataProvider;

    constructor(props: SimpleCreatePageProps) {
        super(props);

        this.state = {};

        this.dataProvider = new SimpleRestDataProvider(this.props.baseUrl);
    }

    async componentDidMount() {
        await this.loadData();
    }

    private async loadData() {}

    render() {
        return (
            <SimplePage
                breadCrumbItems={
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
            >
                {this.props.children}

                <SimpleCreateForm
                    dataProvider={this.dataProvider}
                    resource={this.props.resource.name}
                    initialValues={{
                        ...this.props.resource.initialValues,
                        ...this.props.initialValues,
                    }}
                    createAction={"create"}
                    createExtraData={{}}
                    onBeforeSubmit={async (values) =>
                        this.props.onBeforeSubmit ? await this.props.onBeforeSubmit(values) : Promise.resolve(values)
                    }
                    inputsFunc={(props) => this.props.resource.inputsFunc(props)}
                    submitButtonText={"添加"}
                    onSuccess={() => {
                        Toastify(SimpleToastType.Success, `添加${this.props.resource.title}成功!`);
                    }}
                    onSuccessRedirect={this.props.onSuccessRedirect}
                    onFailure={() => {
                        Toastify(SimpleToastType.Error, `添加${this.props.resource.title}失败!`);
                    }}
                />
            </SimplePage>
        );
    }
}

import { Component, Fragment } from "react";
import { CreatePageProps } from "./CreatePageProps";
import { CreatePageState } from "./CreatePageState";
import React from "react";
import pluralize from "pluralize";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import { SimpleRestDataProvider } from "../../data/SimpleRestDataProvider";
import { SimpleAddForm } from "../../forms/SimpleAddForm/SimpleAddForm";
import { SimpleBreadcrumb } from "../../components/SimpleBreadcrumb/SimpleBreadcrumb";
import { Toastify } from "../../components/SimpleToast/SimpleToast";
import { SimpleToastType } from "../../components/SimpleToast/SimpleToastType";

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
        const resource = `${pluralize(this.props.resource.name)}/`;

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
                                key: `${pluralize(this.props.resource.name)}`,
                                title: `${this.props.resource.title}管理`,
                                href: `/${pluralize(this.props.resource.name)}`,
                            },
                            {
                                key: `add${this.props.resource.name}`,
                                title: `添加${this.props.resource.title}`,
                                active: true,
                            },
                        ]
                    }
                />

                <SimpleAddForm
                    dataProvider={this.dataProvider}
                    resource={resource}
                    initialValues={{
                        ...this.props.resource.initialValues,
                        ...this.props.initialValues,
                    }}
                    addAction={"create/"}
                    addExtraData={{}}
                    inputs={this.props.resource.inputsFunc(undefined)}
                    submitButtonText={"添加"}
                    onSuccess={() => {
                        Toastify(SimpleToastType.Success, `添加${this.props.resource.title}成功!`);
                    }}
                    onSuccessRedirect={() => `/${pluralize(this.props.resource.name)}`}
                    onFailure={() => {
                        Toastify(SimpleToastType.Error, `添加${this.props.resource.title}失败!`);
                    }}
                />
            </Fragment>
        );
    }
}

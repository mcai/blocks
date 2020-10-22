import React, { Component, Fragment } from "react";
import { EditPageProps } from "./EditPageProps";
import { EditPageState } from "./EditPageState";
import { SimpleBreadcrumb } from "../../components/SimpleBreadcrumb/SimpleBreadcrumb";
import { SimpleUpdateForm } from "../../forms/SimpleUpdateForm/SimpleUpdateForm";
import { Toastify } from "../../components/SimpleToast/SimpleToast";
import { SimpleToastType } from "../../components/SimpleToast/SimpleToastType";
import { SimpleRestDataProvider } from "../../data/SimpleRestDataProvider";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import urljoin from "url-join";

export class EditPage extends Component<EditPageProps, EditPageState> {
    dataProvider: SimpleDataProvider;

    constructor(props: EditPageProps) {
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
                                key: "edit",
                                title:
                                    this.props.resource.titleFunc?.(this.state.item) ??
                                    this.state.item?.title ??
                                    "untitled",
                                active: true,
                            },
                        ]
                    }
                />

                {this.props.children}

                <SimpleUpdateForm
                    dataProvider={this.dataProvider}
                    resource={this.props.resource.name}
                    initialValues={{
                        ...this.props.resource.initialValues,
                        ...this.props.initialValues,
                    }}
                    getOneAction={"getOne"}
                    updateAction={"update"}
                    updateExtraData={{}}
                    filter={this.props.filter}
                    onGetOneResult={(item) => {
                        this.setState({
                            item: item,
                        });
                    }}
                    inputs={this.props.resource.inputs}
                    submitButtonText={"更新"}
                    onSuccess={() => {
                        Toastify(SimpleToastType.Success, `更新${this.props.resource.title}成功!`);
                    }}
                    onSuccessRedirect={() => urljoin("/", this.props.resource.name, "list")}
                    onFailure={() => {
                        Toastify(SimpleToastType.Error, `更新${this.props.resource.title}失败!`);
                    }}
                />
            </Fragment>
        );
    }
}

import { Component, Fragment } from "react";
import { UpdatePageProps } from "./UpdatePageProps";
import { UpdatePageState } from "./UpdatePageState";
import React from "react";
import pluralize from "pluralize";
import { SimpleBreadcrumb } from "../../components/SimpleBreadcrumb/SimpleBreadcrumb";
import { SimpleUpdateForm } from "../../forms/SimpleUpdateForm/SimpleUpdateForm";
import { Toastify } from "../../components/SimpleToast/SimpleToast";
import { SimpleToastType } from "../../components/SimpleToast/SimpleToastType";
import { SimpleRestDataProvider } from "../../data/SimpleRestDataProvider";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";

export class UpdatePage extends Component<UpdatePageProps, UpdatePageState> {
    dataProvider: SimpleDataProvider;

    constructor(props: UpdatePageProps) {
        super(props);

        this.state = {};

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
                    items={[
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
                            key: `${this.props.resource.name}`,
                            title: this.state.item?.title,
                            active: true,
                        },
                    ]}
                />

                <SimpleUpdateForm
                    dataProvider={this.dataProvider}
                    resource={resource}
                    initialValues={{
                        ...this.props.resource.initialValues,
                        ...this.props.initialValues,
                    }}
                    getByIdAction={"one/"}
                    updateAction={"update/"}
                    updateExtraData={{}}
                    id={this.props.id}
                    onGetIdResult={(item) => {
                        this.setState({
                            item: item,
                        });
                    }}
                    inputs={this.props.resource.inputs}
                    submitButtonText={"更新"}
                    onSuccess={() => {
                        Toastify(SimpleToastType.Success, `更新${this.props.resource.title}成功!`);
                    }}
                    onSuccessRedirect={() => `/${pluralize(this.props.resource.name)}`}
                    onFailure={() => {
                        Toastify(SimpleToastType.Error, `更新${this.props.resource.title}失败!`);
                    }}
                />
            </Fragment>
        );
    }
}

import { Component, Fragment } from "react";
import { FindPageProps } from "./FindPageProps";
import { FindPageState } from "./FindPageState";
import { Button } from "react-bootstrap";
import React from "react";
import pluralize from "pluralize";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import { SimpleRestDataProvider } from "../../data/SimpleRestDataProvider";
import { SimpleTextField } from "../../fields/SimpleTextField";
import { SimpleActionsField } from "../../fields/SimpleActionsField";
import { SimpleToastType } from "../../components/SimpleToast/SimpleToastType";
import { Toastify } from "../../components/SimpleToast/SimpleToast";
import { SimpleActionsFieldType } from "../../fields/SimpleActionsFieldType";
import { SimpleBreadcrumb } from "../../components/SimpleBreadcrumb/SimpleBreadcrumb";
import { SimpleTable } from "../../components/SimpleTable/SimpleTable";

export class FindPage extends Component<FindPageProps, FindPageState> {
    dataProvider: SimpleDataProvider;
    refTable: any;

    constructor(props: FindPageProps) {
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

        const fields = [
            ...this.props.resource.fields,
            new SimpleActionsField("操作", [
                {
                    text: "编辑",
                    hrefFunc: (item) => `/${this.props.resource.name}/${item.id}`,
                },
                {
                    text: "删除",
                    onClick: async (item) => {
                        await this.dataProvider.remove(resource, "remove/", {
                            id: item.id,
                            data: {},
                        });

                        if (this.refTable !== undefined) {
                            await this.refTable.loadData();
                        }

                        Toastify(SimpleToastType.Success, `删除${this.props.resource.title}成功!`);
                    },
                    type: SimpleActionsFieldType.danger,
                },
            ]),
        ];

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
                            active: true,
                        },
                    ]}
                />

                <SimpleTable
                    ref={(ref) => {
                        this.refTable = ref;
                    }}
                    pageSize={10}
                    initialPageNum={0}
                    dataProvider={this.dataProvider}
                    resource={resource}
                    action={"find/"}
                    fields={fields}
                    extra={
                        <Button variant={"primary"} className={"ml-3"} href={`/add${this.props.resource.name}`}>
                            添加{this.props.resource.title}
                        </Button>
                    }
                />
            </Fragment>
        );
    }
}

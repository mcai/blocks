import React, { Component, Fragment } from "react";
import { ListPageProps } from "./ListPageProps";
import { FindPageState } from "./FindPageState";
import { Button } from "react-bootstrap";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import { SimpleRestDataProvider } from "../../data/SimpleRestDataProvider";
import { SimpleBreadcrumb } from "../../components/SimpleBreadcrumb/SimpleBreadcrumb";
import { SimpleTable } from "../../components/SimpleTable/SimpleTable";

export class ListPage extends Component<ListPageProps, FindPageState> {
    dataProvider: SimpleDataProvider;
    refTable: any;

    constructor(props: ListPageProps) {
        super(props);

        this.state = {};

        this.dataProvider = new SimpleRestDataProvider(this.props.baseUrl);
    }

    async componentDidMount() {
        await this.loadData();
    }

    private async loadData() {}

    render() {
        const resource = `${this.props.resource.name}/`;

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
                                key: `${this.props.resource.name}/list`,
                                title: `${this.props.resource.title}管理`,
                                active: true,
                            },
                        ]
                    }
                />

                {this.props.children}

                <SimpleTable
                    ref={(ref) => {
                        this.refTable = ref;
                    }}
                    pageSize={10}
                    initialPageNum={0}
                    initialOrdering={this.props.initialOrdering}
                    dataProvider={this.dataProvider}
                    resource={resource}
                    action={"getList/"}
                    filter={this.props.filter}
                    keyFunc={(values) => this.props.resource.keyFunc?.(values)}
                    extra={
                        <Button variant={"primary"} className={"ml-3"} href={`/${this.props.resource.name}/create`}>
                            添加{this.props.resource.title}
                        </Button>
                    }
                >
                    {this.props.resource.fieldsFunc(this.props.resource, this.dataProvider, async () => {
                        if (this.refTable !== undefined) {
                            await this.refTable.loadData();
                        }
                    })}
                </SimpleTable>
            </Fragment>
        );
    }
}

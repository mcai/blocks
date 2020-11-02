import React, { Component, Fragment } from "react";
import { SimpleListPageProps } from "./SimpleListPageProps";
import { SimpleListPageState } from "./SimpleListPageState";
import { Button } from "react-bootstrap";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import { SimpleRestDataProvider } from "../../data/SimpleRestDataProvider";
import { SimpleTable } from "../../components/SimpleTable/SimpleTable";
import urljoin from "url-join";
import { SimplePage } from "../SimplePage/SimplePage";
import { SimpleTableRowType } from "../../components/SimpleTable/SimpleTableRowType";

export class SimpleListPage extends Component<SimpleListPageProps, SimpleListPageState> {
    dataProvider: SimpleDataProvider;
    refTable: any;

    constructor(props: SimpleListPageProps) {
        super(props);

        this.state = {};

        this.dataProvider = new SimpleRestDataProvider(this.props.baseUrl);
    }

    async componentDidMount() {
        await this.loadData();
    }

    private async loadData() {}

    render() {
        const createButtonVisible = this.props.createButtonVisible == undefined || this.props.createButtonVisible;

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
                            key: `${this.props.resource.name}/list`,
                            title: `${this.props.resource.title}管理`,
                            active: true,
                        },
                    ]
                }
            >
                {this.props.children}

                <SimpleTable
                    ref={(ref) => {
                        this.refTable = ref;
                    }}
                    pageSize={10}
                    initialPageNum={0}
                    initialOrdering={this.props.initialOrdering}
                    dataProvider={this.dataProvider}
                    resource={this.props.resource.name}
                    action={"getList"}
                    filter={this.props.filter}
                    transform={this.props.transform}
                    rowTypeFunc={(item) => this.props.resource.rowTypeFunc?.(item) ?? SimpleTableRowType.none}
                    keyFunc={(item) => this.props.resource.keyFunc?.(item)}
                    extra={
                        <Fragment>
                            {createButtonVisible && (
                                <Button
                                    variant={"primary"}
                                    className={"ml-3"}
                                    href={urljoin("/", this.props.resource.name, "create")}
                                >
                                    添加{this.props.resource.title}
                                </Button>
                            )}
                        </Fragment>
                    }
                >
                    {this.props.resource.fieldsFunc(this.props.resource, this.dataProvider, async () => {
                        if (this.refTable !== undefined) {
                            await this.refTable.loadData();
                        }
                    })}
                </SimpleTable>
            </SimplePage>
        );
    }
}

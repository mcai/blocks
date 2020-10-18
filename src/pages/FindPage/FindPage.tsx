import React, { Component, Fragment } from "react";
import { FindPageProps } from "./FindPageProps";
import { FindPageState } from "./FindPageState";
import { Button } from "react-bootstrap";
import pluralize from "pluralize";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import { SimpleRestDataProvider } from "../../data/SimpleRestDataProvider";
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
                    fields={this.props.resource.fieldsFunc(this.props.resource, this.dataProvider, async () => {
                        if (this.refTable !== undefined) {
                            await this.refTable.loadData();
                        }
                    })}
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

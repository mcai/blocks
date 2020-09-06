import React, {Component} from "react";
import {SimpleTableState} from "./SimpleTableState";
import {SimpleTableProps} from "./SimpleTableProps";
import {Button, Col, Row, Table} from "react-bootstrap";
import {SimplePagination} from "../SimplePagination/SimplePagination";
import {SimpleExport} from "../SimpleExport/SimpleExport";
import {SimpleLoading} from "../SimpleLoading/SimpleLoading";
import {Toastify} from "../SimpleToast/SimpleToast";
import {SimpleToastType} from "../SimpleToast/SimpleToastType";
import {SimpleSpacing} from "../SimpleSpacing/SimpleSpacing";
import {SimpleTableRowType} from "./SimpleTableRowType";
import {SimpleTableOrderingDirection} from "./SimpleTableOrderingDirection";

export class SimpleTable extends Component<SimpleTableProps, SimpleTableState> {
    private refExportAll: any;
    private refExportCurrentPage: any;

    constructor(props: SimpleTableProps) {
        super(props);

        this.state = {
            pageNum: this.props.initialPageNum,
            ordering: this.props.initialOrdering,

            count: 0,
            pageCount: 0,
            itemsInCurrentPage: [],
            loadingData: false,

            exportLoadingActive: false,
            exportLoadingText: ""
        }
    }

    async componentDidMount() {
        await this.loadData();
    }

    async componentDidUpdate(
        prevProps: Readonly<SimpleTableProps>,
        prevState: Readonly<SimpleTableState>,
        snapshot?: any
    ) {
        if (prevState.pageNum !== this.state.pageNum) {
            await this.loadData();
        }
    }

    public resetPageNum() {
        this.setState({
            pageNum: 0
        });
    }

    public async loadData() {
        this.setState({
            count: 0,
            pageCount: 0,
            itemsInCurrentPage: [],
            loadingData: true
        });

        let result = await this.props.dataProvider.getList(this.props.resource, this.props.action, {
            pageSize: this.props.pageSize,
            pageNum: this.state.pageNum,
            ordering: this.state.ordering,
            filter: {
                ...this.props.extraData
            }
        });

        this.setState({
            count: result?.count ?? 0,
            pageCount: result?.pageCount ?? 0,
            itemsInCurrentPage: result?.itemsInCurrentPage ?? [],
            loadingData: false
        });
    }

    render(): React.ReactNode {
        let exportAll = <SimpleExport
            pageSize={this.props.pageSize}
            dataProvider={this.props.dataProvider}
            resource={this.props.resource}
            action={this.props.action}
            fields={this.props.fields}
            ref={(ref: any) => {this.refExportAll = ref}}
            onBeginExport={() => {
                this.setState({
                    exportLoadingActive: true,
                    exportLoadingText: "正在导出Excel文件,请稍候..."
                });
            }}
            onExporting={(pageCount, pageNum) => {
                if (pageNum % 5 == 0) {
                    this.setState({
                        exportLoadingText: `正在导出Excel文件第${pageNum}页(共${pageCount}页),请稍候...`
                    });
                }
            }}
            onEndExport={() => {
                this.setState({
                    exportLoadingActive: false
                });

                Toastify(SimpleToastType.Info, "已导出Excel文件到本地，请查看文件.");
            }}
        />;

        let exportCurrentPage = <SimpleExport
            pageSize={this.props.pageSize}
            startPageNum={this.state.pageNum}
            endPageNum={this.state.pageNum}
            dataProvider={this.props.dataProvider}
            resource={this.props.resource}
            action={this.props.action}
            fields={this.props.fields}
            ref={(ref: any) => {
                this.refExportCurrentPage = ref
            }}
            onEndExport={() => {
                Toastify(SimpleToastType.Info, "已导出Excel文件到本地，请查看文件.");
            }}
        />;

        return (
            <SimpleLoading
                active={this.state.loadingData || this.state.exportLoadingActive}
                text={this.state.loadingData ? "正在载入数据,请稍候..." : this.state.exportLoadingText}
            >
                {exportAll}
                {exportCurrentPage}

                <Row>
                    <Col>
                        <div className={"float-right"}>
                            <Button onClick={async () => await this.refExportAll.download()} className={"ml-3"}>导出全部</Button>
                            <Button onClick={async () => await this.refExportCurrentPage.download()} className={"ml-3"}>导出当前页</Button>

                            {
                                this.props.extra
                            }
                        </div>

                        <SimpleSpacing/>

                        <SimplePagination
                            pageCount={this.state.pageCount}
                            pageNum={this.state.pageNum}
                            count={this.state.count}
                            pageSize={this.props.pageSize}
                            onClick={(pageNum) => this.setState({
                                pageNum: pageNum
                            })}
                        />
                    </Col>
                </Row>

                {
                    this.state.itemsInCurrentPage?.length > 0
                        ? (
                            <Table striped={true} bordered={true} hover={true}>
                                <thead>
                                <tr>
                                    {
                                        this.props.fields.map(field => {
                                            let orderingDirection = this.props.getOrderingDirectionFunc?.(field, this.state.ordering);

                                            return (
                                                <th>
                                                    {
                                                        this.props.orderingOnClick != undefined
                                                            ? (
                                                                <Button onClick={() => {
                                                                    this.setState({
                                                                        ordering: this.props.orderingOnClick?.(this.state.ordering)
                                                                    })
                                                                }}>{field.title}</Button>
                                                            )
                                                            : field.title
                                                    }

                                                    {
                                                        orderingDirection == SimpleTableOrderingDirection.ascending && "(Up)"
                                                    }

                                                    {
                                                        orderingDirection == SimpleTableOrderingDirection.descending && "(Down)"
                                                    }
                                                </th>
                                            );
                                        })
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.itemsInCurrentPage.map(item => {
                                        let trClass = "";

                                        if (this.props.getRowTypeFunc != undefined) {
                                            switch (this.props.getRowTypeFunc(item)) {
                                                case SimpleTableRowType.none:
                                                    break;
                                                case SimpleTableRowType.danger:
                                                    trClass = "table-danger";
                                                    break;
                                                case SimpleTableRowType.warning:
                                                    trClass = "table-warning";
                                                    break;
                                            }
                                        }

                                        return (
                                            <tr className={trClass}>
                                                {
                                                    this.props.fields.map(field => <td>{field.render(item)}</td>)
                                                }
                                            </tr>
                                        );
                                    })
                                }
                                </tbody>
                            </Table>
                        )
                        : (<span>没有数据。</span>)
                }
            </SimpleLoading>
        );
    }
}

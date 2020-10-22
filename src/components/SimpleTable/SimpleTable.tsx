import React, { Component } from "react";
import { SimpleTableState } from "./SimpleTableState";
import { SimpleTableProps } from "./SimpleTableProps";
import { Button, Col, Row, Table } from "react-bootstrap";
import { SimplePagination } from "../SimplePagination/SimplePagination";
import { SimpleExport } from "../SimpleExport/SimpleExport";
import { SimpleLoading } from "../SimpleLoading/SimpleLoading";
import { Toastify } from "../SimpleToast/SimpleToast";
import { SimpleToastType } from "../SimpleToast/SimpleToastType";
import { SimpleSpacing } from "../SimpleSpacing/SimpleSpacing";
import { SimpleTableRowType } from "./SimpleTableRowType";
import { BsCaretDown, BsCaretUp } from "react-icons/all";

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
            exportLoadingText: "",
        };
    }

    async componentDidMount() {
        await this.loadData();
    }

    async componentDidUpdate(
        prevProps: Readonly<SimpleTableProps>,
        prevState: Readonly<SimpleTableState>,
        snapshot?: any,
    ) {
        if (prevProps.filter !== this.props.filter) {
            this.resetPageNum();
        }

        if (
            prevProps.filter !== this.props.filter ||
            prevState.pageNum !== this.state.pageNum ||
            prevState.ordering !== this.state.ordering
        ) {
            await this.loadData();
        }
    }

    public resetPageNum() {
        this.setState({
            pageNum: 0,
        });
    }

    public async loadData() {
        this.setState({
            count: 0,
            pageCount: 0,
            itemsInCurrentPage: [],
            loadingData: true,
        });

        const result = await this.props.dataProvider.getList(this.props.resource, this.props.action, {
            paging: {
                pageSize: this.props.pageSize,
                pageNum: this.state.pageNum,
            },
            ordering: this.state.ordering,
            filter: this.props.filter,
        });

        const pageCount = Math.ceil(result.total / this.props.pageSize);

        this.setState({
            count: result.total ?? 0,
            pageCount: pageCount ?? 0,
            itemsInCurrentPage: result.data ?? [],
            loadingData: false,
        });
    }

    render(): React.ReactNode {
        const exportAll = (
            <SimpleExport
                pageSize={this.props.pageSize}
                ordering={this.state.ordering}
                dataProvider={this.props.dataProvider}
                resource={this.props.resource}
                action={this.props.action}
                filter={this.props.filter}
                ref={(ref: any) => {
                    this.refExportAll = ref;
                }}
                onBeginExport={() => {
                    this.setState({
                        exportLoadingActive: true,
                        exportLoadingText: "正在导出Excel文件,请稍候...",
                    });
                }}
                onExporting={(pageCount, pageNum) => {
                    if (pageNum % 5 == 0) {
                        this.setState({
                            exportLoadingText: `正在导出Excel文件第${pageNum}页(共${pageCount}页),请稍候...`,
                        });
                    }
                }}
                onEndExport={() => {
                    this.setState({
                        exportLoadingActive: false,
                    });

                    Toastify(SimpleToastType.Info, "已导出Excel文件到本地，请查看文件.");
                }}
            >
                {this.props.children}
            </SimpleExport>
        );

        const exportCurrentPage = (
            <SimpleExport
                pageSize={this.props.pageSize}
                startPageNum={this.state.pageNum}
                endPageNum={this.state.pageNum}
                ordering={this.state.ordering}
                dataProvider={this.props.dataProvider}
                resource={this.props.resource}
                action={this.props.action}
                filter={this.props.filter}
                ref={(ref: any) => {
                    this.refExportCurrentPage = ref;
                }}
                onEndExport={() => {
                    Toastify(SimpleToastType.Info, "已导出Excel文件到本地，请查看文件.");
                }}
            >
                {this.props.children}
            </SimpleExport>
        );

        const pagination = (
            <SimplePagination
                pageCount={this.state.pageCount}
                pageNum={this.state.pageNum}
                count={this.state.count}
                pageSize={this.props.pageSize}
                onClick={(pageNum) =>
                    this.setState({
                        pageNum: pageNum,
                    })
                }
            />
        );

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
                            {this.state.count > 0 && (
                                <Button onClick={async () => await this.refExportAll.download()} className={"ml-3"}>
                                    导出全部
                                </Button>
                            )}
                            {this.state.itemsInCurrentPage.length > 0 && (
                                <Button
                                    onClick={async () => await this.refExportCurrentPage.download()}
                                    className={"ml-3"}
                                >
                                    导出当前页
                                </Button>
                            )}

                            {this.props.extra}
                        </div>

                        <SimpleSpacing />

                        {pagination}
                    </Col>
                </Row>

                {this.state.itemsInCurrentPage?.length > 0 ? (
                    <Table striped={true} bordered={true} hover={true}>
                        <thead>
                            <tr>
                                {React.Children.map(this.props.children, (field) => {
                                    return React.isValidElement(field) ? (
                                        <th key={field.props.name}>
                                            {field.props.ascendingOrdering !== undefined &&
                                            field.props.descendingOrdering !== undefined ? (
                                                <a
                                                    href={"#"}
                                                    onClick={() => {
                                                        this.setState({
                                                            ordering:
                                                                this.state.ordering == field.props.ascendingOrdering
                                                                    ? field.props.descendingOrdering
                                                                    : field.props.ascendingOrdering,
                                                        });
                                                    }}
                                                >
                                                    {field.props.title}
                                                </a>
                                            ) : (
                                                field.props.title
                                            )}

                                            {this.state.ordering !== undefined &&
                                                this.state.ordering == field.props.ascendingOrdering && <BsCaretUp />}

                                            {this.state.ordering !== undefined &&
                                                this.state.ordering == field.props.descendingOrdering && (
                                                    <BsCaretDown />
                                                )}
                                        </th>
                                    ) : (
                                        <th />
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.itemsInCurrentPage.map((values) => {
                                let trClass = "";

                                if (this.props.rowTypeFunc !== undefined) {
                                    switch (this.props.rowTypeFunc(values)) {
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
                                    <tr className={trClass} key={this.props.keyFunc?.(values)}>
                                        {React.Children.map(this.props.children, (field) => {
                                            let tdClass = "";

                                            if (this.props.cellTypeFunc !== undefined) {
                                                switch (this.props.cellTypeFunc(values, field)) {
                                                    case SimpleTableRowType.none:
                                                        break;
                                                    case SimpleTableRowType.danger:
                                                        tdClass = "table-danger";
                                                        break;
                                                    case SimpleTableRowType.warning:
                                                        tdClass = "table-warning";
                                                        break;
                                                }
                                            }

                                            if (React.isValidElement(field)) {
                                                return (
                                                    <td key={field.props.name} className={trClass}>
                                                        {React.cloneElement(field, {
                                                            inline: true,
                                                            values: values,
                                                        })}
                                                    </td>
                                                );
                                            } else {
                                                return <td className={trClass}>{field}</td>;
                                            }
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                ) : (
                    <span>没有数据。</span>
                )}

                <Row>
                    <Col>{pagination}</Col>
                </Row>
            </SimpleLoading>
        );
    }
}

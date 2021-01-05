import React, { Component } from "react";
import { SimpleTableState } from "./SimpleTableState";
import { SimpleTableProps } from "./SimpleTableProps";
import { SimplePagination } from "../SimplePagination/SimplePagination";
import { SimpleExport } from "../SimpleExport/SimpleExport";
import { SimpleLoading } from "../SimpleLoading/SimpleLoading";
import { Toastify } from "../SimpleToast/SimpleToast";
import { SimpleToastType } from "../SimpleToast/SimpleToastType";
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
        console.debug(`[SimpleTable] componentDidMount`);

        await this.loadData();
    }

    async componentDidUpdate(
        prevProps: Readonly<SimpleTableProps>,
        prevState: Readonly<SimpleTableState>,
        snapshot?: any,
    ) {
        const filterChanged = prevProps.filter !== this.props.filter;
        const pageNumChanged = prevState.pageNum !== this.state.pageNum;
        const orderingChanged = prevState.ordering !== this.state.ordering;

        console.debug(
            `[SimpleTable] componentDidUpdate: filterChanged=${filterChanged ? "true" : "false"}, pageNumChanged=${
                pageNumChanged ? "true" : "false"
            }, orderingChanged=${orderingChanged ? "true" : "false"}`,
        );

        if (filterChanged) {
            this.resetPageNum();
        }

        if (filterChanged || pageNumChanged || orderingChanged) {
            await this.loadData();
        }
    }

    public resetPageNum() {
        this.setState({
            pageNum: 0,
        });
    }

    public async loadData() {
        console.debug(`[SimpleTable] load data`);

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
            transform: this.props.transform,
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

                <div className="tw-flex tw-flex-row tw-items-center tw-space-x-2">
                    <div className="tw-flex-grow">
                        {pagination}
                        {this.props.extra}
                    </div>
                    <div className="btn-group">
                        {this.state.count > 0 && (
                            <button
                                onClick={async () => await this.refExportAll.download()}
                                className="btn btn-primary"
                            >
                                导出全部
                            </button>
                        )}
                        {this.state.itemsInCurrentPage.length > 0 && (
                            <button
                                onClick={async () => await this.refExportCurrentPage.download()}
                                className="btn btn-primary"
                            >
                                导出当前页
                            </button>
                        )}
                    </div>
                </div>

                {this.state.itemsInCurrentPage?.length > 0 ? (
                    <div className="tw-overflow-x-auto">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    {React.Children.map(this.props.children, (field) => {
                                        return React.isValidElement(field) ? (
                                            <th key={field.props.key}>
                                                {field.props.name ? (
                                                    <a
                                                        href={"#"}
                                                        onClick={() => {
                                                            this.setState({
                                                                ordering: {
                                                                    key: field.props.name,
                                                                    descending:
                                                                        this.state.ordering.key === field.props.name &&
                                                                        !this.state.ordering.descending,
                                                                },
                                                            });
                                                        }}
                                                    >
                                                        {field.props.title}
                                                    </a>
                                                ) : (
                                                    field.props.title
                                                )}

                                                {this.state.ordering.key &&
                                                    this.state.ordering.key == field.props.name &&
                                                    !this.state.ordering.descending && <BsCaretUp />}

                                                {this.state.ordering.key &&
                                                    this.state.ordering.key == field.props.name &&
                                                    this.state.ordering.descending && <BsCaretDown />}
                                            </th>
                                        ) : (
                                            <th />
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.itemsInCurrentPage.map((item) => {
                                    let trClass = "";

                                    if (this.props.rowTypeFunc !== undefined) {
                                        switch (this.props.rowTypeFunc(item)) {
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
                                        <tr className={trClass} key={this.props.keyFunc?.(item)}>
                                            {React.Children.map(this.props.children, (field) => {
                                                let tdClass = "";

                                                if (this.props.cellTypeFunc !== undefined) {
                                                    switch (this.props.cellTypeFunc(item, field)) {
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
                                                                values: item,
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
                        </table>
                    </div>
                ) : (
                    <span>没有数据。</span>
                )}

                <div className="row">
                    <div className="col">{pagination}</div>
                </div>
            </SimpleLoading>
        );
    }
}

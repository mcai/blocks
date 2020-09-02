import React, {Component, Fragment} from "react";
import {SimpleTableState} from "./SimpleTableState";
import {SimpleTableProps} from "./SimpleTableProps";
// @ts-ignore
import ReactExport from "react-data-export";
import {Button, Table} from "react-bootstrap";
import {SimplePagination} from "../SimplePagination/SimplePagination";
import {Formatting} from "../../utils/Formatting";

export class SimpleTable extends Component<SimpleTableProps, SimpleTableState> {
    constructor(props: SimpleTableProps) {
        super(props);

        this.state = {
            pageNum: this.props.pageNum,

            count: 0,
            pageCount: 0,
            itemsInCurrentPage: []
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
            itemsInCurrentPage: []
        });

        let result = await this.props.dataProvider.getList(this.props.resource, this.props.action, {
            pageSize: this.props.pageSize,
            pageNum: this.state.pageNum
        });

        this.setState({
            count: result?.count ?? 0,
            pageCount: result?.pageCount ?? 0,
            itemsInCurrentPage: result?.itemsInCurrentPage ?? []
        });
    }

    render(): React.ReactNode {
        let paging = (
            <SimplePagination
                pageCount={this.state.pageCount}
                pageNum={this.state.pageNum}
                count={this.state.count}
                pageSize={this.props.pageSize}
                onClick={(pageNum) => this.setState({
                    pageNum: pageNum
                })}
            />
        );

        return (
            <Fragment>
                {paging}

                <ReactExport.ExcelFile element={(
                    <Button>
                        导出
                    </Button>
                )} filename={Formatting.toFormattedDateTimeStringAsFileName()}>
                    <ReactExport.ExcelSheet data={this.state.itemsInCurrentPage} name="Sheet1">
                        {
                            this.props.fields.filter(field => field.renderAsText !== undefined).map(field => <ReactExport.ExcelColumn label={field.title} value={(item: any) => field.renderAsText?.(item)}/>)
                        }
                    </ReactExport.ExcelSheet>
                </ReactExport.ExcelFile>

                {
                    this.props.extra
                }

                {
                    this.state.itemsInCurrentPage?.length > 1
                        ? (
                            <Table striped={true} bordered={true} hover={true}>
                                <thead>
                                <tr>
                                    {
                                        this.props.fields.map(field => <th>{field.title}</th>)
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.itemsInCurrentPage.map(item => (
                                        <tr>
                                            {
                                                this.props.fields.map(field => <td>{field.render(item)}</td>)
                                            }
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </Table>
                        )
                        : (<span>没有数据。</span>)
                }
            </Fragment>
        );
    }
}

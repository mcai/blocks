import React, {Component, Fragment} from "react";
import {PagedDataViewState} from "./PagedDataViewState";
import {PagedDataViewProps} from "./PagedDataViewProps";
// @ts-ignore
import ReactExport from "react-data-export";
import {Button, Table} from "react-bootstrap";
import {Pager} from "../Pager/Pager";
import {Formatting} from "../../utils/Formatting";

export class PagedDataView<ItemT> extends Component<PagedDataViewProps<ItemT>, PagedDataViewState<ItemT>> {
    constructor(props: PagedDataViewProps<ItemT>) {
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
        prevProps: Readonly<PagedDataViewProps<ItemT>>,
        prevState: Readonly<PagedDataViewState<ItemT>>,
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

        let {count, pageCount, itemsInCurrentPage} = await this.props.getItems(this.props.pageSize, this.state.pageNum);

        this.setState({
            count: count,
            pageCount: pageCount,
            itemsInCurrentPage: itemsInCurrentPage
        });
    }
    render(): React.ReactNode {
        let paging = (
            <Pager
                pageCount={this.state.count ?? 0}
                pageNum={this.state.pageNum + 1}
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
                        ? this.getTable()
                        : (<span>没有数据。</span>)
                }
            </Fragment>
        );
    }

    protected getTable(): any {
        return (
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
        );
    }
}

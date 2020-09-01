import React, {Component} from "react";
import {PagedDataViewState} from "./PagedDataViewState";
import {DataLoader} from "../DataLoader/DataLoader";
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
            pageSize: 10,
            pageNum: 0,
            paging: undefined
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
        if (prevState.pageNum !== this.state.pageNum || prevState.pageSize !== this.state.pageSize) {
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
            paging: undefined
        });

        let paging = await this.props.getItems(this.state.pageSize, this.state.pageNum);

        this.setState({
            paging: paging
        });
    }
    render(): React.ReactNode {
        let paging = (
            this.state.paging != null && <Pager
                pageCount={this.state.paging.count ?? 0}
                pageNum={this.state.pageNum + 1}
                count={this.state.paging.count}
                pageSize={this.state.pageSize}
                onClick={(pageNum) => this.setState({
                    pageNum: pageNum
                })}
            />
        );

        return (
            <DataLoader isDataLoaded={this.state.paging != null}>
                {paging}

                <ReactExport.ExcelFile element={(
                    <Button>
                        导出
                    </Button>
                )} filename={Formatting.toFormattedDateTimeStringAsFileName()}>
                    <ReactExport.ExcelSheet data={this.state.paging?.itemsInCurrentPage} name="Sheet1">
                        {
                            this.props.fields.filter(field => field.renderAsText !== undefined).map(field => <ReactExport.ExcelColumn label={field.title} value={(item: any) => field.renderAsText?.(item)}/>)
                        }
                    </ReactExport.ExcelSheet>
                </ReactExport.ExcelFile>

                {
                    this.props.extra
                }

                {
                    this.state.paging != null
                    ? this.getTable()
                    : (<span>没有数据。</span>)
                }
            </DataLoader>
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
                    this.state.paging?.itemsInCurrentPage.map(item => (
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

import React, {Component, Fragment} from "react";
import {SimpleTableState} from "./SimpleTableState";
import {SimpleTableProps} from "./SimpleTableProps";
// @ts-ignore
import ReactExport from "react-data-export";
import {Button, Col, Row, Table} from "react-bootstrap";
import {SimplePagination} from "../SimplePagination/SimplePagination";
import {Formatting} from "../../utils/Formatting";
import {SimpleExport} from "../SimpleExport/SimpleExport";

export class SimpleTable extends Component<SimpleTableProps, SimpleTableState> {
    constructor(props: SimpleTableProps) {
        super(props);

        this.state = {
            pageNum: this.props.initialPageNum,

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
        return (
            <Fragment>
                <Row>
                    <Col>
                        <div className={"float-right"}>
                            <SimpleExport
                                pageSize={this.props.pageSize}
                                dataProvider={this.props.dataProvider}
                                resource={this.props.resource}
                                action={this.props.action}
                                fields={this.props.fields}
                                buttonText={"导出全部"}
                            />

                            <SimpleExport
                                pageSize={this.props.pageSize}
                                startPageNum={this.state.pageNum}
                                endPageNum={this.state.pageNum}
                                dataProvider={this.props.dataProvider}
                                resource={this.props.resource}
                                action={this.props.action}
                                fields={this.props.fields}
                                buttonText={"导出当前页"}
                            />

                            {
                                this.props.extra
                            }
                        </div>

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

import {Component} from "react";
import {PagerProps} from "./PagerProps";
import {Button, Col, Pagination, Row} from "react-bootstrap";
import React from "react";

export class Pager extends Component<PagerProps, any> {
    get hasPreviousPage() {
        return this.props.pageNum > 0;
    }

    get hasNextPage() {
        return this.props.pageNum < this.props.pageCount - 1;
    }

    render() {
        return (
            <Row>
                <Col>
                    {
                        this.props.count > 0 && <label>
                            第 {this.props.pageNum + 1} / {this.props.pageCount} 页 (共 {this.props.count} 项, 本页显示 {this.props.pageSize} 项)
                        </label>
                    }

                    {
                        this.props.pageCount > 1 && <Pagination>
                            <Pagination.Item>
                                <Button variant={"primary"} onClick={() => this.props.onClick(0)}>首页</Button>
                            </Pagination.Item>

                            {
                                this.hasPreviousPage && <Pagination.Item>
                                    <Button variant={"primary"} onClick={() => this.props.onClick(this.props.pageNum - 1)}>上页</Button>
                                </Pagination.Item>
                            }

                            {
                                this.hasNextPage && <Pagination.Item>
                                    <Button variant={"primary"} onClick={() => this.props.onClick(this.props.pageNum + 1)}>下页</Button>
                                </Pagination.Item>
                            }

                            <Pagination.Item>
                                <Button variant={"primary"} onClick={() => this.props.onClick(this.props.pageCount - 1)}>尾页</Button>
                            </Pagination.Item>
                        </Pagination>
                    }
                </Col>
            </Row>
        );
    }
}

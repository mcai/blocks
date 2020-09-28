import {Component, Fragment} from "react";
import {SimplePaginationProps} from "./SimplePaginationProps";
import {Pagination} from "react-bootstrap";
import React from "react";
import {SimpleButton} from "../../styles/SimpleButton/SimpleButton";
import {SimpleRow} from "../../styles/SimpleRow/SimpleRow";

export class SimplePagination extends Component<SimplePaginationProps, any> {
    get hasPreviousPage() {
        return this.props.pageNum > 0;
    }

    get hasNextPage() {
        return this.props.pageNum < this.props.pageCount - 1;
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.pageCount > 1 && <Fragment>
                        <SimpleButton onClick={() => this.props.onClick(0)}>首页</SimpleButton>

                        {
                            this.hasPreviousPage && <SimpleButton onClick={() => this.props.onClick(this.props.pageNum - 1)}>上页</SimpleButton>
                        }

                        {
                            this.hasNextPage && <SimpleButton onClick={() => this.props.onClick(this.props.pageNum + 1)}>下页</SimpleButton>
                        }

                        <SimpleButton onClick={() => this.props.onClick(this.props.pageCount - 1)}>尾页</SimpleButton>
                    </Fragment>
                }

                {
                    this.props.count > 0 && <label>
                        第 {this.props.pageNum + 1} / {this.props.pageCount} 页 (共 {this.props.count} 项, 本页显示 {this.props.pageSize} 项)
                    </label>
                }
            </Fragment>
        );
    }
}

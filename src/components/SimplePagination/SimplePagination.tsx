import { Component, Fragment } from "react";
import { SimplePaginationProps } from "./SimplePaginationProps";
import React from "react";
import { Button } from "react-bootstrap";

export class SimplePagination extends Component<SimplePaginationProps, any> {
    get hasPreviousPage() {
        return this.props.pageNum > 0;
    }

    get hasNextPage() {
        return this.props.pageNum < this.props.pageCount - 1;
    }

    render() {
        return (
            <div className={"mb-3"}>
                {this.props.pageCount > 1 && (
                    <Fragment>
                        <Button variant={"primary"} className={"mr-3"} onClick={() => this.props.onClick(0)}>
                            首页
                        </Button>

                        {this.hasPreviousPage && (
                            <Button
                                variant={"primary"}
                                className={"mr-3"}
                                onClick={() => this.props.onClick(this.props.pageNum - 1)}
                            >
                                上页
                            </Button>
                        )}

                        {this.hasNextPage && (
                            <Button
                                variant={"primary"}
                                className={"mr-3"}
                                onClick={() => this.props.onClick(this.props.pageNum + 1)}
                            >
                                下页
                            </Button>
                        )}

                        <Button
                            variant={"primary"}
                            className={"mr-3"}
                            onClick={() => this.props.onClick(this.props.pageCount - 1)}
                        >
                            尾页
                        </Button>
                    </Fragment>
                )}

                {this.props.count > 0 && (
                    <label>
                        第 {this.props.pageNum + 1} / {this.props.pageCount} 页 (共 {this.props.count} 项, 本页显示{" "}
                        {this.props.pageSize} 项)
                    </label>
                )}
            </div>
        );
    }
}

import { Component, Fragment } from "react";
import { SimplePaginationProps } from "./SimplePaginationProps";
import React from "react";

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
                    <div className="btn-group">
                        <button className={"btn btn-primary"} onClick={() => this.props.onClick(0)}>
                            首页
                        </button>

                        {this.hasPreviousPage && (
                            <button
                                className={"btn btn-primary"}
                                onClick={() => this.props.onClick(this.props.pageNum - 1)}
                            >
                                上页
                            </button>
                        )}

                        {this.hasNextPage && (
                            <button
                                className={"btn btn-primary"}
                                onClick={() => this.props.onClick(this.props.pageNum + 1)}
                            >
                                下页
                            </button>
                        )}

                        <button
                            className={"btn btn-primary"}
                            onClick={() => this.props.onClick(this.props.pageCount - 1)}
                        >
                            尾页
                        </button>
                    </div>
                )}

                {this.props.count > 0 && (
                    <span className="ml-3">
                        第 {this.props.pageNum + 1} / {this.props.pageCount} 页 (共 {this.props.count} 项, 本页显示{" "}
                        {this.props.pageSize} 项)
                    </span>
                )}
            </div>
        );
    }
}

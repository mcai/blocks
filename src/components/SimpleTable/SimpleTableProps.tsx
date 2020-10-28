import React from "react";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import { SimpleTableRowType } from "./SimpleTableRowType";

export interface SimpleTableProps {
    pageSize: number;
    initialPageNum: number;
    initialOrdering: {
        key: string;
        descending: boolean;
    };

    dataProvider: SimpleDataProvider;
    resource: string;
    action: string;

    filter: any;

    rowTypeFunc?: (item: any) => SimpleTableRowType;
    cellTypeFunc?: (item: any, field: React.ReactNode) => SimpleTableRowType;

    keyFunc?: (item: any) => string | number | undefined;

    extra?: React.ReactNode;
}

import React from "react";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import { SimpleTableRowType } from "./SimpleTableRowType";

export interface SimpleTableProps {
    pageSize: number;
    initialPageNum: number;
    initialOrdering?: any;

    dataProvider: SimpleDataProvider;
    resource: string;
    action: string;

    filter?: any;

    rowTypeFunc?: (values: any) => SimpleTableRowType;

    cellTypeFunc?: (values: any, field: React.ReactNode) => SimpleTableRowType;

    keyFunc?: (values: any) => string | number | undefined;

    extra?: React.ReactNode;
}

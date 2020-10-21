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

    getRowTypeFunc?: (values: any) => SimpleTableRowType;

    getCellTypeFunc?: (values: any, field: React.ReactNode) => SimpleTableRowType;

    getKeyFunc?: (values: any) => string | number;

    extra?: React.ReactNode;
}

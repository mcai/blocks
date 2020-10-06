import {SimpleField} from "../../fields/SimpleField";
import React from "react";
import {SimpleDataProvider} from "../../data/SimpleDataProvider";
import {SimpleTableRowType} from "./SimpleTableRowType";

export interface SimpleTableProps {
    pageSize: number;
    initialPageNum: number;
    initialOrdering?: any;

    dataProvider: SimpleDataProvider;
    resource: string;
    action: string;

    extraData?: any;

    fields: SimpleField[];

    getRowTypeFunc?: (item: any) => SimpleTableRowType;

    getCellTypeFunc?: (item: any, field: SimpleField) => SimpleTableRowType;

    extra?: React.ReactNode;
}

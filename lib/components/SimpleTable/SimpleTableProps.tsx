import {SimpleField} from "../../fields/SimpleField";
import React from "react";
import {SimpleDataProvider} from "../../data/SimpleDataProvider";
import {SimpleTableRowType} from "./SimpleTableRowType";
import {SimpleTableOrderingDirection} from "./SimpleTableOrderingDirection";

export interface SimpleTableProps {
    pageSize: number;
    initialPageNum: number;
    initialOrdering?: any;
    orderingOnClick?: (ordering?: any) => any;
    getOrderingDirectionFunc?: (field: any, ordering?: any) => SimpleTableOrderingDirection;

    dataProvider: SimpleDataProvider;
    resource: string;
    action: string;

    extraData?: any;

    fields: SimpleField[];

    getRowTypeFunc?: (item: any) => SimpleTableRowType;

    extra?: React.ReactNode;
}

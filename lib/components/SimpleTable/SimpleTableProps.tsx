import {SimpleTableField} from "./SimpleTableField";
import React from "react";

export interface SimpleTableProps<ItemT> {
    pageSize: number
    pageNum: number

    getItems: (
        pageSize: number,
        pageNum: number
    ) => Promise<{
        count: number,
        pageCount: number
        itemsInCurrentPage: ItemT[]
    }>;

    fields: SimpleTableField<ItemT>[]

    extra?: React.ReactNode
}

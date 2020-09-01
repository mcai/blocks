import {Field} from "./Field";
import React from "react";

export interface PagedDataViewProps<ItemT> {
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

    fields: Field<ItemT>[]

    extra?: React.ReactNode
}

import {Field} from "./Field";
import React from "react";
import {Paging} from "./Paging";

export interface PagedDataViewProps<ItemT> {
    getItems: (
        pageSize: number,
        pageNum: number
    ) => Promise<Paging<ItemT>>;

    fields: Field<ItemT>[]

    extra?: React.ReactNode
}
